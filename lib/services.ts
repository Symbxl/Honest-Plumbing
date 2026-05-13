export type Service = {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  hero: string;
  intro: string;
  image: string;
  imageAlt: string;
  // Body content split into sections for SEO heading hierarchy.
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: "tankless-water-heaters",
    name: "Tankless Water Heater Installation & Service",
    shortName: "Tankless Water Heaters",
    metaTitle:
      "Tankless Water Heater Installation & Service in Murfreesboro | Honest Plumbing",
    metaDescription:
      "Tankless water heater installation, annual service, and repair in Murfreesboro and across Middle Tennessee. Endless hot water, lower energy bills, and a service life that often doubles or triples a standard tank.",
    hero: "Endless hot water. Lower bills. Longer service life.",
    image: "/images/work-1.jpg",
    imageAlt:
      "Tankless water heater installed by Honest Plumbing in Middle Tennessee",
    intro:
      "Tankless water heaters use less energy and less water than standard tanks, and a quality unit installed and serviced properly will commonly last two to three times as long. We install new tankless systems across Murfreesboro and the surrounding Middle Tennessee area, handle repairs and warranty work on existing units, and provide the annual service that keeps them running at full efficiency.",
    sections: [
      {
        heading: "Installation done right",
        body: "Most homes converting from a tank to a tankless need three things sized correctly: the gas line, the venting, and the cold-water inlet protection. We run a properly sized gas line for the higher BTU demand of a tankless unit, install sealed concentric stainless venting, and add a scale-inhibiting filter on the inlet for Middle Tennessee's moderately hard water. The result is a clean install that meets code, passes inspection, and lasts the full design life of the unit.",
      },
      {
        heading: "Repairs on any brand",
        body: "We repair tankless units from every major brand whether or not we installed it. Most calls are flow sensor, ignition, or scale-related — issues that resolve in a single visit once they're diagnosed correctly. If a heat exchanger has failed because the unit was never descaled, we'll quote the repair against a replacement honestly so you can decide which makes sense.",
      },
      {
        heading: "Annual service is non-negotiable",
        body: "Middle Tennessee water is moderately hard, and tankless heat exchangers scale up over time. We descale annually with a circulating flush — it takes under an hour and restores the unit's efficiency. Skip annual service for two or three years and you'll start seeing error codes, reduced flow, and eventually a heat exchanger failure that costs more than a decade of maintenance. Most customers book their service in the fall.",
      },
    ],
    faqs: [
      {
        q: "Is a tankless water heater worth it in Middle Tennessee?",
        a: "For homeowners staying in the house long-term, families that run out of hot water during back-to-back showers, or anyone who wants to recover the floor space a tank takes up — yes. We'll give you an honest payback estimate during the in-home quote so you can decide.",
      },
      {
        q: "How often does a tankless need service?",
        a: "Once a year. A short descaling flush keeps the heat exchanger clean and the unit running efficiently. Annual service is the single biggest factor in whether a tankless makes it to its full service life.",
      },
      {
        q: "Do you service tankless units you didn't install?",
        a: "Yes. We service every major brand and handle annual descaling, repairs, and warranty work on units we did not originally install.",
      },
    ],
    keywords: [
      "tankless water heater Murfreesboro",
      "tankless installation Middle Tennessee",
      "tankless service Murfreesboro",
      "tankless repair Rutherford County",
    ],
  },
  {
    slug: "water-heater-services",
    name: "Water Heater Repair & Installation",
    shortName: "Water Heaters",
    metaTitle:
      "Water Heater Repair & Installation in Murfreesboro | Honest Plumbing",
    metaDescription:
      "Gas, electric, and hybrid water heater installation, repair, and maintenance in Murfreesboro and Middle Tennessee. Recirculation pumps, anode replacement, and honest repair-vs-replace advice.",
    hero: "Hot water back on. Today, in most cases.",
    image: "/images/work-2.jpg",
    imageAlt:
      "Residential water heater installation by Honest Plumbing in Murfreesboro",
    intro:
      "We install and repair gas, electric, and hybrid water heaters across Murfreesboro and the surrounding Middle Tennessee area. Standard tank repairs are usually a same-day fix, and replacements are scheduled fast so you're not without hot water for long. We size the replacement to your household's real peak demand and register the manufacturer warranty before we leave.",
    sections: [
      {
        heading: "Repair or replace — an honest answer",
        body: "If your water heater is under eight years old, a repair is almost always the right call. A bad thermocouple, failed element, sticky T&P valve, or corroded anode is a straightforward fix. Past ten or twelve years, the math shifts: tanks corrode from the inside, and once you see rust in the hot water, weeping at the base, or a popping sound from sediment, replacement is the right answer. We'll tell you which category you're in.",
      },
      {
        heading: "Gas, electric, and hybrid",
        body: "We install and service gas, electric, and heat-pump (hybrid) water heaters. Hybrid units are roughly three times as efficient as a standard electric tank and qualify for federal tax credits in many cases — they're a strong fit for homes with electric water heating that want a meaningful drop in the monthly utility bill. We'll walk you through the trade-offs honestly before you spend the money.",
      },
      {
        heading: "Recirculation pumps and maintenance",
        body: "If your master bath sits 40 feet from the water heater and the water runs for a minute before it's hot, a hot-water recirculation pump fixes that — instant hot water at every fixture, less water wasted down the drain. We install and service recirculation systems and also handle annual tank flushes and anode rod replacement to extend the life of the unit you already own.",
      },
    ],
    faqs: [
      {
        q: "How long should a water heater last?",
        a: "A standard tank heater with annual maintenance usually goes 10–13 years in Middle Tennessee. Skipping maintenance and ignoring the anode rod commonly cuts that to 7–9. Tankless units routinely make 18–22 years with proper annual service.",
      },
      {
        q: "How quickly can you replace a water heater?",
        a: "In most cases we can be on-site the same day or the next day. Standard tank replacements take a few hours start to finish, including haul-away of the old unit.",
      },
      {
        q: "Do you install recirculation pumps?",
        a: "Yes. We install and service hot-water recirculation systems so you get hot water at the faucet without the long wait — useful in larger homes or when the water heater sits far from the bathrooms.",
      },
    ],
    keywords: [
      "water heater repair Murfreesboro",
      "water heater installation Middle Tennessee",
      "hybrid water heater Murfreesboro",
      "recirculation pump Murfreesboro",
    ],
  },
  {
    slug: "sewers-and-drains",
    name: "Sewer & Drain Services",
    shortName: "Sewers & Drains",
    metaTitle:
      "Sewer & Drain Services in Murfreesboro | Honest Plumbing",
    metaDescription:
      "Drain cleaning, sewer cleaning and repair, root removal, hydro-jetting, and clean-out installation in Murfreesboro and Middle Tennessee. Camera inspections and honest repair-vs-clean recommendations.",
    hero: "Clog cleared. Line camera-inspected. Honest answer next.",
    image: "/images/work-3.jpeg",
    imageAlt:
      "Drain and sewer service performed by Honest Plumbing in Middle Tennessee",
    intro:
      "We clear drains, repair sewer lines, install clean-outs, and run camera inspections across Murfreesboro and the surrounding Rutherford County area. Most residential drain calls are same-day. We default to a cable machine because it's the right tool for most clogs, and we recommend hydro-jetting only when we can show you, on camera, why it's the right choice.",
    sections: [
      {
        heading: "Drain cleaning and clearing",
        body: "Kitchen sinks, bath drains, laundry standpipes, and toilet clogs — most of these clear with a properly sized cable machine through the right access point. We work through existing clean-outs and traps rather than tearing out walls or floors. If the line keeps backing up after cleaning, we camera the line and show you exactly what's happening so the next step is informed.",
      },
      {
        heading: "Sewer cleaning, root removal, and hydro-jetting",
        body: "Older sewer laterals in Middle Tennessee almost all catch tree roots at the joints. We cable-cut the roots when that's enough, hydro-jet when the line has heavier grease, scale, or recurring root intrusion, and recommend repair or replacement only when the line genuinely won't hold any longer. Camera footage of the line is part of how we explain the recommendation — you see what we see.",
      },
      {
        heading: "Clean-out installation and sewer repair",
        body: "If your home doesn't have a proper exterior sewer clean-out, future drain service is harder and more expensive than it needs to be. We install code-compliant clean-outs that give us (and any future plumber) clean, fast access to the line. Spot repairs and section replacements on damaged sewer lines are part of the same trade — done with permits and inspection so the work is protected long-term.",
      },
    ],
    faqs: [
      {
        q: "Why does my main line keep backing up?",
        a: "In most older Middle Tennessee homes, recurring main-line back-ups are tree roots at the joints of clay or cast-iron laterals. A camera inspection identifies the exact location. Cabling or jetting buys time; permanent repair requires spot replacement.",
      },
      {
        q: "Do you use chemical drain cleaners?",
        a: "No. Chemical cleaners damage older pipe and rarely solve the real problem. We clear with the right mechanical tool for the job — cable or jetter — and recommend a permanent fix only when one is actually needed.",
      },
      {
        q: "Can you clear a clog without ripping up walls or floors?",
        a: "Almost always, yes. We work through existing clean-outs, p-traps, or roof vents. We only open walls or floors when there's a confirmed broken pipe and no other access — and we'll tell you in advance if that's the case.",
      },
    ],
    keywords: [
      "drain cleaning Murfreesboro",
      "sewer cleaning Middle Tennessee",
      "hydro jetting Murfreesboro",
      "root removal Murfreesboro",
      "sewer camera inspection Murfreesboro",
    ],
  },
  {
    slug: "water-filtration",
    name: "Whole-House Water Filtration",
    shortName: "Water Filtration",
    metaTitle:
      "Whole-House Water Filtration in Murfreesboro | Honest Plumbing",
    metaDescription:
      "Whole-house water filtration systems, repairs, and selection consulting in Murfreesboro and Middle Tennessee. Honest advice about what your water actually needs — and what it doesn't.",
    hero: "Cleaner water at every tap — sized for what your water actually needs.",
    image: "/images/owner-2.jpg",
    imageAlt:
      "Water filtration system installation by Honest Plumbing in Middle Tennessee",
    intro:
      "Whole-house water filtration is one of the easiest places to overspend if you don't know what's actually in your water. We test, recommend the right system for your specific supply, and install whole-house filtration that does what it says it will. We also repair and service existing filtration systems even if we didn't install them.",
    sections: [
      {
        heading: "Selection: what your water actually needs",
        body: "Middle Tennessee city water is generally clean but moderately hard, and well water in the surrounding rural areas can include iron, sulfur, sediment, and other concerns that municipal water doesn't have. The right system depends on what's actually in your supply — a sediment filter, a softener, an iron filter, a carbon block for taste and chlorine, or a reverse-osmosis stage at the kitchen tap are all different problems with different solutions. We test first, then recommend, then quote. Honest consultation is part of the job.",
      },
      {
        heading: "Whole-house installation",
        body: "A whole-house system installs at the point of entry where the main supply enters the home, so every tap and every appliance benefits — softer water for the water heater and dishwasher, cleaner water for showers and laundry, better-tasting water at the kitchen sink. We size the system for your home's flow rate so pressure isn't compromised, and we install with proper bypass valves so future service is straightforward.",
      },
      {
        heading: "Repairs and service",
        body: "Filtration systems need periodic media replacement, cartridge changes, and occasional valve service. We service systems from every major manufacturer and can repair or rebuild older units whenever that's the more sensible choice than replacement.",
      },
    ],
    faqs: [
      {
        q: "Do I need a water filtration system on Murfreesboro city water?",
        a: "City water in Murfreesboro and the surrounding municipalities is generally safe to drink. Many homeowners still want carbon filtration to remove the chlorine taste, and a softener if the hardness is causing scale on fixtures and appliances. We'll be honest about whether your specific home actually benefits.",
      },
      {
        q: "What about well water?",
        a: "Well water often needs more — sediment filtration, an iron filter, sometimes a UV stage. We test the well water and design the system around what it actually contains rather than selling a generic package.",
      },
      {
        q: "How often does a whole-house system need service?",
        a: "Cartridge or media changes vary by system, water quality, and household use — typically every 6–12 months for cartridges, every 4–10 years for tank media. We'll set a service schedule that matches your specific install.",
      },
    ],
    keywords: [
      "water filtration Murfreesboro",
      "whole house water filter Middle Tennessee",
      "water softener Murfreesboro",
      "well water treatment Rutherford County",
    ],
  },
  {
    slug: "kitchen-plumbing",
    name: "Kitchen Plumbing",
    shortName: "Kitchen",
    metaTitle:
      "Kitchen Plumbing in Murfreesboro | Honest Plumbing",
    metaDescription:
      "Kitchen plumbing service in Murfreesboro: faucets, sinks, garbage disposals, ice-maker lines, dishwasher installation, and honest fixture selection advice. Licensed, insured, clean work.",
    hero: "Faucets, disposals, dishwashers, sinks — done right.",
    image: "/images/owner-1.jpg",
    imageAlt:
      "Honest Plumbing technician working on kitchen plumbing in Middle Tennessee",
    intro:
      "We do the full range of kitchen plumbing — faucet repair and installation, sink replacement, garbage disposal install and repair, refrigerator ice-maker lines, and dishwasher installation and removal. We also give honest fixture-selection advice so the disposal you buy actually fits your sink and the faucet you pick is one we'd put in our own kitchen.",
    sections: [
      {
        heading: "Faucets, sinks, and fixture selection",
        body: "Big-box kitchen faucets and the ones a plumber installs aren't built the same — the better ceramic cartridges, brass body construction, and replaceable parts on contractor-grade fixtures translate to fewer service calls down the road. We're happy to install a fixture you've already bought, and equally happy to recommend one if you'd rather we pick. Either way the install is clean and the connections are right.",
      },
      {
        heading: "Garbage disposals",
        body: "Disposals are commodity items that fail predictably — usually around year 8–12 — and replacement is straightforward. We install and repair every major brand, and we'll tell you whether yours is worth saving or whether the labor to repair is more than the unit costs new.",
      },
      {
        heading: "Ice-maker lines and dishwashers",
        body: "Refrigerator ice-maker lines are a common silent leak source when they're old plastic tubing. We replace with braided stainless lines and install proper shutoffs so future repairs don't require closing the main. Dishwasher installs and removals are routine work — we connect water, drain, and power correctly and verify there's no leak before we leave.",
      },
    ],
    faqs: [
      {
        q: "Will you install a fixture I already bought?",
        a: "Yes. We're happy to install a fixture you purchased — and we'll give you our honest opinion of the fixture before we start. If it's a low-quality unit that's going to fail in two years, we'd rather tell you up front.",
      },
      {
        q: "How long does a kitchen faucet install take?",
        a: "Most kitchen faucet replacements take 60–90 minutes including testing for leaks. Older sinks with corroded supply lines sometimes need an extra 30 minutes for shutoff replacement.",
      },
      {
        q: "Do you replace garbage disposals same-day?",
        a: "Almost always. Disposal replacement is fast — under an hour in most cases — and we carry the common 3/4 and 1 HP units on the truck.",
      },
    ],
    keywords: [
      "kitchen plumbing Murfreesboro",
      "garbage disposal install Murfreesboro",
      "kitchen faucet repair Middle Tennessee",
      "ice maker line Murfreesboro",
    ],
  },
  {
    slug: "bathroom-plumbing",
    name: "Bathroom Plumbing",
    shortName: "Bathroom",
    metaTitle:
      "Bathroom Plumbing in Murfreesboro | Honest Plumbing",
    metaDescription:
      "Bathroom plumbing in Murfreesboro and Middle Tennessee. Toilet installation and repair, faucet replacement, ADA fixtures, tub and shower valve work, and clean, code-compliant installs.",
    hero: "Toilets, faucets, tub valves, ADA fixtures — installed right.",
    image: "/images/hero-bg.jpg",
    imageAlt:
      "Bathroom plumbing service by Honest Plumbing in Middle Tennessee",
    intro:
      "We handle every bathroom plumbing need — toilet installation and repair, sink and shower faucet replacement, ADA-compliant fixtures, and tub and shower valve work. Installs are clean, code-compliant, and finished with a leak test before we leave.",
    sections: [
      {
        heading: "Toilets",
        body: "We install new toilets and repair the ones you already have. A new toilet install takes about an hour including the wax ring, supply line, and leak test. Most toilet repairs — running flush valves, leaking fill valves, loose tank-to-bowl bolts — are inexpensive same-visit fixes.",
      },
      {
        heading: "Faucets and fixtures",
        body: "Bath and lavatory faucet replacements are routine work. We'll tell you honestly when the existing fixture is worth rebuilding (decent brand, replaceable cartridges) versus when replacement makes more sense (corroded, discontinued parts, recurring drips).",
      },
      {
        heading: "Tub & shower valves and ADA fixtures",
        body: "Tub and shower valves are behind-the-wall work that has to be done right the first time — we install pressure-balanced anti-scald valves to current code, and we install ADA-compliant fixtures (grab bars, comfort-height toilets, accessible faucet handles) for homeowners aging in place or accommodating mobility needs.",
      },
    ],
    faqs: [
      {
        q: "How much does toilet installation cost?",
        a: "A standard toilet install in Murfreesboro is a flat-rate job — typically a few hundred dollars including the new wax ring, supply line, and haul-away of the old unit. We quote up front before starting.",
      },
      {
        q: "Can you install grab bars and ADA-height toilets?",
        a: "Yes. We install ADA-compliant grab bars, comfort-height toilets, and accessible faucet hardware. Common request from homeowners staying in their home as they get older.",
      },
      {
        q: "Do I have to replace the whole tub valve, or just repair it?",
        a: "Depends on the brand and age. Decent valves rebuild for a fraction of the replacement cost. Lower-quality or discontinued valves are usually easier to replace than to source parts for. We'll show you the diagnosis before recommending either path.",
      },
    ],
    keywords: [
      "bathroom plumbing Murfreesboro",
      "toilet installation Middle Tennessee",
      "shower valve Murfreesboro",
      "ADA fixtures Murfreesboro",
    ],
  },
  {
    slug: "water-sewer-repipes",
    name: "Water & Sewer Repipes",
    shortName: "Water & Sewer Repipes",
    metaTitle:
      "Water & Sewer Repipes in Murfreesboro | Honest Plumbing",
    metaDescription:
      "Whole-home water repipes and sewer line replacement in Murfreesboro and Middle Tennessee. Removal and installation of supply piping and sewer piping. Permitted, inspected, and warrantied.",
    hero: "Whole-home repipes. Permitted, inspected, warrantied.",
    image: "/images/expertise-badge.png",
    imageAlt:
      "Water and sewer repipe project by Honest Plumbing in Middle Tennessee",
    intro:
      "When water supply pipes have corroded, or a sewer line has failed and a spot repair isn't going to hold, the right answer is a repipe. We remove old supply and sewer piping and install new piping to current code across Murfreesboro and the surrounding Middle Tennessee area. Every repipe is permitted, inspected, and warrantied.",
    sections: [
      {
        heading: "Water supply repipes",
        body: "Older homes with galvanized or corroded copper supply lines often share a symptom: hot water that runs but slowly, low pressure throughout the house, and discolored water at the fixtures. A repipe with PEX or new copper restores full flow and stops the recurring leak problem at the joints. We remove the old piping, install new lines through the existing wall and crawlspace runs where possible, and pressure-test before patching and finishing.",
      },
      {
        heading: "Sewer repipes",
        body: "When a sewer lateral has multiple failures, recurring back-ups, or is collapsed in sections, repeated cleaning and spot repair stop being the right answer. Sewer repipe replaces the line end-to-end — from the house tie-in to the main — and the new line is warrantied. We use trenchless methods where the line path allows, and traditional open-trench excavation where the geometry of the property makes trenchless the wrong choice.",
      },
      {
        heading: "Permits, inspections, and warranty",
        body: "Every repipe we do is pulled on a permit, inspected by the local code authority, and warrantied in writing. That's what \"licensed, bonded, and insured\" is supposed to mean in practice — the work is documented, signed off, and you're protected if something goes wrong.",
      },
    ],
    faqs: [
      {
        q: "Do I need a whole-home repipe or just a section?",
        a: "If you've had two or more pinhole leaks in the same year, or pressure is dropping at multiple fixtures, a full repipe usually makes more financial sense than chasing leaks. We'll diagnose honestly — spot repair when it's the right answer, full repipe only when it actually is.",
      },
      {
        q: "How long does a repipe take?",
        a: "A residential supply repipe is typically 2–4 days depending on the size of the home and access. Sewer line replacements run 1–3 days. We minimize the time your water is off.",
      },
      {
        q: "Is the work permitted and inspected?",
        a: "Yes — every repipe is pulled on a permit, inspected by the local jurisdiction, and we don't ask for final payment until the inspection is signed off.",
      },
    ],
    keywords: [
      "water repipe Murfreesboro",
      "sewer repipe Middle Tennessee",
      "whole house repipe Murfreesboro",
      "sewer line replacement Murfreesboro",
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
