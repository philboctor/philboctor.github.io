import { ProjectStoryPage } from "@/components/ProjectStoryPage";

export const metadata = {
  title: "Machine Design Hand-Crank Fan | Phil Boctor",
};

export default function MachineDesignFanProjectPage() {
  return (
    <ProjectStoryPage
      title="Machine Design Hand-Crank Fan"
      summary="An individual Machine Elements manufacturing project: a hand-powered fan machined from supplied stock, assembled, aligned, and tested for smooth operation."
      role="Individual Machine Elements course project, Yale University"
      timeline="Fall 2025"
      tools={[
        "Waterjetting",
        "Manual milling",
        "Lathe work",
        "Drilling and tapping",
        "Deburring",
        "Assembly",
      ]}
      hero={{
        kind: "image",
        src: "/images/projects/art-projects-gifts/selected/img-4541.jpg",
        alt: "Finished machine elements hand-crank fan",
        caption:
          "The completed fan was submitted and tested as part of the Machine Elements course. Repeated vertical input drove the crank mechanism, which converted the motion into rotation of the fan hub and blades.",
        aspect: "natural",
        fit: "contain",
      }}
      overview="Over a semester-long Machine Elements project, I individually manufactured and assembled a hand-powered fan from raw stock supplied by the course. The mechanism converted a reciprocating vertical input into rotary motion, so the finished assembly depended on accurate machining, clean interfaces, and alignment across every custom component before it could operate smoothly."
      challenge="The assignment was less about inventing a new fan and more about making a defined mechanism work physically. Every custom part had to be manufactured from raw material, finished, fit, and assembled alongside the course's normal problem sets, lectures, and exams."
      work={[
        "I machined every custom component for my fan from supplied raw stock using waterjet cutting, manual milling, lathe work, drilling, and tapping.",
        "I deburred and finished the parts so the individually fabricated components could assemble without unnecessary friction or interference.",
        "I aligned the crank, shaft, hub, frame, and blades so the repeated vertical input could drive smooth fan rotation.",
        "I tested the completed fan for the course evaluation, confirming that the mechanism operated smoothly and produced airflow.",
      ]}
      workTitle="Manufacturing and Assembly"
      mediaLayout="threeColumn"
      media={[
        {
          kind: "image",
          src: "/images/projects/art-projects-gifts/selected/img-4542.jpg",
          alt: "Back view of the finished hand-crank fan",
          caption:
            "The back side shows how the individually machined parts had to line up as one mechanism. Small errors in hole placement, shaft alignment, or crank fit would have shown up immediately as rough motion.",
        },
        {
          kind: "image",
          src: "/images/projects/art-projects-gifts/selected/img-2161.jpg",
          alt: "Assembled hand-crank fan mechanism",
          caption:
            "The assembled mechanism converted an up-and-down hand input into rotation of the fan hub. The inertia of the rotating assembly helped carry the motion between input strokes, but only after the fabricated parts were fit and aligned cleanly.",
        },
        {
          kind: "image",
          src: "/images/projects/art-projects-gifts/selected/img-2066.jpg",
          alt: "Post for the hand-crank fan mechanism",
          caption:
            "This post was one of the custom components manufactured from supplied stock. Drilling, tapping, finishing, and deburring mattered because the threaded interfaces and bearing surfaces had to assemble cleanly with the rest of the frame.",
        },
        {
          kind: "image",
          src: "/images/projects/art-projects-gifts/selected/img-2105.jpg",
          alt: "Fins for the hand-crank fan",
          caption:
            "The fan fins were fabricated as part of the rotating assembly, where balance, clearance, and edge finishing affected how smoothly the fan could spin. Waterjet cutting was useful for producing the flat profiles before final cleanup and assembly.",
        },
      ]}
      iteration="The useful iteration happened at the bench: deburr a part, test the fit, adjust the assembly, and check whether the motion became smoother. Small dimensional errors accumulated quickly when several individually manufactured parts had to move together."
      outcome="The completed assembly converted repeated vertical input into smooth fan rotation and passed the course's functional evaluation. The fan blades reached useful rotational speed and produced airflow without needing quantified performance claims."
      lessons={[
        "Manual machining confidence comes from planning the process order before cutting material.",
        "Small dimensional errors become more visible once multiple parts have to function as one mechanism.",
        "Balancing shop work with the rest of a technical course requires steady progress, not last-minute assembly.",
      ]}
    />
  );
}
