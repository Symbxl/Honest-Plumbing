/**
 * Service area pages — one of the highest-leverage local SEO tactics.
 * Each area page targets "[service] in [neighborhood/city]" search queries
 * and signals to Google the geographic footprint of the business.
 */

export type ServiceArea = {
  slug: string;
  name: string;
  parentRegion: string;
  zip: string[];
  metaTitle: string;
  metaDescription: string;
  intro: string;
  // Specific local hooks Google rewards: landmarks, neighborhoods, demographics
  localContext: string;
  commonProblems: string[];
  drivingTime: string;
  geo: { latitude: number; longitude: number };
};

export const areas: ServiceArea[] = [
  {
    slug: "east-nashville",
    name: "East Nashville",
    parentRegion: "Nashville, TN",
    zip: ["37206", "37216", "37207"],
    metaTitle: "Plumber in East Nashville | Joe B. Sullivan & Sons",
    metaDescription:
      "East Nashville's heritage plumbing company since 1895. Water heater repair, drain cleaning, sewer line replacement, and gas service for Five Points, Inglewood, Lockeland Springs, and East Hill.",
    intro:
      "Joe B. Sullivan & Sons is based on Hermitage Avenue — we're literally an East Nashville company. We've been working the neighborhoods east of the river for five generations, which means we know the housing stock: 1910s–1940s craftsman bungalows in Lockeland Springs and East Hill, the ranches and mid-century ranches in Inglewood, and the newer infill construction that's gone up across Five Points and Cleveland Park since 2010. The plumbing problems in each are different, and the right fix depends on which kind of house you're in.",
    localContext:
      "East Nashville's pre-war housing stock — Lockeland Springs, East Hill, Edgefield, and parts of Cleveland Park — was built when galvanized steel supply lines, cast iron drains, and clay sewer laterals were standard. Eighty-plus years later, that pipe is at the end of its service life: galvanized supplies are corroding closed (the classic East Nashville symptom: hot water that runs hot but slow), cast iron drains are scaling internally and starting to crack at joints, and the clay sewer laterals are catching tree roots at every joint. The newer infill houses are easier — PEX and PVC throughout, no surprises — but the heritage bungalows are where most of our East Nashville work happens, and where five generations of accumulated expertise on old Nashville pipe actually matters.",
    commonProblems: [
      "Tree root intrusion in clay sewer laterals on tree-lined streets",
      "Galvanized water supply line corrosion in 1920s–1940s bungalows",
      "Cast iron drain scale buildup and joint failures",
      "Water heater replacement in tight basement and crawlspace installs",
      "Gas line undersizing on older homes converting to tankless",
    ],
    drivingTime: "On-site in 5–15 minutes from our Hermitage Avenue shop",
    geo: { latitude: 36.181, longitude: -86.74 },
  },
  {
    slug: "downtown-nashville",
    name: "Downtown Nashville",
    parentRegion: "Nashville, TN",
    zip: ["37201", "37203", "37219"],
    metaTitle: "Commercial Plumber in Downtown Nashville | Joe B. Sullivan & Sons",
    metaDescription:
      "Downtown Nashville's commercial plumbing specialist since 1895. Boiler service, commercial water heaters, restaurant and hotel plumbing, and emergency response for The Gulch, SoBro, and Music Row.",
    intro:
      "Downtown Nashville is mostly commercial work for us — boilers, large-volume water heaters, restaurant plumbing, hotel hot water plant work, and the steam units still running in older buildings around the central business district. We've worked downtown buildings for five generations, which means when a 1920s office building has a steam unit nobody else wants to touch, we usually have parts on the truck or know exactly where to source them.",
    localContext:
      "Downtown Nashville's mix of pre-war buildings (Church Street, Union Street, Printer's Alley), mid-century office towers, and post-2010 high-rise construction (The Gulch, SoBro) means commercial plumbers here have to handle the full range — gravity steam systems in 100-year-old buildings, conventional commercial boilers and tank water heaters in mid-century inventory, and modern condensing units and recirculation systems in the new towers. Restaurants are the other big downtown category for us: high-volume grease management, commercial dishwasher hot water demand, and FOG (fats/oils/grease) compliance with Metro Water are routine work. We do new build-outs, tenant fit-outs, and emergency response across the downtown core.",
    commonProblems: [
      "Commercial boiler repair in pre-war office buildings",
      "Restaurant grease trap and FOG compliance issues",
      "Hotel hot water plant capacity and recirculation problems",
      "Backflow assembly testing and re-certification for commercial customers",
      "Steam unit valve and trap rebuild in heritage buildings",
    ],
    drivingTime: "On-site in 10–20 minutes from our shop",
    geo: { latitude: 36.1627, longitude: -86.7816 },
  },
  {
    slug: "green-hills",
    name: "Green Hills",
    parentRegion: "Nashville, TN",
    zip: ["37215", "37205"],
    metaTitle: "Plumber in Green Hills, Nashville | Joe B. Sullivan & Sons",
    metaDescription:
      "Green Hills plumbing service from Joe B. Sullivan & Sons. Water heater installation, drain cleaning, sewer service, and remodel plumbing for Green Hills, Forest Hills, and Hillsboro Village.",
    intro:
      "Green Hills and the surrounding 37215 zip is one of our steadiest service areas — a mix of postwar ranches, larger 1980s–2000s builds, and significant ongoing remodeling. The work we do there leans residential: water heater replacements, remodel plumbing, sewer line camera inspections during real estate transactions, and the occasional tankless conversion for homeowners who've finally gotten tired of running out of hot water during teenager-shower hour.",
    localContext:
      "Green Hills, Forest Hills, and Hillsboro-West End share a housing pattern: significant land area, mature trees, and homes ranging from 1940s ranches up through current new construction. The mature trees mean sewer lateral root intrusion is a constant concern — many of these 1950s clay laterals are at the end of their life, and we do a steady volume of camera inspections and trenchless replacements. The larger homes also tend to have under-sized water heaters relative to demand (multi-bath households with soaking tubs and high-flow showers), and we do a lot of upsize replacements and tankless conversions. Remodeling activity is constant, and we work with several local GCs on rough-in and trim-out plumbing.",
    commonProblems: [
      "Sewer lateral root intrusion in 1950s–1970s clay pipe",
      "Under-sized water heater replacement for larger homes",
      "Tankless water heater conversion (gas line upgrade required)",
      "Remodel plumbing — kitchen, master bath, basement build-outs",
      "Real estate transaction sewer camera inspections",
    ],
    drivingTime: "On-site in 15–25 minutes from our shop",
    geo: { latitude: 36.106, longitude: -86.815 },
  },
  {
    slug: "belle-meade",
    name: "Belle Meade & West Nashville",
    parentRegion: "Nashville, TN",
    zip: ["37205", "37209", "37221"],
    metaTitle: "Plumber in Belle Meade & West Nashville | Joe B. Sullivan & Sons",
    metaDescription:
      "Belle Meade and West Nashville plumbing. Residential service, water heater installation, sewer service, and heritage-home expertise for Belle Meade, Sylvan Park, West Meade, and Bellevue.",
    intro:
      "We do a lot of work in Belle Meade, Sylvan Park, West Meade, and out into Bellevue. Belle Meade homes tend to be larger, on bigger lots, with more elaborate plumbing systems — multiple water heaters, recirculation pumps, exterior irrigation backflow, pool and pool-house plumbing — and they reward a plumber who's seen all of that before. Sylvan Park's 1920s–1940s bungalows have a lot in common with East Nashville's heritage stock; the failure patterns and our service approach are similar.",
    localContext:
      "Belle Meade is the high end of Nashville residential plumbing: large estates, multiple water heaters, recirculating hot water loops, geothermal and multi-system HVAC interactions with plumbing, and significant exterior plumbing (pool, fountain, irrigation backflow). These homes need a plumber who can size for actual peak demand, not whatever spec the original installer used. Sylvan Park's older bungalow stock — much of it 1920s–1940s — has the same galvanized supply line and cast iron drain issues as East Nashville heritage homes. West Meade and Bellevue skew newer (1970s–2000s) with more straightforward residential service needs. We work all four areas regularly.",
    commonProblems: [
      "Multi-zone hot water recirculation troubleshooting in larger homes",
      "Irrigation and pool backflow installation and annual testing",
      "Galvanized supply line replacement in Sylvan Park bungalows",
      "Tankless and large-tank installations for high-demand households",
      "Sewer lateral repair under mature landscaping and hardscape",
    ],
    drivingTime: "On-site in 20–30 minutes from our shop",
    geo: { latitude: 36.116, longitude: -86.86 },
  },
  {
    slug: "brentwood",
    name: "Brentwood",
    parentRegion: "Williamson County, TN",
    zip: ["37027"],
    metaTitle: "Plumber in Brentwood, TN | Joe B. Sullivan & Sons",
    metaDescription:
      "Brentwood plumbing service from Joe B. Sullivan & Sons. Water heater installation, tankless conversions, drain cleaning, and new construction plumbing across Williamson County.",
    intro:
      "Brentwood is a regular service area for us — most homes there are newer (1980s through current new construction), well-built, and the plumbing problems are generally cleaner and more predictable than the heritage Nashville work. Water heater replacements, tankless conversions, and remodel work make up the bulk of our Brentwood schedule, plus occasional new construction rough-ins for the custom-home GCs we work with in Williamson County.",
    localContext:
      "Brentwood housing skews newer than most of Nashville — predominantly 1980s through current builds, with significant ongoing new construction. The plumbing systems are mostly PEX or copper supply, PVC drains, and modern fixture inventory, which means the failure patterns are different from heritage Nashville: more often appliance-related (water heater failure, dishwasher and washing machine supply line failures, refrigerator ice maker line leaks) than pipe-system-related. Larger Brentwood homes often have multiple water heaters in series or parallel, and we do significant upsize and tankless conversion work there. The newer construction also means most homes already have appropriately sized gas lines, which makes tankless conversions cleaner.",
    commonProblems: [
      "Water heater replacement and upsizing in larger homes",
      "Tankless water heater conversion (often a cleaner install than older Nashville)",
      "Whole-house water softener installation for hard-water mitigation",
      "Burst pipes after a hard freeze (newer Brentwood homes are still vulnerable)",
      "New construction and addition plumbing rough-ins",
    ],
    drivingTime: "On-site in 25–35 minutes from our shop",
    geo: { latitude: 36.0331, longitude: -86.7828 },
  },
  {
    slug: "franklin",
    name: "Franklin",
    parentRegion: "Williamson County, TN",
    zip: ["37064", "37067", "37069"],
    metaTitle: "Plumber in Franklin, TN | Joe B. Sullivan & Sons",
    metaDescription:
      "Franklin plumbing service from Nashville's heritage plumbing company. Water heater installation, drain cleaning, sewer service, and commercial plumbing across Williamson County.",
    intro:
      "We've been doing residential and commercial plumbing in Franklin for decades — both downtown Franklin's heritage commercial buildings around the historic district, and the residential subdivisions and new construction spreading out along Mack Hatcher and Hillsboro Road. Franklin's commercial work plays to our strengths (older buildings with steam, boilers, and obsolete-parts diagnostics), and residential is steady water heater, drain, and remodel work.",
    localContext:
      "Franklin splits cleanly into two service areas for us: the historic district downtown (1850s–1920s commercial buildings around Main Street, where boiler and steam unit repair is routine, plus heritage residential in the original residential streets) and the newer subdivision growth along Mack Hatcher, Carothers, and Hillsboro Road (predominantly 1990s–current construction, similar to Brentwood in pattern). We also handle commercial plumbing for several Franklin restaurants and small office buildings. The drive from our East Nashville shop is longer than Davidson County work, but Williamson County has been a regular service area for five generations of Sullivans.",
    commonProblems: [
      "Heritage commercial boiler and steam unit service downtown",
      "Sewer lateral replacement in older residential streets",
      "Water heater installation for newer subdivisions",
      "Restaurant grease management and FOG compliance",
      "New construction plumbing rough-ins for custom-home GCs",
    ],
    drivingTime: "On-site in 35–50 minutes from our shop",
    geo: { latitude: 35.9251, longitude: -86.8689 },
  },
];

export const getAreaBySlug = (slug: string) =>
  areas.find((a) => a.slug === slug);
