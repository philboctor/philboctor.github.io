import { ProjectStoryPage } from "@/components/ProjectStoryPage";

export const metadata = {
  title: "CubeSat Rover | Phil Boctor",
};

export default function CubeSatRoverProjectPage() {
  return (
    <ProjectStoryPage
      title="CubeSat Rover"
      summary="A deployable rover prototype designed to fit inside a 10 cm CubeSat envelope, expand after deployment, traverse a grid, and collect basic environmental data."
      role="Mechanical Design Team Member, Yale University Mechanical Design, New Haven, Connecticut"
      timeline="Fall 2023"
      tools={[
        "Mechanical design",
        "3-person mechanical engineering team",
        "Packaging",
        "Deployable mechanisms",
        "Waterjetting",
        "Machining",
        "Testing",
      ]}
      hero={{
        kind: "video",
        src: "/images/projects/cubesat/selected/img-6222.mp4",
        alt: "CubeSat rover extension and drive demo",
        caption:
          "This demo shows the core mechanism after deployment: the spring-assisted track system expands outward to create a wider, more stable platform before the rover drives. The mechanism was designed around the CubeSat packaging constraint, where the rover had to launch compactly and become usable only after release.",
        aspect: "portrait",
        fit: "contain",
      }}
      overview="This was the semester design project for Yale's Mechanical Design course. Each team defined a different CubeSat mission; our three-person team built a deployable rover concept intended to survey an extraterrestrial landing site by traversing a predefined grid and collecting terrain inclination, temperature, and ambient light data. My work focused on the mechanical design, material selection, deployable chassis mechanism, and manufacturing needed to fit the system inside a 10 x 10 x 10 cm envelope under a 1 kg mass limit."
      challenge="The design had to package sensors, electronics, drivetrain parts, a spring-assisted deployment mechanism, and structure inside a 10 cm cube while remaining light enough to meet the mass limit. It also had to deploy after landing and remain functional after impact, so packaging, weight, and durability had to be balanced together instead of treated as separate problems."
      work={[
        "I designed the deployable tracked chassis so the rover could launch inside the CubeSat envelope and expand into a wider wheelbase after deployment.",
        "I consulted experienced machinists at Yale's Wright Lab before selecting structural materials, balancing weight and durability requirements for the project.",
        "I helped manufacture the structure using waterjet aluminum plates, custom machined components, tapped holes, and 3D printed parts where appropriate.",
        "I used deployment, drive, and drop testing to check whether the rover still functioned after impact rather than treating the CAD model as the final answer.",
      ]}
      mediaLayout="cubesat"
      mediaSectionTitle={null}
      media={[
        {
          kind: "image",
          src: "/images/projects/cubesat/selected/img-8780.jpg",
          alt: "CubeSat rover final assembly labeled Wall-M",
          caption:
            "The final rover had to combine sensing, electronics, drivetrain hardware, deployment features, and structure while staying inside the CubeSat mass and volume limits. We called it Wall-M, but the useful engineering lesson was the packaging: every bracket, plate, and fastener affected both the deployment envelope and the mass budget.",
          featured: true,
          aspect: "natural",
          fit: "contain",
        },
        {
          kind: "video",
          src: "/images/projects/cubesat/selected/img-2447.mp4",
          alt: "Top-down CubeSat rover drop test video",
          caption:
            "This drop test was a qualitative impact check, not a flight-certification test. The goal was to see whether the structure, deployment mechanism, and rover remained functional after the drop.",
          aspect: "portrait",
          fit: "contain",
        },
        {
          kind: "video",
          src: "/images/projects/cubesat/selected/img-8924.mp4",
          alt: "CubeSat rover impact survival video",
          caption:
            "This alternate camera angle of the same drop test helped confirm that the rover continued operating after impact. For the mechanical design, that mattered because the deployment carriage, track hardware, and structural plates all had to survive the event well enough for the prototype to keep driving.",
          aspect: "portrait",
          fit: "contain",
        },
        {
          kind: "image",
          src: "/images/projects/cubesat/selected/img-6267.jpg",
          alt: "CubeSat rover final assembly unextended",
          caption:
            "In the stowed configuration, the rover had to keep the tracked chassis, drivetrain, electronics, sensors, and deployment hardware inside the 10 cm CubeSat envelope. This was the main packaging constraint that drove the deployable chassis design.",
        },
        {
          kind: "image",
          src: "/images/projects/cubesat/selected/img-8923.jpg",
          alt: "CubeSat rover extended assembly",
          caption:
            "After deployment, springs expanded the tracked wheelbase to create a wider stance for driving. The deployment carriage was designed specifically so the rover could satisfy the compact launch envelope without giving up all of its stability once released.",
        },
        {
          kind: "image",
          src: "/images/projects/cubesat/selected/img-6270.jpg",
          alt: "Undercarriage of the CubeSat rover",
          caption:
            "The underside shows the manufacturing tradeoffs behind the structure: waterjet aluminum plates, machined features, tapped connections, and printed parts were combined where each process made sense. This project was my introduction to tighter machining tolerances and to translating a compact CAD assembly into fabricated metal hardware.",
        },
        {
          kind: "video",
          src: "/images/projects/cubesat/selected/img-8906.mp4",
          alt: "CubeSat rover initial drive mechanism test",
          caption:
            "This drive test checked whether the rover could move after the deployment mechanism created the wider track stance. The important point was not speed; it was confirming that the drivetrain, expanded chassis, and control sequence worked together well enough for grid traversal.",
          aspect: "portrait",
          fit: "contain",
        },
        {
          kind: "video",
          src: "/images/projects/cubesat/selected/img-8760.mp4",
          alt: "CubeSat rover parts and mass margin video",
          caption:
            "This clip documents the material and mass tradeoff near the end of the build. After consulting machinists at Yale's Wright Lab, we used 2024 aluminum rather than 6061 for key structural components to balance strength and weight for the project requirements. Even with the additional components, the rover weighed 848 g, approximately 150 g below the 1 kg limit.",
          aspect: "portrait",
          fit: "contain",
          forceMuted: true,
        },
      ]}
      iteration="The project was very physical: package the system, weigh it, machine and assemble it, deploy it, drive it, drop it, and then check whether it still worked. The most useful tests were the ones that exposed whether the spring-assisted mechanism, structure, and drivetrain could survive handling and impact instead of only looking correct in CAD."
      outcome="The rover successfully demonstrated deployment, autonomous traversal in a grid pattern, and environmental sensing within the CubeSat packaging constraints. The drop testing gave qualitative confidence that the prototype structure could remain functional after impact, but it was not intended to represent a flight-qualified spacecraft or formal aerospace validation."
      lessons={[
        "Strict packaging constraints make every sensor, fastener, and bracket a system-level decision.",
        "Weight savings only matter if the structure still survives the test case the prototype actually faces.",
        "Machining tolerances and tapped connections can dominate how well a compact mechanism assembles.",
        "A deployable mechanism has to be designed for its stowed state, deployed state, and the transition between them.",
      ]}
    />
  );
}
