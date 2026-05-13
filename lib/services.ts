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
    slug: "water-heater-repair-installation",
    name: "Water Heater Repair & Installation",
    shortName: "Water Heaters",
    metaTitle:
      "Water Heater Repair & Installation in Nashville | Joe B. Sullivan & Sons",
    metaDescription:
      "Nashville's longest-running water heater specialists. Repair, replacement, and installation of gas and electric tank water heaters. Warranty service for AO Smith, Bradford White, State, and Whirlpool.",
    hero: "Hot water back on. Today, usually.",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1600&q=70",
    imageAlt:
      "Plumber installing a residential gas water heater — Joe B. Sullivan & Sons Plumbing, Nashville",
    intro:
      "Joe B. Sullivan & Sons has been Nashville's go-to water heater company since 1895. We diagnose and repair gas, electric, and high-efficiency tank water heaters every day across Davidson and Williamson counties — and when a unit isn't worth saving, we install the right replacement and haul the old one away the same visit. We're authorized warranty service for AO Smith, Bradford White, State Industries, and Whirlpool, which means most warranty parts are covered and turnaround is fast.",
    sections: [
      {
        heading: "When to repair versus when to replace",
        body: "If your water heater is under 8 years old, the repair almost always makes sense — a bad thermocouple, a failed heating element, a corroded anode rod, or a sticky T&P valve is a $150–$450 fix, not a $1,800 replacement. Past 10–12 years on a standard tank, the math shifts: tanks corrode from the inside, and once you start seeing rust in the hot water, weeping at the base, or a popping/rumbling sound from sediment buildup, replacement is the right call. We'll tell you which category you're in honestly — including when a $200 repair will buy you another year before the inevitable replacement. Most Nashville homes we service get 10–13 years out of a quality tank heater with annual flushing.",
      },
      {
        heading: "Brands we install — and why",
        body: "We install AO Smith, Bradford White, State Industries, Rheem, and Whirlpool tank water heaters. Bradford White is what we put in our own homes — built in Pennsylvania, available only through licensed plumbers (you can't get one at Home Depot), and our warranty failure rate is well under the industry average. AO Smith is the value play for budget-conscious replacements. State Industries (made in Ashland City, TN, right up the road) is solid for warranty work and we keep parts on the truck. Whatever you choose, we register your warranty before we leave so you don't lose coverage on a paperwork technicality.",
      },
      {
        heading: "Sizing your replacement correctly",
        body: "Most Nashville homes are under-sized on hot water. A family of four running two showers in the morning needs a 50-gallon tank minimum for a gas unit, or 65–80 gallons for electric. If you've added bathrooms, a soaking tub, or a high-flow shower head and the hot water runs out, your tank is too small — not broken. We calculate your peak demand (number of fixtures × flow rate × use period), then size the tank to that, not to whatever was there before. For homes with chronic hot-water shortages, a tankless conversion is often the better answer — see our tankless water heater page.",
      },
      {
        heading: "Same-day service, real pricing",
        body: "Most water heater calls in Nashville are scheduled same-day or next-day. We'll quote a flat price after diagnosing — no surprises mid-job, no per-hour open meter. Standard tank replacements in the Nashville metro range $1,400–$2,800 installed (parts, labor, permit, haul-away of the old unit, and warranty registration), with the spread driven by tank size, gas vs. electric, and whether the install needs new water shutoffs, expansion tank, or venting work. We'll give you the number before we start.",
      },
    ],
    faqs: [
      {
        q: "How much does water heater installation cost in Nashville?",
        a: "Standard tank water heater installation in the Nashville area typically runs $1,400–$2,800 fully installed, including the unit, labor, permit, haul-away of the old heater, and warranty registration. Tankless conversions run $3,500–$6,500 depending on gas line and venting requirements.",
      },
      {
        q: "Do you handle warranty work on AO Smith, Bradford White, State, and Whirlpool water heaters?",
        a: "Yes — we're an authorized warranty service provider for all four manufacturers. If your water heater is still under warranty, we file the parts claim for you and turn around the repair quickly. Bring the model and serial number when you call so we can verify coverage before the truck rolls.",
      },
      {
        q: "How long does a water heater last in Nashville?",
        a: "Standard tank water heaters last 10–13 years in most Nashville homes with annual maintenance (flushing the tank and checking the anode rod). Tankless units typically last 18–22 years. Hard water in some Davidson County neighborhoods shortens life by 1–3 years if the tank isn't flushed regularly.",
      },
    ],
    keywords: [
      "water heater repair Nashville",
      "water heater installation Nashville",
      "AO Smith warranty Nashville",
      "Bradford White Nashville",
      "Rheem water heater Nashville",
    ],
  },
  {
    slug: "tankless-water-heaters",
    name: "Tankless Water Heater Installation & Repair",
    shortName: "Tankless Water Heaters",
    metaTitle:
      "Tankless Water Heater Installation & Repair in Nashville | Sullivan Plumbing",
    metaDescription:
      "Tankless water heater installation, repair, and descaling in Nashville. Rinnai, Navien, Noritz, and Rheem. Endless hot water, 18–22 year service life, and real Nashville-specific advice on whether it's worth it.",
    hero: "Endless hot water. Twenty years of it.",
    image:
      "https://images.unsplash.com/photo-1714894691666-e8bb020c781c?auto=format&fit=crop&w=1600&q=70",
    imageAlt:
      "Wall-mounted tankless water heater installation in a Nashville home",
    intro:
      "Tankless water heaters make sense for the right Nashville home — and don't for others. We install Rinnai, Navien, Noritz, and Rheem tankless units across the Nashville metro, and we'll tell you straight whether the conversion is worth the upfront cost for your specific house. We also do annual descaling and service on existing tankless units (Nashville's water is moderately hard and tankless units need yearly maintenance to hit their full service life).",
    sections: [
      {
        heading: "Tankless vs. tank: who actually benefits",
        body: "Tankless makes financial sense if you (a) plan to stay in the house 10+ years, (b) currently run out of hot water during peak use, or (c) have a finished basement where you can recover the tank's floor space. The savings on a typical Nashville home are real but modest — about $80–$140/year on a natural-gas tankless versus a tank — so the payback math depends mostly on the installed cost difference and how long you'll live there. The 18–22 year service life means you'll typically skip one tank replacement cycle, which is where the real lifetime savings live.",
      },
      {
        heading: "Installation: what changes from a tank install",
        body: "A tankless conversion in Nashville typically requires three upgrades beyond the unit itself: a larger gas line (most older homes have a half-inch line that won't feed the higher BTU demand — we run a three-quarter or one-inch line to the unit), stainless steel concentric venting (sealed combustion, exits through the side wall instead of up the flue), and a softener or scale inhibitor on the cold-water inlet for Nashville's moderately hard water. We factor all of this into the flat quote up front. Typical installed cost in the metro: $3,500–$6,500 depending on whether the gas line and venting need significant rework.",
      },
      {
        heading: "Annual descaling — non-negotiable in Nashville",
        body: "Nashville water averages around 70–90 ppm hardness (moderately hard), and tankless heat exchangers scale up over time. We descale tankless units annually with a circulating vinegar or descaling-solution flush — takes about 45 minutes and resets the unit's efficiency. Skip this for three years in a row and you'll start seeing error codes, reduced flow rate, and eventually a $700–$1,200 heat exchanger replacement. Most homeowners book annual descaling in the fall before heating season. Our maintenance program covers it plus the tank flush on standard units.",
      },
      {
        heading: "Pricing and what's included",
        body: "Tankless install in the Nashville metro: $3,500–$6,500 fully installed (unit, gas line upgrade if needed, venting, install labor, permit, and Sullivan-registered manufacturer warranty). Annual descaling: $185. Tankless repair: $145 service call applied to the repair, then flat-rate quotes by repair type. We service all major brands even if we didn't install the unit. Warranty work on Rinnai, Navien, and Noritz units we install is handled in-house at no extra charge during the warranty period.",
      },
    ],
    faqs: [
      {
        q: "Is a tankless water heater worth it in Nashville?",
        a: "For households that stay 10+ years, currently run out of hot water at peak use, or want to recover the floor space — yes. For short-term homeowners or homes with adequate tank capacity already, the math is closer to break-even. We do an honest payback calculation during the in-home quote.",
      },
      {
        q: "How often does a tankless water heater need to be serviced in Nashville?",
        a: "Once a year for descaling, given Nashville's moderately hard water. Skipping descaling shortens unit life and eventually causes heat exchanger failure ($700–$1,200 replacement). Annual maintenance is the single best thing you can do for a tankless unit.",
      },
      {
        q: "What size tankless water heater do I need for my Nashville home?",
        a: "Most Nashville single-family homes need a 180,000–199,000 BTU natural gas tankless unit (Rinnai RU199 / Navien NPE-240A2 class) to handle two showers and a kitchen sink simultaneously. Smaller homes with one bath can run on a 150,000 BTU class unit. We size it during the quote based on your actual fixture count and peak flow.",
      },
    ],
    keywords: [
      "tankless water heater Nashville",
      "Rinnai installation Nashville",
      "Navien tankless Nashville",
      "tankless descaling Nashville",
      "tankless conversion Nashville",
    ],
  },
  {
    slug: "commercial-plumbing",
    name: "Commercial Plumbing & Boiler Service",
    shortName: "Commercial Service",
    metaTitle:
      "Commercial Plumbing & Boiler Service in Nashville | Joe B. Sullivan & Sons",
    metaDescription:
      "Nashville's heritage commercial plumber. Boiler diagnostics and repair, commercial water heater service, steam unit repair, backflow, and new construction rough-ins. Licensed master plumber on every job.",
    hero: "Heritage commercial plumbing. Same family since 1895.",
    image:
      "https://images.unsplash.com/photo-1701421047855-d7bafd8d6f69?auto=format&fit=crop&w=1600&q=70",
    imageAlt:
      "Commercial boiler room with industrial piping — heritage commercial plumbing in Nashville",
    intro:
      "Joe B. Sullivan & Sons has been doing commercial plumbing in Nashville for five generations — we've serviced churches, schools, restaurants, retail buildings, multi-family properties, hotels, and industrial facilities across Davidson County. Our specialty within commercial work is boiler diagnostics, repair, and commercial water heater installation. When a 30-year-old building has a boiler nobody else wants to touch because the parts are obsolete, we usually have the part on the truck or know exactly where to source it.",
    sections: [
      {
        heading: "Boiler diagnostics and repair",
        body: "We work on commercial boilers across Nashville — gas-fired hot water boilers, low-pressure steam, atmospheric and power-burner units, and the older cast-iron sectional boilers that still heat plenty of Nashville's pre-war buildings. Our master plumber Frank Sullivan has been on commercial boiler service in this market for decades; if the unit is repairable, we'll keep it running. When replacement is the right answer, we install AERCO, Lochinvar, Weil-McLain, and Burnham units depending on the load and the building's footprint. We also pull permits and coordinate state boiler inspection where required.",
      },
      {
        heading: "Commercial water heaters",
        body: "Restaurants, hotels, multi-family properties, and industrial laundries in Nashville all run different commercial water heater configurations — large-volume gas units, electric, indirect-fired off a boiler, or hybrid setups. We install, service, and warranty AO Smith, State Industries, Bradford White, and Rheem commercial units, and we know how to size correctly for actual peak demand (a Nashville hotel breakfast hour or a restaurant's 6:00 PM dish load is very different from residential peak demand). Replacement turnarounds are typically 24–72 hours for in-stock units.",
      },
      {
        heading: "Steam unit and old-building expertise",
        body: "Half of Nashville's commercial inventory is pre-1980, and a lot of it still runs on systems most plumbers don't service: low-pressure steam, gravity hot water, galvanized supply lines, and discontinued fixtures and parts. Joe B. Sullivan & Sons has maintained an extensive knowledge base of obsolete and discontinued parts — five generations of accumulated expertise on what's actually in Nashville's older buildings. If a national chain plumber tells you a steam radiator valve isn't repairable and the whole system needs replacement, get a second opinion. Most of the time it's repairable.",
      },
      {
        heading: "New construction and tenant build-outs",
        body: "We do full commercial plumbing rough-ins and trim-outs across the Nashville metro — restaurants, retail, light industrial, and multi-family. We coordinate with GCs, MEP engineers, and permit offices, and we work to specification (or call out a spec issue early if we see one). We also do tenant fit-outs on a fast-track schedule when leases are signed and the clock is running. Bonded and insured for commercial work, master-plumber-supervised on every job.",
      },
    ],
    faqs: [
      {
        q: "Do you work on old commercial boilers in Nashville?",
        a: "Yes — that's one of our specialties. We have five generations of Nashville commercial experience and maintain a parts inventory and supplier network for obsolete components. Most boilers other plumbers tell you are unrepairable, we can actually repair.",
      },
      {
        q: "Can you handle commercial water heater warranty work?",
        a: "Yes. We're authorized warranty service for AO Smith, Bradford White, State Industries, and Whirlpool — including their commercial product lines. We file the warranty parts claim and handle the install, you stay focused on running your business.",
      },
      {
        q: "How fast can you respond to a commercial plumbing emergency in Nashville?",
        a: "Our emergency service team prioritizes commercial calls during business hours. We aim for same-day arrival on no-hot-water and active-leak situations across Davidson County. For after-hours and weekend commercial emergencies, call the main line and follow the prompts — the on-call plumber will return your call promptly.",
      },
    ],
    keywords: [
      "commercial plumber Nashville",
      "commercial boiler repair Nashville",
      "commercial water heater Nashville",
      "steam boiler repair Nashville",
      "commercial plumbing contractor Nashville",
    ],
  },
  {
    slug: "drain-cleaning-unstopping",
    name: "Drain Cleaning & Unstopping",
    shortName: "Drain Cleaning",
    metaTitle:
      "Drain Cleaning & Unstopping in Nashville | Joe B. Sullivan & Sons Plumbing",
    metaDescription:
      "Drain cleaning and unstopping across Nashville. Kitchen, bath, laundry, and main line clogs cleared with cable machine, hydro-jetting, and camera diagnostics. Same-day service in most cases.",
    hero: "Clog cleared. No mess left behind.",
    image:
      "https://images.unsplash.com/photo-1606340671662-27ee685dd111?auto=format&fit=crop&w=1600&q=70",
    imageAlt:
      "Plumber working on a drain line with professional tools in a Nashville home",
    intro:
      "Sullivan has cleared more drains across Nashville than we can count — kitchen sinks, bathroom lavatories, tub and shower drains, toilet stoppages, laundry standpipes, and main sewer line back-ups. We use cable machines for everyday clogs, hydro-jetting for grease and root intrusion, and a sewer camera when we need to see exactly what's happening fifty feet down the line. Most residential drain calls get same-day service.",
    sections: [
      {
        heading: "Cable machine vs. hydro-jet: which you actually need",
        body: "A cable (snake) machine handles the majority of drain clogs — hair in bathroom drains, kitchen sink grease blockages within 25 feet of the cleanout, and most toilet stoppages. Hydro-jetting uses high-pressure water (3,000–4,000 PSI) to cut through heavier grease deposits, scale buildup in older pipes, and tree-root intrusion in main sewer lines. We default to a cable machine because it's faster and cheaper; we recommend the jetter when the camera shows recurring grease or root issues that cabling won't actually resolve. Honest answer first, machine second.",
      },
      {
        heading: "Main line back-ups: what's actually happening",
        body: "When every drain in the house is slow at once and a toilet flushes water up into the shower or tub, you have a main sewer line back-up — not individual drain clogs. The most common Nashville cause is tree root intrusion at the joints of older clay or cast-iron sewer laterals, especially in East Nashville, Belmont-Hillsboro, and Sylvan Park neighborhoods where mature trees and 1920s–1950s sewer pipe are common. We cable and camera the line, identify the root location, and either jet-clean (buys you 2–4 years before the next event) or recommend a sewer line repair or replacement (permanent fix). We never push the replacement when cleaning will hold.",
      },
      {
        heading: "Camera inspection: when it's worth it",
        body: "A sewer camera inspection is worth the cost ($295 in the Nashville metro) when: you've had two or more main-line back-ups in 12 months, you're buying a house with a sewer line older than 1970, or you're trying to decide between repeated cleaning and a one-time line replacement. We record the inspection and email you the video, with marked timestamps for any defects we find. Some Nashville real estate transactions include a sewer camera as part of the inspection contingency — we do those routinely.",
      },
      {
        heading: "Pricing and policy",
        body: "Standard drain cleaning in Nashville: $185 for a kitchen, bath, or laundry drain via cleanout access, $245 for a toilet pull-and-clear, $295 for a main line cable through an exterior cleanout, $475–$650 for hydro-jetting depending on line size and length, $295 for camera inspection (waived if it leads to a repair we perform). We never use chemical drain cleaners — they damage older Nashville pipe (especially galvanized and cast iron). Same-day service in most cases; we'll tell you the actual ETA when you call.",
      },
    ],
    faqs: [
      {
        q: "How much does drain cleaning cost in Nashville?",
        a: "Standard drain cleaning in Nashville: $185 for a single fixture drain, $295 for a main line cable through the exterior cleanout, $475–$650 for hydro-jetting, and $295 for camera inspection (waived if it leads to a Sullivan-performed repair).",
      },
      {
        q: "Why does my main line keep backing up?",
        a: "Recurring main line back-ups in Nashville are almost always tree root intrusion at the joints of older clay or cast-iron sewer laterals, or a sag/belly in the line. A camera inspection identifies which it is. Cabling and jetting buy time; permanent repair requires spot replacement or full line replacement.",
      },
      {
        q: "Can you clear a clog without ripping up my floor or walls?",
        a: "Yes, in the vast majority of cases. We work through existing cleanouts, p-traps, or roof vents. We only open walls or floors when there's a confirmed broken pipe and no other access — and we'll tell you in advance if that's what's needed.",
      },
    ],
    keywords: [
      "drain cleaning Nashville",
      "main line back-up Nashville",
      "sewer camera inspection Nashville",
      "hydro jetting Nashville",
      "toilet clog Nashville",
    ],
  },
  {
    slug: "sewer-water-line-replacement",
    name: "Sewer & Water Line Replacement",
    shortName: "Sewer & Water Lines",
    metaTitle:
      "Sewer & Water Line Replacement in Nashville | Joe B. Sullivan & Sons",
    metaDescription:
      "Sewer line and water service line replacement in Nashville. Trenchless and traditional methods. Pipe replacement and repair for residential and commercial properties. Permitted, bonded, insured.",
    hero: "Underground pipe done right. No surprises.",
    image:
      "https://images.unsplash.com/photo-1668291048339-d33756311d80?auto=format&fit=crop&w=1600&q=70",
    imageAlt:
      "Sewer and water service line replacement work — Joe B. Sullivan & Sons, Nashville",
    intro:
      "When the sewer or water line under your Nashville property fails, the work needs to be done by people who know Metro Nashville Codes, Metro Water Services connection requirements, and how to navigate the permit and inspection process without delays. We replace sewer laterals and water service lines across Davidson and Williamson counties — both trenchless (where appropriate) and traditional open-trench methods.",
    sections: [
      {
        heading: "Sewer line replacement: trenchless vs. open trench",
        body: "Trenchless sewer replacement (pipe bursting or pipe lining) is the right call when the existing line follows a relatively straight path, doesn't have significant collapses or back-pitched sections, and runs under landscaping, driveways, or hardscape you want to preserve. We use pipe bursting for full replacement (pulls a new HDPE line through the path of the old one), and CIPP lining for spot repairs where the host pipe is structurally sound but has cracks or small offsets. Traditional open-trench replacement is sometimes still the right answer — when the line has multiple major defects, has been re-routed multiple times, or runs in a path that would damage trenchless equipment. We'll tell you which method makes sense after a camera inspection.",
      },
      {
        heading: "Water service line replacement",
        body: "Nashville water service lines (the line from your meter to your house) most commonly fail in homes built before 1960, where the original copper, galvanized, or in some cases lead service lines have corroded or split. Symptoms: chronically low water pressure, discolored water at fixtures throughout the house, or a water bill that suddenly doubled from an underground leak. We replace water service lines with 1\" or 1.25\" Type K soft copper or PEX-A (depending on local code preference and run distance). Permits, Metro Water coordination, and pressure testing are included.",
      },
      {
        heading: "Permits and what \"licensed, bonded, insured\" actually means in Nashville",
        body: "Anyone touching the sewer lateral or water service line in Davidson County needs a Tennessee Master Plumber license, a Metro Nashville plumbing permit, and active bonding and insurance. Frank Sullivan is the licensed master plumber on record for every Joe B. Sullivan & Sons job — that means our permits get pulled correctly, our work passes inspection, and you're protected if something goes wrong. We file the permit, schedule the Metro inspection, and don't ask you for final payment until the inspection is signed off.",
      },
      {
        heading: "What it costs",
        body: "Sewer lateral replacement in the Nashville metro: $4,500–$12,000 depending on length, method (trenchless vs. open trench), depth, and whether the work crosses concrete, landscaping, or city right-of-way. Water service line replacement: $2,800–$7,500 depending on length, depth, and meter location. We provide flat-price quotes after a site visit and camera inspection — no estimates that balloon mid-job. Most sewer and water line projects are completed in 1–3 days.",
      },
    ],
    faqs: [
      {
        q: "How long does sewer line replacement take in Nashville?",
        a: "Most residential sewer lateral replacements in Nashville take 1–2 days, including excavation, replacement, backfill, and Metro inspection. Trenchless replacements often finish in a single day. Larger or more complex jobs (city right-of-way coordination, multi-method approaches) can run 2–4 days.",
      },
      {
        q: "Will my insurance cover sewer line replacement?",
        a: "Standard homeowner policies in Tennessee usually don't cover sewer lateral replacement (it's wear-and-tear, not sudden damage), but service-line add-on policies and some umbrella coverages do. We'll provide you with the photos, camera footage, and documentation you need to file a claim. We don't do the claim filing — that's between you and your carrier — but we make it easy on you.",
      },
      {
        q: "Do you handle the permit and inspection for sewer and water line work?",
        a: "Yes. We pull the Metro Nashville plumbing permit, coordinate the Metro inspection, and don't ask for final payment until the work is signed off. The permit cost is included in our flat quote.",
      },
    ],
    keywords: [
      "sewer line replacement Nashville",
      "water service line Nashville",
      "trenchless sewer Nashville",
      "pipe bursting Nashville",
      "Metro Nashville plumbing permit",
    ],
  },
  {
    slug: "backflow-gas-lines",
    name: "Backflow & Gas Line Service",
    shortName: "Backflow & Gas",
    metaTitle:
      "Backflow Installation & Gas Line Service in Nashville | Sullivan Plumbing",
    metaDescription:
      "Backflow installation, testing, and repair in Nashville. Natural gas line installation and repair for residential and commercial customers. Licensed, certified backflow tester. Metro Water compliant.",
    hero: "Code-compliant, permitted, signed off.",
    image:
      "https://images.unsplash.com/photo-1584774354932-62ceb99e6053?auto=format&fit=crop&w=1600&q=70",
    imageAlt:
      "Copper piping for backflow prevention and gas line work in Nashville",
    intro:
      "Backflow prevention and gas line work are the two areas of plumbing with the least margin for error — a failed backflow assembly contaminates a drinking water system, and a gas leak is a life-safety problem. Joe B. Sullivan & Sons does both routinely across Nashville: backflow installation, certified annual testing, and repair, plus natural gas line installation and repair for residential and commercial customers. Every job is permitted and inspected.",
    sections: [
      {
        heading: "Backflow installation and testing",
        body: "Metro Water Services in Nashville requires backflow prevention assemblies on irrigation systems, fire suppression lines, commercial cooking equipment, and certain residential cross-connections. The assembly must be installed by a licensed plumber and tested annually by a certified backflow tester. We install RP (reduced-pressure) and DCV (double-check valve) assemblies, perform the annual certification test, file the test report with Metro Water, and repair or rebuild failed assemblies. Annual testing in Nashville runs $85 for a single residential assembly and is required by Metro Water — if you've ignored a notice, we can usually catch you up the same week.",
      },
      {
        heading: "Backflow repair: rebuild vs. replace",
        body: "Most backflow failures we see in Nashville come from debris fouling check valves, worn rubber seats, or freeze damage to assemblies installed in unprotected exterior locations. Rebuild kits are usually $185–$385 installed and bring the assembly back to certified passing condition for several more years. Full assembly replacement is required when the body itself is cracked (freeze damage) or when an old assembly is no longer manufactured-supported. We carry rebuild kits for Watts, Wilkins, Apollo, and Febco assemblies on the truck.",
      },
      {
        heading: "Gas line installation and repair",
        body: "We install and repair natural gas lines for residential and commercial customers across the Nashville metro — new appliance runs (range, dryer, water heater, pool heater, generator), tankless water heater gas line upgrades (most older Nashville homes need a larger gas line for a tankless install), and gas line repair after a confirmed leak. We pressure-test every gas line we install or repair, pull the Metro permit, and coordinate the Metro Codes inspection. If Piedmont Natural Gas has shut your service off due to a confirmed leak, we can usually get you re-pressurized within 24–48 hours including inspection.",
      },
      {
        heading: "Gas leak emergencies",
        body: "If you smell gas inside your home or business, leave immediately and call Piedmont Natural Gas at 1-800-752-7504 from outside. Once Piedmont has confirmed the leak and shut off your service, call Joe B. Sullivan & Sons — we coordinate the leak location, repair, pressure test, and re-light directly with Piedmont and Metro Codes. We do not bypass safety steps, and we do not work on a gas system that hasn't been properly isolated. Real safety first.",
      },
    ],
    faqs: [
      {
        q: "Is annual backflow testing required in Nashville?",
        a: "Yes, for any property with a backflow prevention assembly installed (irrigation, fire suppression, commercial kitchen, etc.). Metro Water Services in Nashville requires annual certification testing by a licensed tester and filing of the test report. We do the test, file the report, and email you a copy.",
      },
      {
        q: "Can you upgrade my gas line for a tankless water heater?",
        a: "Yes — and most older Nashville homes need exactly that. A typical half-inch existing gas line won't feed the higher BTU demand of a tankless unit. We run a properly sized three-quarter or one-inch line from the meter to the tankless, pressure-test, permit, and inspect.",
      },
      {
        q: "What should I do if I smell gas in my home?",
        a: "Leave immediately, do not turn light switches on or off, and call Piedmont Natural Gas at 1-800-752-7504 from outside the home. Once Piedmont confirms the leak and shuts off service, call us to locate, repair, pressure-test, and coordinate restoration. Never work on a live gas system yourself.",
      },
    ],
    keywords: [
      "backflow installation Nashville",
      "backflow testing Nashville",
      "gas line installation Nashville",
      "gas line repair Nashville",
      "Metro Water backflow Nashville",
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
