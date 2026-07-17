import { ProjectStoryPage } from "@/components/ProjectStoryPage";

export const metadata = {
  title: "Selected Physical Builds | Phil Boctor",
};

export default function SelectedPhysicalBuildsProjectPage() {
  return (
    <ProjectStoryPage
      title="Selected Physical Builds"
      summary="Personal wall art, decorative objects, and gifts made by combining digital design, fabrication tools, finishing, and a reason to make something specific for someone."
      role="Design, fabrication, finishing, and assembly"
      timeline="Ongoing personal builds"
      tools={[
        "Waterjetting",
        "Laser cutting",
        "Illustrator / vector workflows",
        "Wood finishing",
        "Clear coating",
        "LED integration",
      ]}
      hero={{
        kind: "image",
        src: "/images/projects/art-projects-gifts/selected/img-2268.jpg",
        alt: "Porsche 911 waterjet gift with installed LED lighting",
        caption:
          "I made this illuminated Porsche 911 outline for my brother. It was my first time working with flexible LED filament, and the rubber-like light source made it possible to follow the car's silhouette with a continuous integrated glow.",
        aspect: "natural",
        fit: "contain",
      }}
      overview="This collection shows the more personal side of how I use engineering tools. I began making decorative pieces and gifts soon after learning the waterjet, gradually combining digital illustration, CAD, waterjet cutting, laser cutting, sanding, staining, clear coating, epoxy assembly, lighting, and electronics to create objects tailored to the people receiving them."
      challenge="The constraint was usually a person rather than a specification: a friend's team, a sibling's car, a roommate's research interest, or a pattern someone wanted to turn into a real object. Each build became an excuse to learn the software, fabrication process, or finishing method that the idea needed."
      work={[
        "I started with the recipient's interests, then translated the idea into digital illustration, CAD, or clean cut geometry.",
        "I used different combinations of waterjet cutting, laser cutting, sanding, staining, clear coating, epoxy assembly, and lighting depending on the piece.",
        "I learned software such as Illustrator, CorelDRAW, Inkscape, and SolidWorks as specific gifts demanded cleaner geometry or more controlled fabrication.",
        "I treated finishing, wall mounting, and presentation as part of the object rather than cleanup after fabrication.",
      ]}
      media={[
        {
          kind: "image",
          src: "/images/projects/art-projects-gifts/selected/img-2183.jpg",
          alt: "Porsche 911 waterjet steel gift before lighting",
          caption:
            "This Porsche 911 profile started as a waterjet-cut steel birthday gift for my brother before the lighting was installed. The silhouette had to stay clean enough to read from a distance while still leaving room for finishing, mounting, and the later LED integration.",
        },
        {
          kind: "image",
          src: "/images/projects/art-projects-gifts/selected/e2568ef7-4a4d-4dfc-bb1d-49c8fb768a97.jpg",
          alt: "Spider-Man logo gift",
          caption:
            "One of my first decorative projects after learning the waterjet, this Secret Santa piece pushed me to learn how to translate an illustration into clean vector geometry that could actually be cut. That digital-to-physical workflow became the foundation for many of the gifts that followed.",
        },
        {
          kind: "image",
          src: "/images/projects/art-projects-gifts/selected/img-2319.jpg",
          alt: "Premier League logo gift in progress",
          caption:
            "I made this for a friend after his brother suggested a soccer-related gift and I learned he followed Manchester United. The club crest was too intricate for the scale and waterjet approach, so the cleaner Premier League identity became the more manufacturable choice.",
        },
        {
          kind: "image",
          src: "/images/projects/art-projects-gifts/selected/img-2324.jpg",
          alt: "Completed Premier League logo gift",
          caption:
            "The completed Premier League wall piece received a protective clear coat and a rear hanger for display. It kept the soccer connection personal while avoiding a design that would have been too fragile or busy for the cutting process.",
        },
        {
          kind: "image",
          src: "/images/projects/art-projects-gifts/selected/img-8874-removebg-preview.png",
          alt: "Penrose tiling inspiration graphic",
          caption:
            "This Penrose tiling graphic was the starting point for a Secret Santa gift for my roommate. Because his mathematics work involved tilings, the pattern made the eventual object feel personal without needing much explanation.",
        },
        {
          kind: "image",
          src: "/images/projects/art-projects-gifts/selected/img-8882.jpg",
          alt: "Penrose tiling gift",
          caption:
            "I made this Penrose tiling as the finished Secret Santa piece. The project was less about proving anything mathematically and more about turning a pattern connected to my roommate's research into a clean decorative object.",
        },
        {
          kind: "image",
          src: "/images/projects/art-projects-gifts/selected/img-3413.jpg",
          alt: "Mathematical tiling gift on stained birch plywood",
          caption:
            "My roommate sent me this stepped tiling pattern and asked whether I could turn it into a physical gift for his research advisor. I translated the pattern into manufacturable waterjet geometry, then assembled the aluminum pieces onto stained birch plywood with epoxy and a finished surface.",
        },
        {
          kind: "image",
          src: "/images/projects/art-projects-gifts/selected/img-2892.jpg",
          alt: "Waterjet tiling project",
          caption:
            "After fabrication and finishing, this advisor gift was ultimately displayed in Yale's math department after the recipient decided it should be shared rather than kept in a private office. I like that outcome because it came from a personal request, not from trying to make a formal art piece.",
        },
      ]}
      iteration="The process changed from piece to piece: idea or recipient interest, digital illustration or CAD, clean cut geometry, waterjet or laser fabrication, sanding and surface preparation, then finishing, lighting, hardware, or wall-mount integration where the object needed it."
      outcome="The result is a set of personal objects that use engineering facilities without feeling like formal engineering assignments. They gave me a place to practice craft, presentation, and the small finishing details that make a handmade gift feel intentional."
      lessons={[
        "A specific recipient is a useful design constraint.",
        "Learning software is easier when a particular gift demands it.",
        "Finish quality and presentation matter as much as the cut geometry.",
        "Personal projects are a good place to use technical skills without formal requirements.",
      ]}
    />
  );
}
