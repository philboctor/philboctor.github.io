import json
import re
import shutil
import sys
from pathlib import Path

from PIL import Image, ImageOps


PROJECT_SLUGS = {
    "Art Projects and Gifts": "art-projects-gifts",
    "Slipform Feed": "slipform-feed",
    "CubeSat": "cubesat",
    "Soft Robot": "soft-robot",
    "Verustruct": "verustruct",
}

COPY_VIDEO_LIMIT_BYTES = 150 * 1024 * 1024
IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}
VIDEO_EXTENSIONS = {".mp4"}


def slugify_name(name):
    stem = Path(name).stem.lower()
    stem = re.sub(r"[^a-z0-9]+", "-", stem).strip("-")
    return stem or "media"


def optimize_image(source, target):
    with Image.open(source) as image:
        image = ImageOps.exif_transpose(image)
        has_alpha = image.mode in ("RGBA", "LA") or (
            image.mode == "P" and "transparency" in image.info
        )
        image.thumbnail((2200, 2200))
        if target.suffix.lower() == ".png" and has_alpha:
            image.save(target, optimize=True)
        else:
            image = image.convert("RGB")
            image.save(target, "JPEG", quality=86, optimize=True, progressive=True)


def main():
    if len(sys.argv) != 2:
        print("Usage: python scripts/import-selected-media.py <selection-json>")
        return 1

    project_root = Path.cwd()
    selection_path = Path(sys.argv[1])
    selections = json.loads(selection_path.read_text(encoding="utf-8"))
    output = []

    for item in selections:
        selection = item.get("selection", "")
        if selection in {"Do not use", "Use later / maybe"}:
            copied = False
            public_path = None
            note = "Selection kept for later; no public copy created."
        else:
            source = project_root / item["originalPath"]
            ext = source.suffix.lower()
            project = item.get("suggestedProjectFolder") or item.get("folderGroup")
            slug = PROJECT_SLUGS.get(project, slugify_name(project))
            target_dir = project_root / "public" / "images" / "projects" / slug / "selected"
            target_dir.mkdir(parents=True, exist_ok=True)

            if ext in IMAGE_EXTENSIONS:
                with Image.open(source) as probe:
                    has_alpha = probe.mode in ("RGBA", "LA") or (
                        probe.mode == "P" and "transparency" in probe.info
                    )
                target_ext = ".png" if has_alpha else ".jpg"
                target = target_dir / f"{slugify_name(source.name)}{target_ext}"
                optimize_image(source, target)
                copied = True
                public_path = "/" + target.relative_to(project_root / "public").as_posix()
                note = "Optimized image copy created for final review/use."
            elif ext in VIDEO_EXTENSIONS:
                size = source.stat().st_size
                if size <= COPY_VIDEO_LIMIT_BYTES:
                    target = target_dir / f"{slugify_name(source.name)}.mp4"
                    shutil.copy2(source, target)
                    copied = True
                    public_path = "/" + target.relative_to(project_root / "public").as_posix()
                    note = "Selected MP4 copied. Review file size before deployment."
                else:
                    copied = False
                    public_path = None
                    note = "Selected video is over 50 MB. Compress/crop before publishing."
            else:
                copied = False
                public_path = None
                note = "Unsupported format. Convert before publishing."

        output.append(
            {
                "originalPath": item["originalPath"],
                "fileName": item["fileName"],
                "folderGroup": item["folderGroup"],
                "suggestedProjectFolder": item.get("suggestedProjectFolder", ""),
                "selection": selection,
                "suggestedUse": item.get("suggestedUse", ""),
                "captionDraft": item.get("reviewerNote", "").strip(),
                "copied": copied,
                "publicPath": public_path,
                "importNote": note,
            }
        )

    manifest_path = project_root / "data" / "selectedMedia.json"
    manifest_path.write_text(json.dumps(output, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {manifest_path}")
    print(f"Created public copies for {sum(1 for item in output if item['copied'])} selections")
    print(f"Skipped {sum(1 for item in output if not item['copied'])} selections")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
