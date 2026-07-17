import { createHash } from "node:crypto";
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const rawRoot = path.join(projectRoot, "Website Media");
const manifestDir = path.join(projectRoot, ".media-review");
const previewRoot = path.join(projectRoot, "public", "media-review");
const maxPreviewVideoBytes = 150 * 1024 * 1024;

const webReadyImages = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const webReadyVideos = new Set([".mp4"]);
const needsConversion = new Set([".heic", ".mov"]);

function posixPath(filePath) {
  return filePath.split(path.sep).join("/");
}

function bytesToMB(bytes) {
  return Math.round((bytes / 1024 / 1024) * 100) / 100;
}

function mediaTypeFor(ext) {
  const lower = ext.toLowerCase();
  if (webReadyImages.has(lower) || lower === ".heic") return "image";
  if (webReadyVideos.has(lower) || lower === ".mov") return "video";
  return "unsupported";
}

function statusFor(ext) {
  const lower = ext.toLowerCase();
  if (webReadyImages.has(lower) || webReadyVideos.has(lower)) return "web-ready";
  if (needsConversion.has(lower)) return "needs conversion";
  return "unsupported";
}

function suggestedProjectFor(group) {
  const name = group.toLowerCase();
  if (name.includes("stewart")) return "Stewart Hand";
  if (name.includes("soft")) return "Soft Robot";
  if (name.includes("capstone")) return "Slipform Feed";
  if (name.includes("verustruct")) return "Verustruct";
  if (name.includes("art") || name.includes("gift")) return "Art Projects and Gifts";
  if (name.includes("cubesat")) return "CubeSat";
  return "TODO";
}

function suggestedUseFor(fileName, mediaType, sizeBytes, width, height) {
  const lower = fileName.toLowerCase();
  if (mediaType === "video") return sizeBytes > maxPreviewVideoBytes ? "Demo video, review large source locally" : "Demo video";
  if (lower.includes("cad") || lower.includes("assembly") || lower.includes("setup")) return "Project page gallery";
  if (width && height && width >= height && width >= 1400) return "Hero candidate";
  if (width && height && width >= 1000) return "Project card candidate";
  return "Detail/process image";
}

function todoCaptionFor(group, fileName, suggestedUse) {
  return `TODO: review ${group}/${fileName} and write a specific caption before publishing. Suggested use: ${suggestedUse}.`;
}

function walk(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    if (entry.isFile()) return [fullPath];
    return [];
  });
}

function readPngDimensions(buffer) {
  if (buffer.length < 24) return null;
  if (buffer.toString("ascii", 1, 4) !== "PNG") return null;
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

function readJpegDimensions(buffer) {
  let offset = 2;
  while (offset < buffer.length) {
    if (buffer[offset] !== 0xff) return null;
    const marker = buffer[offset + 1];
    const length = buffer.readUInt16BE(offset + 2);
    if (marker >= 0xc0 && marker <= 0xc3) {
      return {
        height: buffer.readUInt16BE(offset + 5),
        width: buffer.readUInt16BE(offset + 7),
      };
    }
    offset += 2 + length;
  }
  return null;
}

function readImageDimensions(filePath, ext) {
  const lower = ext.toLowerCase();
  if (!webReadyImages.has(lower) || lower === ".webp") return null;
  const buffer = readFileSync(filePath);
  if (lower === ".png") return readPngDimensions(buffer);
  if (lower === ".jpg" || lower === ".jpeg") return readJpegDimensions(buffer);
  return null;
}

function makePreviewPath(filePath, ext, mediaType, sizeBytes) {
  const lower = ext.toLowerCase();
  if (!(webReadyImages.has(lower) || webReadyVideos.has(lower))) return null;
  if (mediaType === "video" && sizeBytes > maxPreviewVideoBytes) return null;

  const rel = path.relative(rawRoot, filePath);
  const hash = createHash("sha1").update(rel).digest("hex").slice(0, 12);
  const safeName = path.basename(filePath).replace(/[^a-z0-9._-]+/gi, "-");
  const targetDir = path.join(previewRoot, hash);
  mkdirSync(targetDir, { recursive: true });
  const target = path.join(targetDir, safeName);
  copyFileSync(filePath, target);
  return `/${posixPath(path.relative(path.join(projectRoot, "public"), target))}`;
}

function folderSummary(items) {
  const map = new Map();
  for (const item of items) {
    const summary = map.get(item.folderGroup) ?? {
      folder: item.folderGroup,
      count: 0,
      totalSizeMB: 0,
      extensions: {},
      mediaTypes: {},
    };
    summary.count += 1;
    summary.totalSizeMB += item.sizeMB;
    summary.extensions[item.extension] = (summary.extensions[item.extension] ?? 0) + 1;
    summary.mediaTypes[item.mediaType] = (summary.mediaTypes[item.mediaType] ?? 0) + 1;
    map.set(item.folderGroup, summary);
  }
  return [...map.values()].map((summary) => ({
    ...summary,
    totalSizeMB: Math.round(summary.totalSizeMB * 100) / 100,
  }));
}

function recommendationForGroup(group, items) {
  const webImages = items.filter((item) => item.mediaType === "image" && item.webReady);
  const videos = items.filter((item) => item.mediaType === "video" && item.webReady);
  const landscape = webImages.filter((item) => item.width && item.height && item.width >= item.height);
  const sortedImages = [...webImages].sort((a, b) => (b.width ?? 0) * (b.height ?? 0) - (a.width ?? 0) * (a.height ?? 0));
  const sortedLandscape = [...landscape].sort((a, b) => (b.width ?? 0) * (b.height ?? 0) - (a.width ?? 0) * (a.height ?? 0));
  const chosen = sortedLandscape.length ? sortedLandscape : sortedImages;
  const gallery = sortedImages.slice(0, 8).map((item) => item.originalPath);

  return {
    project: suggestedProjectFor(group),
    folder: group,
    projectCardVisual: chosen[0]?.originalPath ?? "TODO: no clear web-ready image found",
    projectHeroVisual: chosen[1]?.originalPath ?? chosen[0]?.originalPath ?? "TODO: no clear web-ready image found",
    projectPageVisuals: gallery,
    demoVideos: videos.map((item) => item.originalPath),
    obviousDoNotUse: items
      .filter((item) => item.duplicateCandidate || item.status === "unsupported")
      .map((item) => item.originalPath),
    note: "Conservative first pass based on folder, file type, size, and dimensions. Review visually before publishing.",
  };
}

if (!existsSync(rawRoot)) {
  console.error(`Raw media folder not found: ${rawRoot}`);
  process.exit(1);
}

mkdirSync(manifestDir, { recursive: true });
mkdirSync(previewRoot, { recursive: true });

const files = walk(rawRoot);
const seenByLooseNameAndSize = new Map();

const items = files.map((filePath) => {
  const stat = statSync(filePath);
  const rel = path.relative(rawRoot, filePath);
  const parts = rel.split(path.sep);
  const folderGroup = parts[0] ?? "Root";
  const fileName = path.basename(filePath);
  const ext = path.extname(fileName);
  const mediaType = mediaTypeFor(ext);
  const status = statusFor(ext);
  const dimensions = readImageDimensions(filePath, ext);
  const looseName = fileName.replace(/\(\d+\)(?=\.[^.]+$)/, "");
  const duplicateKey = `${folderGroup}/${looseName}/${stat.size}`;
  const duplicateCandidate = seenByLooseNameAndSize.has(duplicateKey);
  seenByLooseNameAndSize.set(duplicateKey, true);
  const webReady = status === "web-ready";
  const reviewPath = makePreviewPath(filePath, ext, mediaType, stat.size);
  const suggestedUse = suggestedUseFor(fileName, mediaType, stat.size, dimensions?.width, dimensions?.height);

  return {
    originalPath: posixPath(path.relative(projectRoot, filePath)),
    folderGroup,
    fileName,
    extension: ext || "[none]",
    mediaType,
    sizeBytes: stat.size,
    sizeMB: bytesToMB(stat.size),
    width: dimensions?.width ?? null,
    height: dimensions?.height ?? null,
    webReady,
    status,
    needsConversion: status === "needs conversion",
    reviewPath,
    suggestedProjectFolder: suggestedProjectFor(folderGroup),
    suggestedUse,
    duplicateCandidate,
    notes: duplicateCandidate
      ? "TODO: likely duplicate or alternate export. Review before excluding."
      : todoCaptionFor(folderGroup, fileName, suggestedUse),
  };
});

const groups = [...new Set(items.map((item) => item.folderGroup))];
const manifest = {
  generatedAt: new Date().toISOString(),
  rawRoot: "Website Media",
  previewRoot: "public/media-review",
  totalFiles: items.length,
  folderSummary: folderSummary(items),
  items,
  needsConversion: items.filter((item) => item.needsConversion),
  obviousExclude: items.filter((item) => item.duplicateCandidate || item.status === "unsupported"),
  recommendations: groups.map((group) =>
    recommendationForGroup(
      group,
      items.filter((item) => item.folderGroup === group),
    ),
  ),
};

writeFileSync(path.join(manifestDir, "media-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
writeFileSync(
  path.join(manifestDir, "README.md"),
  [
    "# Media Review",
    "",
    "Generated by `node scripts/media-inventory.mjs`.",
    "",
    "- Raw files stay in `Website Media/`.",
    "- Temporary review previews are copied to `public/media-review/`.",
    "- Both folders are ignored by git.",
    "- Review selections in `/media-review`, export JSON, then manually choose final publishable files later.",
    "",
  ].join("\n"),
);

console.log(`Scanned ${items.length} files from Website Media/`);
console.log(`Wrote .media-review/media-manifest.json`);
console.log(`Created temporary previews in public/media-review/ when lightweight enough`);
