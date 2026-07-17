import { ProjectStoryPage } from "@/components/ProjectStoryPage";

export const metadata = {
  title: "Verustruct Translational Slipform Subsystem Prototype | Phil Boctor",
};

export default function VerustructProjectPage() {
  return (
    <ProjectStoryPage
      title="Verustruct Translational Slipform Subsystem Prototype"
      summary="Designed, manufactured, integrated, and demonstrated a full-scale proof-of-concept prototype for Verustruct's Translational Slipform subsystem."
      role="Mechanical Engineering Intern, Verustruct, New Haven, Connecticut"
      timeline="Summer 2025"
      tools={[
        "Full-scale Translational Slipform subsystem prototype",
        "NX",
        "Mechanism design",
        "Waterjetting",
        "Machining",
        "3D printing",
        "Electromechanical integration",
      ]}
      hero={{
        kind: "image",
        src: "/images/projects/verustruct/selected/img-1631.jpg",
        alt: "Verustruct integrated retraction mechanism prototype",
        caption:
          "The completed internship prototype translated the Translational Slipform subsystem concept into a full-scale electromechanical proof of concept. It was built to demonstrate nested extension and retraction motion while keeping a central path open to represent how the future robotic system would move through or around the printed wall geometry.",
        aspect: "natural",
        fit: "contain",
      }}
      overview="Verustruct is a New Haven-based construction robotics startup developing a mobile concrete-printing system intended to avoid the footprint and setup limits of fixed gantry printers. The Translational Slipform is a core mechanical subsystem meant to help the robotic system reposition as construction progresses, and my Summer 2025 internship focused on helping design, manufacture, integrate, and demonstrate the first full-scale proof-of-concept prototype of that subsystem."
      challenge="The prototype had to turn an early Translational Slipform concept into a physical mechanism that could extend, retract, and communicate the intended nested motion at full scale. The engineering work centered on packaging horizontal and vertical retraction and extension mechanisms into the nested subsystem while keeping the central path open, making the motion visually demonstrable, and keeping the assembly manufacturable within a ten-week internship."
      work={[
        "I worked directly with the founder and founding engineer through recurring brainstorming and formal design review meetings to translate subsystem goals into requirements, concepts, and prototype features.",
        "I owned most of the full-scale subsystem CAD in NX, with support and component-level contributions from the founding engineer, focusing especially on horizontal and vertical extension and retraction mechanisms.",
        "I developed the nested cross-section concept into a complete 3D-printed mock-up and then into a manufacturable full-scale prototype using waterjet cutting, machining, 3D printing, and mechanical assembly.",
        "During the final two weeks, I took independent ownership of integration and debugging, including wiring, servo setup, calibration, control behavior, tuning, and final demonstration preparation.",
      ]}
      media={[
        {
          kind: "video",
          src: "/images/projects/verustruct/selected/img-1633.mp4",
          alt: "Verustruct full prototype motion sequence",
          caption:
            "The final demonstration shows the proof-of-concept subsystem fully extending and fully retracting through the intended nested motion. The goal was to validate that the full-scale architecture could be implemented physically and controlled through a complete motion cycle, not to claim concrete printing, autonomous operation, or production readiness.",
          featured: true,
          aspect: "wide",
          fit: "contain",
        },
        {
          kind: "image",
          src: "/images/projects/verustruct/selected/img-1592.jpg",
          alt: "Verustruct mechanical prototype detail",
          caption:
            "This mechanism detail shows the packaging problem that drove much of the CAD work: horizontal and vertical extension features had to fit into a nested cross-section without closing off the central path. The design had to be clear enough to manufacture and assemble while still communicating the future subsystem motion.",
          aspect: "natural",
          fit: "contain",
        },
        {
          kind: "image",
          src: "/images/projects/verustruct/selected/img-1634.jpg",
          alt: "Verustruct prototype comparison view",
          caption:
            "The small printed mock-up came from a nested concept introduced with help from the founding engineer, then developed by me into detailed CAD and a physical model. It helped communicate how the sections could retract, extend, and remain nested before we committed to the full-scale build.",
          aspect: "natural",
          fit: "contain",
        },
        {
          kind: "image",
          src: "/images/projects/verustruct/selected/img-1639.jpg",
          alt: "Verustruct prototype build view",
          caption:
            "The full-scale build translated the CAD into waterjet metal and plexiglass components, machined features, 3D printed parts, and mechanical assemblies that could be handled and demonstrated. This stage exposed the practical fit-up and assembly issues that are hard to see in a clean CAD motion study.",
          aspect: "natural",
          fit: "contain",
        },
        {
          kind: "image",
          src: "/images/projects/verustruct/selected/img-1589.jpg",
          alt: "Verustruct control hardware setup",
          caption:
            "Late in the internship, the hard part shifted from mechanism design to electromechanical integration. The control logic was relatively simple; the harder work was wiring the servos, setting up the gearboxes, calibrating starting positions, and debugging the physical system until the extension and retraction sequence behaved consistently.",
          aspect: "natural",
          fit: "contain",
        },
        {
          kind: "image",
          src: "/images/projects/verustruct/selected/img-1622.jpg",
          alt: "Verustruct prototype position view",
          caption:
            "Servo calibration mattered because each servo had to enter its gearbox at the correct angular position. Incorrect starting positions could create improper travel or mechanical interference, so I used simple test routines to check commanded motion before running the complete prototype sequence.",
          aspect: "natural",
          fit: "contain",
        },
      ]}
      iteration="The useful iteration came from moving between subsystem requirements, CAD, formal design reviews, manufacturing, assembly, and controls integration. The design reviews were my first substantial exposure to presenting design maturity, documenting concept decisions, communicating subsystem behavior visually, and incorporating feedback from the founder and founding engineer. Near the end, debugging became a full-system problem: wiring, servo calibration, gearbox alignment, and mechanism motion all had to work together for the prototype to complete its sequence."
      outcome="The internship concluded with a functioning full-scale Translational Slipform subsystem proof-of-concept prototype. It demonstrated complete extension and retraction, maintained an open path representative of the intended robot-wall interaction, and was tuned before the ten-week internship ended. The prototype was retained as a demonstration model for communicating the system concept."
      lessons={[
        "Ambiguous startup goals become manageable when they are translated into concrete subsystem requirements.",
        "Design reviews are useful when they communicate maturity, remaining risks, and the reasoning behind concept choices.",
        "Electromechanical prototypes have to be designed across CAD, manufacturing, wiring, controls, and calibration rather than as separate tasks.",
        "A fixed schedule rewards methodical debugging and ownership of the remaining integration details.",
      ]}
    />
  );
}
