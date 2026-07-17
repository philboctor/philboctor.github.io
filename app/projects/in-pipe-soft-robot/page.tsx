import { ProjectStoryPage } from "@/components/ProjectStoryPage";

export const metadata = {
  title: "In-Pipe Soft Robot | Phil Boctor",
};

export default function InPipeSoftRobotProjectPage() {
  return (
    <ProjectStoryPage
      title="In-Pipe Soft Robot"
      summary="A pneumatically actuated soft crawler built around mold design, silicone manufacturing, and repeatable locomotion through tubing."
      role="Mechanical Design Team Member, Yale University Introduction to Soft Robotics, New Haven, Connecticut"
      timeline="Fall 2024"
      tools={[
        "SolidWorks",
        "Four-student team",
        "Mold design",
        "Silicone casting",
        "Pneumatics",
        "Arduino solenoid control",
        "Soft robotics",
      ]}
      mediaLayout="softRobotTiles"
      hero={{
        kind: "image",
        src: "/images/projects/soft-robot/selected/img-0962.jpg",
        alt: "Fully assembled in-pipe soft robot prototype",
        caption:
          "The completed prototype packaged the compliant body, printed legs, and single McKibben actuator into a crawler that could be tested in tubing. The design was based on published soft-robotics research, but the engineering work was in reconstructing it, manufacturing it, and making it actuate repeatably with the tools available.",
        aspect: "natural",
        fit: "contain",
      }}
      overview="This project was completed for Yale's Introduction to Soft Robotics course. Our objective was to build a pneumatically actuated soft robot that could crawl through pipe networks for potential inspection applications; unlike a rigid robot with multiple joints and actuators, this design used one McKibben actuator and compliant body geometry to conform to tubing and generate locomotion. My contribution focused on recreating the robot in SolidWorks from published research, manufacturing the printed components, participating in mold fabrication and assembly, and coordinating much of the mechanical build effort."
      challenge="The main challenge was turning a published concept into a working prototype without complete design files. I contacted the paper's corresponding author before starting, but when no additional information became available, I reconstructed the design from the publication and available photographs. From there, the difficult work was manufacturing: mold alignment, silicone filling and curing, demolding, pneumatic sealing, and assembly all affected whether the actuator leaked, burst, or produced useful motion."
      work={[
        "I recreated the complete robot in SolidWorks from the published paper and photographs, then developed the CAD into mold-ready and assembly-ready parts.",
        "I manufactured nearly all printed components and participated in mold fabrication, silicone casting, demolding, and final assembly.",
        "I coordinated much of the mechanical design and manufacturing effort while teammates contributed to mold fabrication, assembly, and Arduino control of the pneumatic solenoid.",
        "I used actuator tests and pipe trials to iterate around leaks, bursting, dimensional accuracy, and the difference between smooth and ribbed tubing.",
      ]}
      media={[
        {
          kind: "video",
          src: "/images/projects/soft-robot/selected/img-0977.mp4",
          alt: "Video demo of the soft robot actuating",
          caption:
            "This actuation test shows the engineering question we were trying to answer: could one McKibben actuator make the body buckle and recover repeatably enough to crawl? The prototype produced repeatable pneumatic actuation and locomotion through straight tubing, but testing also showed that tubing friction and manufacturing variation strongly affected performance.",
          featured: true,
          aspect: "wide",
          fit: "contain",
        },
        {
          kind: "image",
          src: "/images/projects/soft-robot/selected/soft-robot-cad-assembly-cropped.jpg",
          alt: "Full CAD assembly of the in-pipe soft robot",
          caption:
            "The CAD assembly was reconstructed from the published paper and available photographs rather than from supplied design files. Building the full model in SolidWorks let us reason through actuator placement, pipe-facing geometry, printed leg interfaces, and the mold strategy before committing to fabrication.",
          fit: "contain",
        },
        {
          kind: "image",
          src: "/images/projects/soft-robot/selected/img-0962.jpg",
          alt: "Fully assembled in-pipe soft robot prototype",
          caption:
            "The assembled robot shows how the compliant actuator, body geometry, and printed legs came together into a testable system. In a rigid crawler, curved-pipe locomotion would typically require more joints and actuators; here, the goal was to let the soft body and one pneumatic actuator create the crawling motion.",
          fit: "contain",
        },
        {
          kind: "image",
          src: "/images/projects/soft-robot/selected/soft-robot-leg-geometry-cropped.jpg",
          alt: "CAD view of the soft robot leg geometry",
          caption:
            "The leg geometry was adapted from the published research and recreated in CAD so it could be manufactured with our available printers. This geometry mattered because it translated actuator expansion and contraction into directional contact with the pipe wall.",
          fit: "contain",
        },
        {
          kind: "image",
          src: "/images/projects/soft-robot/selected/08d33fd6-ba0a-483b-b8c7-4c397ac470e1.jpg",
          alt: "Several 3D printed silicone molds for the soft robot actuator",
          caption:
            "The mold iterations were central to the project because soft robot performance depended on the part that came out of the mold, not just the CAD shape. Alignment, wall thickness, venting, filling, curing, and demolding all affected whether the silicone actuator sealed properly or failed during inflation.",
        },
        {
          kind: "image",
          src: "/images/projects/soft-robot/selected/4fc42d63-ed6e-47f5-899e-f530c4c38e04.jpg",
          alt: "McKibben actuator used in the soft robot",
          caption:
            "The McKibben actuator was the single active element driving the robot's motion. Its reliability depended on pneumatic sealing and consistent silicone geometry; small manufacturing defects could lead to leaks, bursting, or inconsistent contraction.",
        },
        {
          kind: "image",
          src: "/images/projects/soft-robot/selected/c858bf56-ed57-460b-8877-97136f808812.jpg",
          alt: "Soft robot assembly without the McKibben actuator installed",
          caption:
            "This assembly stage made the integration problem visible: the body had to accept the actuator, preserve alignment, and keep the contact geometry consistent. It was also where small dimensional errors from printing, casting, or trimming started to affect pneumatic sealing and final motion.",
        },
        {
          kind: "image",
          src: "/images/projects/soft-robot/selected/img-0975.jpg",
          alt: "TPU legs for the soft robot on a 3D printer bed",
          caption:
            "The printed TPU legs were part of the locomotion interface between the actuator and the pipe wall. Their flexibility helped the robot conform to the tube, but testing showed that environmental details mattered: ribbed hamster tubing introduced additional resistance compared with smoother tubing.",
        },
      ]}
      iteration="The iteration was mostly about manufacturing reliability. If the mold alignment was off, the silicone thickness varied, or the pneumatic seal was weak, the actuator behavior changed. The useful tests asked whether the actuator inflated without rupturing, whether the body converted that actuation into forward motion, and whether the same behavior repeated across multiple trials and tube conditions."
      outcome="The completed prototype demonstrated repeatable pneumatic actuation and locomotion through straight sections of tubing. Testing also showed the limits of the build: manufacturing accuracy and environmental conditions strongly affected performance, and ribbed hamster tubing introduced enough extra resistance to reduce locomotion effectiveness compared with smoother tubing."
      lessons={[
        "Manufacturing soft materials is a different design problem than printing or machining rigid parts.",
        "Mold quality directly affects actuator reliability, sealing, and repeatability.",
        "Material behavior and test environment can dominate performance even when the mechanism concept is sound.",
        "Rapid prototyping is valuable for manufacturing processes, not only for mechanical parts.",
      ]}
    />
  );
}
