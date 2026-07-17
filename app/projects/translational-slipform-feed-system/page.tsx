import { ProjectStoryPage } from "@/components/ProjectStoryPage";

export const metadata = {
  title: "Translational Slipform Material Testbed | Phil Boctor",
};

export default function SlipformFeedProjectPage() {
  return (
    <ProjectStoryPage
      title="Translational Slipform Material Testbed"
      summary="Led a four-person, Verustruct-sponsored capstone team in developing a full-scale concrete material testbed for rapidly evaluating mixtures, additives, and environmental effects before robot integration."
      role="Team Lead and Mechanical Design Engineer, Yale University / Verustruct, New Haven, Connecticut"
      timeline="Year-long Senior Mechanical Engineering Capstone"
      tools={[
        "Four mechanical engineering seniors",
        "Mechanical design",
        "Material testbed architecture",
        "Custom conveyor",
        "Concrete testing",
        "Instrumentation",
        "Manufacturing",
      ]}
      hero={{
        kind: "image",
        src: "/images/projects/slipform-feed/selected/img-3538.jpg",
        alt: "Completed translational slipform material delivery test rig",
        caption:
          "The completed capstone testbed integrated reservoir storage, material release, additive delivery, static mixing, one-to-one form geometry, specimen transport, sensing, and data logging into one stationary platform. The goal was to let Verustruct evaluate material behavior without occupying or contaminating the robot prototype.",
        aspect: "natural",
        fit: "contain",
      }}
      overview="For my senior mechanical engineering capstone, I led a four-person Verustruct-sponsored team developing a stationary material testbed for the company's Translational Slipform concrete-printing technology. After the mechanical concept had been developed, material behavior became the next major uncertainty: the system needed a pumpable concrete mixture with aggregate that could accept additives near the point of use and approach low-slump or zero-slump behavior as it exited the form. I served as team lead and primary mechanical contributor as we reframed an initially open-ended material-feed problem into a modular testbed for rapidly evaluating mixtures, additives, and environmental conditions."
      challenge="The initial assignment centered on a material-feed system for a future robot, but the robot interface, upstream supply method, and operating constraints were not defined enough to support a useful final hardware design. Early material experiments showed that concrete variability was the dominant unknown: water content, additive concentration, mixing procedure, temperature, humidity, and day-to-day conditions changed behavior quickly. Rather than prematurely optimizing hardware around an undefined interface, we redirected the project toward the material uncertainty that would constrain every future system decision."
      work={[
        "I formed the four-person student team after Verustruct invited me to continue working with the company, helped establish the sponsored capstone arrangement with Yale, and served as team lead and primary liaison.",
        "I contributed the majority of the mechanical design and CAD, including the custom conveyor, rig geometry, support structure, subsystem packaging, and fabricated interfaces, while incorporating CAD and fabrication contributions from teammates.",
        "I fully designed and built the custom conveyor and contributed substantial machining, woodworking, laser cutting, waterjetting, PVC fabrication, assembly, concrete testing, motor integration, sensing, and troubleshooting.",
        "I worked closely with a teammate on much of the engineering and fabrication effort, while another teammate built the primary local web interface for displaying, comparing, exporting, and documenting test-run information.",
      ]}
      media={[
        {
          kind: "video",
          src: "/images/projects/slipform-feed/selected/copy-77c10124-8027-44aa-a431-e8e818a254c2.mp4",
          alt: "Timelapse of capstone material testing trials",
          caption:
            "The early material trials changed the direction of the project. We initially underestimated how sensitive concrete was to water content, mixing procedure, additive concentration, temperature, and humidity. Repeated slump testing helped establish a working base mixture near 75 mm of slump, giving later additive experiments a more consistent starting point.",
          featured: true,
          aspect: "wide",
          fit: "contain",
        },
        {
          kind: "image",
          src: "/images/projects/slipform-feed/selected/test-rig-cad-1.png",
          alt: "CAD model of the slipform feed test rig",
          caption:
            "The CAD model organized the full material path: gravity-fed reservoir, butterfly valve, additive pumps, static mixer, one-to-one form replica, conveyor, sensors, and support structure. I completed the majority of the project CAD, with another teammate contributing selected CAD work, and used the model to keep cleaning access, observation, plumbing, and specimen handling practical.",
          aspect: "wide",
          fit: "contain",
        },
        {
          kind: "image",
          src: "/images/projects/slipform-feed/selected/img-3546.jpg",
          alt: "Poster session with the capstone project",
          caption:
            "The final presentation framed the project as a systems-engineering pivot: from an undefined future feed mechanism to a stationary testbed that could answer material questions first. The delivered platform was designed to support future material trials by Verustruct; subsequent company testing is outside the documented scope of this project.",
          aspect: "natural",
          fit: "contain",
        },
        {
          kind: "image",
          src: "/images/projects/slipform-feed/selected/img-2069.jpg",
          alt: "Fabrication work for the capstone test rig",
          caption:
            "The build required broad hands-on manufacturing: manual machining, Bridgeport mill work, shaft fabrication, woodworking, laser cutting, waterjet cutting, 3D printing, PVC fabrication, and mechanical assembly. Several oversized components required custom fixturing and careful machining plans because they exceeded the normal work envelope of the available equipment.",
        },
        {
          kind: "image",
          src: "/images/projects/slipform-feed/selected/img-2817.jpg",
          alt: "Timing-belt gearbox for the conveyor drive",
          caption:
            "The conveyor drive was part of a custom assembly I designed from scratch rather than an off-the-shelf conveyor. It had to fit under the material path and through the scaled form geometry while acting as the moving floor of the simulated printing process.",
        },
        {
          kind: "image",
          src: "/images/projects/slipform-feed/selected/img-2608.jpg",
          alt: "Timing-belt tensioner for the conveyor assembly",
          caption:
            "The conveyor tensioning hardware made the specimen-handling sequence repeatable enough for testing. By moving each specimen out of the form, the conveyor let us stop the flow, separate the sample, label it, and retain consecutive trials for comparison.",
        },
        {
          kind: "image",
          src: "/images/projects/slipform-feed/selected/img-2871.jpg",
          alt: "Concrete form geometry for slipform feed testing",
          caption:
            "The one-to-one form replica simulated the geometry and confinement of the intended robot subsystem without requiring the full robot. This let the team study how the material behaved as it exited the form while keeping the experiment stationary, observable, and easier to clean.",
        },
        {
          kind: "image",
          src: "/images/projects/slipform-feed/selected/img-3494.jpg",
          alt: "Reservoir mixer assembly for the material feed rig",
          caption:
            "The reservoir held the base concrete mixture, while the butterfly valve controlled release into the static mixing path. Two peristaltic pumps introduced accelerant and viscosity-modifying agent into the stream, allowing additive rates and combinations to be varied without preparing a new base batch for every trial. Motor-current feedback from the reservoir mixer provided a relative indicator of mixing resistance that could be compared across runs.",
        },
        {
          kind: "image",
          src: "/images/projects/slipform-feed/selected/img-3537.jpg",
          alt: "Completed conveyor belt assembly",
          caption:
            "The completed conveyor was sufficiently polished and integrated that it was occasionally mistaken for an off-the-shelf assembly, despite being designed and fabricated specifically for the testbed. Its real value was experimental control: it transported material through the form, moved each specimen away from the test region, and made consecutive samples easier to isolate and compare.",
        },
      ]}
      iteration="The project moved through problem definition, base-mix development, system architecture, CAD, fabrication, controls, sensing, and material testing. We manually measured slump with a standardized slump cone, targeted a pumpable range of roughly 50 to 150 mm, and used a working base mixture near 75 mm of slump as a consistent starting point for later additive experiments. A teammate developed the primary local web interface for viewing environmental measurements, recording run information, comparing trials, and generating reports, while I contributed to sensing, hardware integration, and the broader test workflow."
      outcome="The team completed and delivered a stationary material testbed to Verustruct as a platform for continued material development. The system integrated reservoir storage, material release, additive dosing, static mixing, scaled form geometry, specimen transport, environmental sensing, run documentation, and data logging. It established a repeatable working base mix near 75 mm of slump and allowed samples to be produced, isolated, labeled, and compared without operating the full robot. Verustruct responded positively to the finished work, and the founding engineer later communicated that the company and founder were pleased with the outcome."
      lessons={[
        "Defining the right engineering problem matters more than optimizing the first proposed solution.",
        "Incomplete customer requirements can be productive when early experiments reveal which uncertainty actually controls the design.",
        "Concrete behavior is highly sensitive to composition, mixing process, and environment.",
        "Useful instrumentation distinguishes direct measurements from relative indicators that still help compare tests.",
      ]}
    />
  );
}
