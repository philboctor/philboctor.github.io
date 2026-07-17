import { ProjectStoryPage } from "@/components/ProjectStoryPage";

export const metadata = {
  title: "Stewart Hand Gear Differential | Phil Boctor",
};

export default function StewartHandProjectPage() {
  return (
    <ProjectStoryPage
      title="Stewart Hand Gear Differential"
      summary="Redesigned the Stewart Hand's drivetrain by replacing a string-and-pulley differential with a compact gear-driven transmission that improved torque distribution while preserving underactuated grasping."
      role="Undergraduate Researcher, Yale GRAB Lab, New Haven, Connecticut"
      timeline="January 2024 - May 2025"
      tools={[
        "SolidWorks",
        "Gear trains",
        "Underactuation",
        "3D printing",
        "Design for manufacturing",
        "Tolerance iteration",
      ]}
      hero={{
        kind: "image",
        src: "/images/projects/stewart-hand/IMG_0689.jpg",
        alt: "Stewart Hand prototype grasping a Rubik's cube",
        caption:
          "The completed prototype demonstrated the mechanical concept at the benchtop: one motor input could be distributed through the drivetrain to close all three fingers around an object. The result validated the feasibility of the gear-driven architecture, while software integration and quantitative comparison to the previous pulley mechanism remained outside the completed scope.",
        aspect: "natural",
        fit: "contain",
      }}
      overview="The Stewart Hand is a Stewart-Gough-inspired robotic hand designed for in-hand manipulation. After joining GRAB Lab in October 2023 and beginning this project in January 2024, I focused on replacing the earlier published string-and-pulley differential with a compact gear-driven drivetrain that could improve torque transfer while fitting inside the palm's tight triangular finger layout."
      challenge="The previous pulley differential had two practical limitations: friction made smooth finger reconfiguration harder, and repeated one-to-two torque splitting reduced available output torque while driving three fingers from one motor. My challenge was to package a multi-stage drivetrain inside the palm without losing the compactness that made the hand architecture useful."
      work={[
        "I developed a compact gear-driven drivetrain around one motor, one sun gear, three planetary gears, three RC gear differentials, and three custom timing-belt pulley differentials.",
        "I recreated the RC gear differential in SolidWorks, then designed a new housing that adapted the same concept into a pulley differential for this hand.",
        "I worked through the packaging, DFM, and tolerance stack-up across waterjet parts, machined parts, bearings, shafts, and 3D printed components.",
        "I completed most of the CAD-intensive design work during full-time Summer 2024 research supported by Yale's Summer Experience Award, then continued refining and assembling the prototype through Spring 2025.",
      ]}
      workTitle="Engineering Contributions"
      mediaLayout="stewartCompact"
      mediaSectionTitle={null}
      media={[
        {
          kind: "video",
          src: "/images/projects/stewart-hand/IMG_0688.mp4",
          alt: "Rubik's cube grasping video with the Stewart Hand prototype",
          caption:
            "In this grasping demo, the motor is manually actuated. When one finger contacts the cube first, the differential redirects motion so the remaining fingers keep closing until they conform around the object. The useful behavior to watch is the smooth underactuated response across all three outputs.",
          featured: true,
          aspect: "wide",
          fit: "contain",
          forceMuted: true,
        },
        {
          kind: "video",
          src: "/images/projects/stewart-hand/Stewart%20Hand%20Differential%20Working.mp4",
          alt: "Video of the Stewart Hand gear differential moving",
          caption:
            "This benchtop test checked the drivetrain before software integration. The goal was to confirm that the printed and assembled mechanism could distribute one input into synchronized finger motion without obvious binding. It was qualitative validation of the mechanical architecture, not a formal performance comparison against the earlier pulley system.",
          aspect: "wide",
          fit: "contain",
          layout: "full",
          forceMuted: true,
        },
        {
          kind: "image",
          src: "/images/projects/stewart-hand/IMG_0569.jpg",
          alt: "Close-up of belt and gear packaging on the Stewart Hand prototype",
          caption:
            "The tight belt and gear packaging shows why the drivetrain could not simply be scaled up or laid out in a straight line. Each stage had to fit around the triangular finger arrangement while leaving enough clearance for shafts, bearings, printed housings, and belt paths. This was where tolerance stack-up became a real design constraint rather than an abstract CAD concern.",
        },
        {
          kind: "image",
          src: "/images/projects/stewart-hand/IMG_0458.jpg",
          alt: "Top view of the Stewart Hand drivetrain assembly",
          caption:
            "The full assembly grew to more than 200 components, so readability and assembly sequence mattered. ABS printed gears were selected as a practical balance of strength, durability, and weight for repeated drivetrain testing. This view captures the project at the point where CAD decisions became a moving mechanical assembly.",
        },
        {
          kind: "image",
          src: "/images/projects/stewart-hand/IMG_0052.JPG",
          alt: "Stewart Hand prototype in front of a CAD model",
          caption:
            "This project became my first major CAD-intensive engineering build and the project where I became proficient in SolidWorks. Recreating the hand and drivetrain in CAD helped expose packaging conflicts before fabrication, but the physical prototype still revealed fit, alignment, and friction issues that only appeared during assembly.",
          fit: "contain",
        },
      ]}
      iteration="Most of the iteration lived in the physical details: printed gear selection, gear mesh, shaft alignment, belt routing, bearing fits, and how much tolerance stack-up the drivetrain could tolerate before motion became inconsistent. The hand's six Stewart-style linear actuators handle in-hand manipulation, while my drivetrain controlled finger opening and closing; separating those functions made the mechanical scope clear as the prototype matured."
      outcome="The completed prototype qualitatively validated the new mechanical architecture. The drivetrain smoothly distributed one motor input across all three fingers and demonstrated feasible underactuated grasping at the benchtop. Formal software integration, reproduction of the published paper's tests, and quantitative comparison with the previous pulley mechanism were outside the completed scope of the project."
      lessons={[
        "Compact drivetrains make tolerance stack-up visible very quickly.",
        "Underactuation depends on mechanical architecture before it becomes a controls problem.",
        "Rapid 3D printing is powerful, but repeated testing still depends on material choice, alignment, and fit.",
        "Designing for manufacturing matters even in a research prototype because every difficult-to-assemble part slows iteration.",
      ]}
    />
  );
}
