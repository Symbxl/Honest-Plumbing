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
  image: string;
  imageAlt: string;
  geo: { latitude: number; longitude: number };
};

export const areas: ServiceArea[] = [
  {
    slug: "murfreesboro",
    name: "Murfreesboro",
    parentRegion: "Rutherford County, TN",
    zip: ["37127", "37128", "37129", "37130"],
    metaTitle: "Plumber in Murfreesboro, TN | Honest Plumbing",
    metaDescription:
      "Honest Plumbing is the local Murfreesboro plumber. Residential water heater, sewer and drain, water filtration, kitchen and bath plumbing, and full repipes across Rutherford County.",
    intro:
      "Murfreesboro is home base for Honest Plumbing. We work the full city — from the historic neighborhoods around the square out to the newer subdivisions in Blackman, Salem, and the Veterans Parkway growth corridor. Most calls here are same-day, and the drive from our base is short enough that we can usually be on-site within the morning if you call early.",
    localContext:
      "Murfreesboro housing splits between the older central core (1920s–1960s homes around East Main, College, and the MTSU area) and the newer outer subdivisions built since the 1990s. The older homes share the failure patterns of any pre-1970 housing stock in Middle Tennessee: galvanized supply line corrosion, cast iron drain scale, clay sewer laterals with root intrusion, and water heaters that are usually overdue for replacement. The newer subdivisions have cleaner systems but commonly need water filtration, water heater upsizing, and tankless conversions. We do both ends regularly.",
    commonProblems: [
      "Tree root intrusion in older sewer laterals near MTSU and East Main",
      "Galvanized supply line corrosion in mid-century homes",
      "Water heater replacement and tankless conversion in newer subdivisions",
      "Whole-house water filtration on city and well water",
      "Kitchen and bath remodels — fixture replacement, supply and drain work",
    ],
    drivingTime: "On-site same day in most cases",
    image: "/images/hero-banner.png",
    imageAlt: "Murfreesboro, TN residential plumbing service area — Honest Plumbing",
    geo: { latitude: 35.8456, longitude: -86.3903 },
  },
  {
    slug: "smyrna",
    name: "Smyrna",
    parentRegion: "Rutherford County, TN",
    zip: ["37167"],
    metaTitle: "Plumber in Smyrna, TN | Honest Plumbing",
    metaDescription:
      "Honest Plumbing serves Smyrna and the surrounding Rutherford County area. Water heater repair and installation, drain cleaning, water filtration, and full residential plumbing service.",
    intro:
      "Smyrna is a regular service area for Honest Plumbing — short drive from Murfreesboro, mix of established neighborhoods and newer subdivisions, and a steady volume of residential plumbing work. We do same-day service for most water heater, drain, and bathroom calls in Smyrna.",
    localContext:
      "Smyrna housing is largely 1980s–current subdivision construction with modern PEX or copper supply, PVC drains, and standard residential plumbing systems. The failure patterns are mostly appliance-related — water heater age-out, dishwasher and washing machine supply line failures, and disposal replacements — rather than the system-wide pipe issues you see in older central Murfreesboro. Tankless conversions and water filtration are common upgrades.",
    commonProblems: [
      "Water heater replacement and tankless conversion",
      "Whole-house water filtration installation",
      "Bathroom and kitchen faucet and fixture replacement",
      "Drain cleaning and sewer camera inspections",
      "Burst supply lines after hard freezes",
    ],
    drivingTime: "On-site in 20–30 minutes from Murfreesboro",
    image: "/images/work-1.jpg",
    imageAlt: "Smyrna, Tennessee residential plumbing — Honest Plumbing service area",
    geo: { latitude: 35.9828, longitude: -86.5186 },
  },
  {
    slug: "la-vergne",
    name: "La Vergne",
    parentRegion: "Rutherford County, TN",
    zip: ["37086"],
    metaTitle: "Plumber in La Vergne, TN | Honest Plumbing",
    metaDescription:
      "Honest Plumbing serves La Vergne with residential water heater, sewer and drain, water filtration, and full plumbing service across Rutherford County.",
    intro:
      "La Vergne is a regular service area for Honest Plumbing, between Murfreesboro and Nashville along I-24. Most of the housing stock is 1990s through current subdivision construction, with steady volume of water heater replacements, drain calls, and bathroom and kitchen plumbing.",
    localContext:
      "La Vergne's housing pattern is similar to Smyrna's — predominantly newer subdivision construction with modern plumbing systems. The most common service calls here are water heater age-out replacements (units installed when the homes were built are now hitting the 12–15 year mark), bathroom fixture replacements, and disposal swaps. We also see a healthy amount of tankless conversion interest as homeowners stay long-term and want lower bills.",
    commonProblems: [
      "Original-install water heaters reaching end of life",
      "Tankless conversion for long-term homeowners",
      "Bathroom remodel plumbing",
      "Kitchen disposal and faucet replacements",
      "Whole-house water softener and filtration installs",
    ],
    drivingTime: "On-site in 25–35 minutes from Murfreesboro",
    image: "/images/work-2.jpg",
    imageAlt: "La Vergne, Tennessee plumbing service area — Honest Plumbing",
    geo: { latitude: 36.0156, longitude: -86.5819 },
  },
  {
    slug: "nolensville",
    name: "Nolensville",
    parentRegion: "Williamson County, TN",
    zip: ["37135"],
    metaTitle: "Plumber in Nolensville, TN | Honest Plumbing",
    metaDescription:
      "Honest Plumbing serves Nolensville and the surrounding Williamson County area. Water heater installation, water filtration, drain service, and full residential plumbing.",
    intro:
      "Nolensville is a regular service area — short drive northwest from Murfreesboro, and a fast-growing town where most of the housing is newer construction. Tankless conversions, water filtration installs, and full bathroom and kitchen remodel plumbing are the bulk of our Nolensville work.",
    localContext:
      "Nolensville has grown quickly over the past two decades and most homes are 2000s through current construction. The plumbing systems are modern (PEX, PVC, gas lines properly sized for current code), which makes tankless conversions and whole-house filtration relatively clean installs. We also handle remodel plumbing as homeowners customize the bigger Nolensville homes.",
    commonProblems: [
      "Tankless water heater conversions",
      "Whole-house water filtration and softeners",
      "Remodel plumbing — kitchen and master bath build-outs",
      "Water heater replacement on aging original-install units",
      "Recirculation pump installation for larger homes",
    ],
    drivingTime: "On-site in 25–40 minutes from Murfreesboro",
    image: "/images/work-3.jpeg",
    imageAlt: "Nolensville, Tennessee plumbing service area — Honest Plumbing",
    geo: { latitude: 35.9534, longitude: -86.6708 },
  },
  {
    slug: "brentwood",
    name: "Brentwood",
    parentRegion: "Williamson County, TN",
    zip: ["37027"],
    metaTitle: "Plumber in Brentwood, TN | Honest Plumbing",
    metaDescription:
      "Honest Plumbing serves Brentwood with residential plumbing — water heater installation, tankless conversions, water filtration, and remodel plumbing across Williamson County.",
    intro:
      "Brentwood is a regular service area for Honest Plumbing. Most homes there are larger and newer than central Murfreesboro, with multiple water heaters, recirculation systems, and modern plumbing throughout. Tankless conversions and water filtration installs are common Brentwood jobs for us.",
    localContext:
      "Brentwood housing leans large, with significant 1980s–current construction. The plumbing systems are mostly PEX or copper supply, PVC drains, and the failure patterns are more often appliance-related (water heater age-out, supply line failures, disposal replacements) than the heritage-pipe issues you see in central Murfreesboro. Larger homes often have multiple water heaters in series or parallel, and we do meaningful upsize and tankless conversion work here.",
    commonProblems: [
      "Water heater replacement and upsizing in larger homes",
      "Tankless water heater conversion",
      "Whole-house water softener installation for hard-water mitigation",
      "Recirculation pump installation",
      "Remodel plumbing rough-ins for custom and addition projects",
    ],
    drivingTime: "On-site in 35–50 minutes from Murfreesboro",
    image: "/images/owner-1.jpg",
    imageAlt: "Brentwood, Tennessee residential plumbing — Williamson County",
    geo: { latitude: 36.0331, longitude: -86.7828 },
  },
  {
    slug: "franklin",
    name: "Franklin",
    parentRegion: "Williamson County, TN",
    zip: ["37064", "37067", "37069"],
    metaTitle: "Plumber in Franklin, TN | Honest Plumbing",
    metaDescription:
      "Honest Plumbing serves Franklin with full residential plumbing service — water heaters, tankless, water filtration, drain and sewer service, kitchen and bath, and repipes.",
    intro:
      "Franklin is a regular service area. We handle the full range of residential plumbing across Franklin — water heater repair and installation, tankless conversions, drain and sewer service, whole-house water filtration, and kitchen and bath plumbing.",
    localContext:
      "Franklin splits between the older historic district downtown (1850s–1920s buildings with the matching older residential streets) and the newer subdivision growth along Mack Hatcher, Carothers, and Hillsboro Road (predominantly 1990s–current construction). The older homes near downtown have the heritage-pipe failure patterns; the newer subdivisions have modern systems that mostly need appliance-age replacements and upgrade-style work (tankless, filtration, recirculation).",
    commonProblems: [
      "Sewer lateral root intrusion in older streets near downtown",
      "Water heater replacement in newer subdivisions",
      "Tankless water heater conversion",
      "Whole-house water filtration installation",
      "Kitchen and bath remodel plumbing",
    ],
    drivingTime: "On-site in 45–60 minutes from Murfreesboro",
    image: "/images/owner-2.jpg",
    imageAlt: "Franklin, Tennessee plumbing service area — Williamson County",
    geo: { latitude: 35.9251, longitude: -86.8689 },
  },
];

export const getAreaBySlug = (slug: string) =>
  areas.find((a) => a.slug === slug);
