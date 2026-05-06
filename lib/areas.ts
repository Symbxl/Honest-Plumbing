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
    slug: "balmain",
    name: "Balmain",
    parentRegion: "Sydney, NSW",
    zip: ["2041", "2039"],
    metaTitle: "Massage Therapist & Chiropractor in Balmain | Cedar & Co.",
    metaDescription:
      "Balmain's most-reviewed deep tissue and chiropractic clinic. Cedar & Co. has treated Inner West Sydney residents since 2009. Same-week appointments, flat-rate pricing.",
    intro:
      "Cedar & Co. is headquartered in Balmain — our clinic sits four blocks from the East Balmain ferry wharf. We see the full Balmain mix every week: tech workers with laptop-shoulder, runners training on the Bay Run, parents managing kid-carry SI joint pain, and longtime residents working through decades of wear. Whatever brought you in, we triage it specifically — no generic 60-minute rub-down.",
    localContext:
      "Balmain's resident mix has shifted dramatically over the past decade — what used to be predominantly wharfies, shipwrights, and dockworkers from the Cockatoo Island yards now includes a heavy concentration of remote tech workers from Atlassian, Canva, and the smaller Pyrmont-Ultimo startup belt. That shows up in our caseload: forward-head posture, mid-trap chronic tension from long monitor hours, and wrist/forearm overuse from poor desk ergonomics. We also see Bay Run runners with chronic IT band issues and Iron Cove kayakers with rotator cuff impingement. Our deep-tissue and chiropractic protocols are built around these specific Inner West patterns — we don't run a one-template-fits-all clinic.",
    commonProblems: [
      "Forward-head posture and chronic upper-trap tension in remote workers",
      "Wrist and forearm overuse from poor desk ergonomics",
      "IT band syndrome in Bay Run runners",
      "Rotator cuff impingement from kayaking and rowing",
      "Lower-back stiffness in stand-desk converts who stand too long, too soon",
    ],
    drivingTime: "On-site in 0–15 minutes from your door",
    geo: { latitude: -33.8568, longitude: 151.1817 },
  },
  {
    slug: "glebe",
    name: "Glebe",
    parentRegion: "Sydney, NSW",
    zip: ["2037"],
    metaTitle: "Massage Therapist in Glebe, Sydney | Cedar & Co.",
    metaDescription:
      "Glebe bodywork from Cedar & Co. Deep tissue, chiropractic, and sports recovery for Glebe residents and Jubilee Park runners. Same-week appointments.",
    intro:
      "Glebe's pace skews younger — USyd grad students, post-grad professionals, and a steady mix of families. Our typical Glebe patient is dealing with one of three things: a desk-job neck that's gradually become a daily problem, a running injury they've been icing for two months instead of treating, or a back that 'went out' once and never quite came back. Cedar & Co. has the same therapist see you every visit so there's continuity in the work.",
    localContext:
      "The Jubilee Park loop and the Bay Run attract a high volume of recreational runners and cyclists, which means Glebe brings us a disproportionate number of overuse injuries: shin splints, plantar fasciitis, piriformis syndrome, and patellofemoral pain. University of Sydney staff and grad students show up with classic study-posture compression patterns. Glebe parents in early-1900s terraces deal with chronic back pain from carrying kids up steep, narrow staircases. We map the actual movement pattern, not just the area where it hurts.",
    commonProblems: [
      "Plantar fasciitis and shin splints in Bay Run runners",
      "Patellofemoral pain in cyclists training around Blackwattle Bay",
      "Cervical spine compression in USyd grad students and staff",
      "SI joint dysfunction in parents of small children",
    ],
    drivingTime: "On-site in 8–18 minutes from our Balmain clinic",
    geo: { latitude: -33.879, longitude: 151.184 },
  },
  {
    slug: "surry-hills",
    name: "Surry Hills",
    parentRegion: "Sydney, NSW",
    zip: ["2010"],
    metaTitle: "Massage & Chiropractor in Surry Hills, Sydney | Cedar & Co.",
    metaDescription:
      "Surry Hills bodywork serving CBD commuters, Atlassian HQ workers, and Centennial Park residents. Cedar & Co. handles deep tissue, sports recovery, and adjustments.",
    intro:
      "Surry Hills' caseload is shaped by one fact: most of our patients work in the CBD or at Atlassian's George Street campus. That means heavy desk hours, stress-loaded shoulders, and the specific tension pattern of a tech worker who has been carrying a backpack with a 16-inch laptop up Crown Street for three years. Cedar & Co. handles both the standalone deep-tissue session and the longer-term posture and movement plan — your choice on the pace.",
    localContext:
      "Surry Hills professionals tend to come in at the breaking point — by the time they call us, the shoulder pain has been chronic for six to eighteen months and they've already tried two yoga studios and a Headspace meditation streak. The volume of work matters here: we book 60-minute deep tissue plus a 15-minute adjustment as a combo more often on Surry Hills than anywhere else in Sydney, because the patients want measurable change in the fewest visits. We also see chronic TMJ and jaw clenching from stress that other clinics miss because they don't include intraoral work — we do, and it's often the missing piece.",
    commonProblems: [
      "Chronic upper-trap and neck tension in CBD commuters",
      "Backpack-loaded shoulder pain in walking commuters",
      "Stress-driven TMJ and jaw clenching",
      "Lower back compression in long-haul desk workers",
    ],
    drivingTime: "On-site in 18–28 minutes from our clinic",
    geo: { latitude: -33.886, longitude: 151.211 },
  },
  {
    slug: "manly",
    name: "Manly",
    parentRegion: "Sydney, NSW",
    zip: ["2095", "2099", "2093"],
    metaTitle: "Massage & Chiropractor in Manly, Sydney | Cedar & Co.",
    metaDescription:
      "Manly bodywork covering Manly Beach, Fairlight, Manly Junction, and Balgowlah. Cedar & Co. treats runners, paddlers, and weekend athletes across the harbour.",
    intro:
      "Bridge or no bridge, Cedar & Co. sees plenty of Manly every week. We've worked with Manly Beach paddleboarders, Fairlight trail runners, weekend cyclists doing the Manly-to-Spit hill loop, and longtime Manly Junction residents managing chronic back issues. Manly's outdoor culture means we see a lot of athletes who pushed through pain for six months too long.",
    localContext:
      "Manly Beach and North Head Reserve are the two anchors of Manly's recreational identity, and they bring us a specific patient mix: paddleboarders and surfers with rotator cuff and lat strain, trail runners with chronic ankle instability, and ocean-swim hobbyists with mid-back overuse. Manly Junction residents skew toward post-injury recovery work — we see a lot of post-surgical knees and post-MVA whiplash that didn't get fully resolved at the original physio clinic. Our chiropractor and lead massage therapist work in the same room for combined cases, which is unusual on the Northern Beaches and matters for complex cases.",
    commonProblems: [
      "Rotator cuff and lat strain in paddleboarders and surfers",
      "Chronic ankle instability in trail runners",
      "Post-MVA whiplash that wasn't fully resolved in physio",
      "Hip and lower-back pain from Manly-to-Spit hill cycling",
    ],
    drivingTime: "On-site in 20–32 minutes from our clinic",
    geo: { latitude: -33.797, longitude: 151.285 },
  },
  {
    slug: "north-sydney",
    name: "North Sydney",
    parentRegion: "NSW",
    zip: ["2060", "2065", "2066", "2068", "2088"],
    metaTitle: "Massage Therapist & Chiropractor in North Sydney | Cedar & Co.",
    metaDescription:
      "North Sydney bodywork from Cedar & Co. Same-week appointments across North Sydney CBD, Crows Nest, Lane Cove, and the Lower North Shore. Registered in NSW.",
    intro:
      "North Sydney brings us two distinct patient populations: high-mileage Atlassian and Macquarie engineers from the CBD and Crows Nest, and longtime Lower North Shore families from the Lane Cove, Willoughby, and Mosman neighbourhoods. Both groups tend to wait too long before booking — the North Shore norm is 'I'll deal with it after this sprint' or 'after the kids are out of weekend sport.' We try to make the appointment frictionless: easy parking, evening slots, real-time-available booking.",
    localContext:
      "The dominant North Sydney caseload is engineering-table neck: chronic forward-head posture, suboccipital tension headaches, and bilateral upper-trap tightness from 50+ hours a week at high-resolution monitors. We see this same pattern in Atlassian, Canva, Macquarie, and CommBank engineers, often combined with mountain biking overuse from the Manly Dam and Garigal trail systems on weekends. Older Lane Cove and Mosman residents come in with longer-running mechanical issues — disc compression that's been present for years, hip mobility loss from sedentary decades. Our adjustment plus deep-tissue protocol is built for the tech-worker pattern specifically.",
    commonProblems: [
      "Tension headaches and suboccipital tightness in engineers",
      "Bilateral upper-trap chronic tension from monitor work",
      "Mountain bike overuse from Manly Dam weekend rides",
      "Disc compression and chronic stiffness in long-term North Shore residents",
    ],
    drivingTime: "On-site in 25–40 minutes from our Balmain clinic",
    geo: { latitude: -33.84, longitude: 151.207 },
  },
  {
    slug: "hornsby",
    name: "Hornsby",
    parentRegion: "NSW",
    zip: ["2077", "2076", "2079"],
    metaTitle: "Massage Therapist in Hornsby, NSW | Cedar & Co.",
    metaDescription:
      "Hornsby bodywork, just a short drive from our Balmain clinic. Cedar & Co. handles deep tissue, sports recovery, and chiropractic care across the Upper North Shore.",
    intro:
      "Hornsby is one of our fastest service zones on the Upper North Shore — most patients drive in inside fifteen minutes. The Hornsby caseload skews toward longer-term residents: families who've been in the same Pacific Highway home for fifteen-plus years, retirees managing chronic conditions, and the steady stream of north-line commuters who've been doing the M1 drive for too long. We do a lot of maintenance-cadence work here — patients on a regular every-three-weeks schedule.",
    localContext:
      "Hornsby's demographics tilt slightly older than inner Sydney, which changes the typical caseload. We see more chronic mechanical issues — degenerative disc, frozen shoulder, hip mobility loss — and more consistent maintenance schedules. Long-haul M1 commuters from Hornsby to the CBD develop a specific mid-back tension pattern from the seat-belt-and-steering-wheel posture that we treat regularly. Hornsby also has a quietly serious local cycling community out of Bobbin Head and the Old Pacific Highway, and we see plenty of overuse from heavy weekend mileage.",
    commonProblems: [
      "Chronic mid-back tension from long M1 commutes",
      "Frozen shoulder and adhesive capsulitis in longer-term residents",
      "Hip mobility loss from sedentary decades",
      "Cycling overuse from heavy Bobbin Head weekend mileage",
    ],
    drivingTime: "On-site in 12–20 minutes from our clinic",
    geo: { latitude: -33.703, longitude: 151.099 },
  },
];

export const getAreaBySlug = (slug: string) =>
  areas.find((a) => a.slug === slug);
