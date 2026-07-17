export type Project = {
  slug: string;
  title: string;
  type: string;
  summary: string;
  role: string;
  skills: string[];
  status: "case-study" | "placeholder";
  media: {
    kind: "placeholder" | "image" | "video";
    src?: string;
    replacementPath: string;
    label: string;
  };
};

export const projects: Project[] = [
  {
    slug: "verustruct-tsf-retraction-mechanisms",
    title: "Verustruct TSF Retraction Mechanisms",
    type: "Internship, mechanism design",
    summary:
      "Owned the mechanical architecture for compact actuator-driven retraction mechanisms, iterating through packaging, binding, stiffness, and manufacturability constraints.",
    role: "Mechanical engineering intern, mechanism owner",
    skills: ["NX", "Mechanism design", "Packaging", "Prototype testing", "DFM"],
    status: "case-study",
    media: {
      kind: "image",
      src: "/images/projects/verustruct/selected/img-1631.jpg",
      replacementPath: "/images/projects/verustruct/",
      label: "Verustruct prototype visual",
    },
  },
  {
    slug: "stewart-hand-gear-differential",
    title: "Stewart Hand Gear Differential",
    type: "Robotics research, drivetrain design",
    summary:
      "Designed and iterated a compact gear-driven differential to coordinate three fingers from a single motor input.",
    role: "Mechanical design and drivetrain development",
    skills: ["Gear trains", "Underactuation", "CAD", "Tolerance iteration"],
    status: "case-study",
    media: {
      kind: "image",
      src: "/images/projects/stewart-hand/IMG_0689.jpg",
      replacementPath: "/images/projects/stewart-hand/",
      label: "Stewart Hand drivetrain image",
    },
  },
  {
    slug: "translational-slipform-feed-system",
    title: "Translational Slipform Feed System",
    type: "Capstone, test platform design",
    summary:
      "Led development of a conveyor-driven test platform that connected material delivery, sensing, and process testing to guide the next design iteration.",
    role: "Capstone team lead",
    skills: ["Test rigs", "LabJack DAQ", "System integration", "Validation"],
    status: "case-study",
    media: {
      kind: "image",
      src: "/images/projects/slipform-feed/selected/img-3538.jpg",
      replacementPath: "/images/projects/slipform-feed/",
      label: "Slipform feed test rig image",
    },
  },
  {
    slug: "in-pipe-soft-robot",
    title: "In-Pipe Soft Robot",
    type: "Soft robotics, fabrication",
    summary:
      "Led the CAD and fabrication effort for a McKibben-actuated soft crawler, iterating actuator geometry around silicone casting constraints.",
    role: "CAD and fabrication lead",
    skills: ["Soft robotics", "Mold design", "Pneumatics", "Fabrication"],
    status: "case-study",
    media: {
      kind: "image",
      src: "/images/projects/soft-robot/selected/img-0962.jpg",
      replacementPath: "/images/projects/soft-robot/",
      label: "Fully assembled soft robot image",
    },
  },
  {
    slug: "cubesat-rover",
    title: "CubeSat Rover",
    type: "Class project, compact hardware",
    summary:
      "Built a compact rover around packaging, weight, deployment, and drop-test constraints.",
    role: "Mechanical design and prototype build",
    skills: ["Packaging", "Fabrication", "Testing", "Mechanisms"],
    status: "case-study",
    media: {
      kind: "image",
      src: "/images/projects/cubesat/selected/img-8780.jpg",
      replacementPath: "/images/projects/cubesat/",
      label: "CubeSat rover final assembly image",
    },
  },
  {
    slug: "machine-design-hand-crank-fan",
    title: "Machine Design Hand-Crank Fan",
    type: "Machine design class project",
    summary:
      "Designed and fabricated a hand-cranked fan mechanism around posts, fins, assembly, and motion.",
    role: "Mechanism design, fabrication, and assembly",
    skills: ["Mechanism design", "Machining", "Assembly", "Testing"],
    status: "case-study",
    media: {
      kind: "image",
      src: "/images/projects/art-projects-gifts/selected/img-4541.jpg",
      replacementPath: "/images/projects/art-projects-gifts/",
      label: "Finished hand-crank fan image",
    },
  },
  {
    slug: "selected-physical-builds",
    title: "Selected Physical Builds",
    type: "Personal fabrication, gifts, and craft",
    summary:
      "A collection of waterjet, metal, wood, lighting, and small custom builds made for people around me.",
    role: "Design, fabrication, finishing, and assembly",
    skills: ["Waterjetting", "Fabrication", "Finishing", "Creative builds"],
    status: "case-study",
    media: {
      kind: "image",
      src: "/images/projects/art-projects-gifts/selected/img-2268.jpg",
      replacementPath: "/images/projects/art-projects-gifts/",
      label: "Custom Porsche 911 gift with lighting",
    },
  },
];

export const featuredProjects = projects.filter((project) =>
  [
    "verustruct-tsf-retraction-mechanisms",
    "stewart-hand-gear-differential",
    "translational-slipform-feed-system",
    "in-pipe-soft-robot",
  ].includes(project.slug),
);
