export type Service = {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  hero: string;
  intro: string;
  // Body content split into sections for SEO heading hierarchy.
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: "deep-tissue-massage",
    name: "Deep Tissue Massage",
    shortName: "Deep Tissue",
    metaTitle:
      "Deep Tissue Massage in Sydney | Clinical Pressure | Cedar & Co.",
    metaDescription:
      "Cedar & Co. delivers true clinical-pressure deep tissue massage in Sydney. 60 and 90 minute sessions, flat-rate pricing from $115. Real techniques, real results.",
    hero: "Real pressure. Real change. Booked this week.",
    intro:
      "Cedar & Co. is Sydney's most-booked deep tissue massage clinic — over 6,200 sessions delivered last year out of our Balmain treatment rooms. Our remedial therapists are trained in neuromuscular therapy (NMT), trigger point release, and cross-fibre friction work, and every session is built around what's actually wrong with your tissue, not a 60-minute spa script. Same-week openings most weeks.",
    sections: [
      {
        heading: "What deep tissue massage actually means at Cedar & Co.",
        body: "Deep tissue massage is not just Swedish with more pressure. At Cedar & Co., a deep tissue session means slow, sustained, layered pressure into specific muscle groups — usually the neck, upper traps, rhomboids, QL, and glute medius for our Sydney tech-worker patient base. Your therapist will use forearms, elbows, and knuckles to work through fascial restrictions and adhesions one layer at a time. You'll feel discomfort but never sharp pain. If something hurts wrong, we adjust — that's the difference between clinical work and a chain-massage script.",
      },
      {
        heading: "Why most Sydney desk workers need deep tissue, not Swedish",
        body: "If you spend 8+ hours a day at a desk in Pyrmont, the CBD, or North Sydney, the pattern we see is consistent: forward head posture, locked-down upper traps, internally rotated shoulders, weak deep neck flexors, and a cranky thoracic spine. Swedish massage feels nice for an hour and changes nothing. Deep tissue work into the levator scapulae, suboccipitals, and pec minor — the actual culprits — produces measurable range-of-motion change in a single 60-minute session. We re-test ROM at the start and end of every visit so you can feel the difference.",
      },
      {
        heading: "Session length, pricing, and what to book",
        body: "Cedar & Co. offers 60-minute deep tissue sessions at $115, 90-minute sessions at $165, and a focused 30-minute spot-treatment at $75 for patients who only need work on one specific area (usually neck/shoulders or low back). Most Sydney deep tissue therapists charge $30 more for the same hour. We hold flat pricing because we own our building and don't pay franchise fees. Package of 5 sessions is $525 (60-min) or $760 (90-min), saving roughly $40–$65 versus single-session rates.",
      },
      {
        heading: "After the session: what to expect over the next 48 hours",
        body: "Deep tissue work creates a controlled inflammatory response in the tissue we treated. You'll feel loose immediately after, then mildly sore the next day — about like a moderate gym session. Drink more water than usual (we're not selling you on toxins; you're literally moving lymph), avoid heavy lifting for 24 hours, and apply heat if anything tightens up. If soreness lasts beyond 48 hours, that's worth a text — we'll back off pressure on the next visit. Most Sydney patients see lasting ROM and pain change within 3 sessions spaced 1–2 weeks apart.",
      },
    ],
    faqs: [
      {
        q: "How much does deep tissue massage cost in Sydney?",
        a: "Cedar & Co.'s flat-rate deep tissue massage in Sydney: $75 for 30 minutes, $115 for 60 minutes, $165 for 90 minutes. Five-session packages bring the per-session price down to $105 (60-min) or $152 (90-min). No upsells, no add-on fees.",
      },
      {
        q: "Is deep tissue massage supposed to hurt?",
        a: "It should be intense but never sharp. Productive deep tissue discomfort feels like a deep ache that releases as your therapist holds pressure. Sharp, electrical, or breath-holding pain means we're on a nerve or pushing through a guarded muscle — tell your therapist and we'll adjust immediately. More pain does not equal more benefit.",
      },
      {
        q: "How often should I get deep tissue massage?",
        a: "For active issues (chronic neck pain, low back tightness, post-injury recovery), every 1–2 weeks for the first month, then every 3–4 weeks for maintenance. For desk-job maintenance only, every 4–6 weeks works for most Sydney patients we see.",
      },
    ],
    keywords: [
      "deep tissue massage Sydney",
      "clinical massage Sydney",
      "neuromuscular therapy Sydney",
      "deep tissue Balmain",
      "deep tissue Surry Hills",
    ],
  },
  {
    slug: "chiropractic-adjustment",
    name: "Chiropractic Adjustment",
    shortName: "Chiropractic",
    metaTitle:
      "Chiropractor in Sydney | Evidence-Based Adjustments | Cedar & Co.",
    metaDescription:
      "Cedar & Co. offers evidence-based chiropractic adjustments in Sydney. Diversified, Activator, and drop-table techniques. $85 first visit, $65 follow-ups. Same-week appointments.",
    hero: "Adjustments that hold. Diagnosis that's honest.",
    intro:
      "Cedar & Co.'s chiropractic care is built around a simple rule: we adjust what needs adjusting and refer out what doesn't. Our chiropractor, Marcus Reyes, is dual-credentialed (remedial therapist + chiropractor) and treats over 35 Sydney patients a week using diversified manual adjustment, Activator, and drop-table technique. No 50-visit treatment plans, no scare-tactic X-rays, no upselling. If three visits aren't moving the needle, we change approach or refer.",
    sections: [
      {
        heading: "What a first chiropractic visit at Cedar & Co. looks like",
        body: "Your initial chiropractic visit in Sydney is 45 minutes: a focused intake on the actual complaint (we don't ask about your childhood), an orthopaedic and neurological exam, range-of-motion testing, and palpation of the affected segments. If we identify a clear mechanical issue we can help with, we adjust on the same visit. If we find anything that suggests imaging or a referral — a positive neuro test, a red flag for something non-mechanical — we send you out with a written referral, not a $1,200 X-ray package. First visit flat rate: $85.",
      },
      {
        heading: "Techniques we use — and why one isn't right for everyone",
        body: "Marcus is trained in Diversified (the classic manual high-velocity, low-amplitude adjustment), Activator (an instrument-assisted low-force technique for patients who can't tolerate manual adjusting), and drop-table (used for SI joint and pelvic dysfunction). Surry Hills runners with cranky SI joints usually do best with drop-table. Older Glebe patients with osteopenia get Activator. Most healthy adults with mid-back restriction respond to Diversified. We choose technique by what the tissue and patient tolerate, not by what the clinic prefers.",
      },
      {
        heading: "When chiropractic adjustment is the right tool",
        body: "Chiropractic adjustment is genuinely effective for acute mechanical low back pain, mid-back restriction, certain types of tension headache, and SI joint dysfunction. The peer-reviewed evidence is strongest for those four. It is not effective treatment for asthma, ear infections, immune system issues, or anything else outside of musculoskeletal mechanics — and we'll tell you so. If you're in Sydney and another chiropractor has told you 80 visits are required to fix your immune system, get a second opinion. Mechanical issues respond fast or they're not mechanical.",
      },
      {
        heading: "Pricing and what private health actually covers in Sydney",
        body: "First visit including exam: $85. Follow-up adjustment: $65. Combined adjustment + 30-minute soft tissue work: $135 (the most-booked option for our Sydney patients with chronic muscle involvement). We accept Bupa, Medibank, HCF, and NIB for on-the-spot HICAPS rebates — most extras policies cover 60–80% of chiropractic visits up to your annual limit. We also offer a self-pay membership at $195/month for unlimited adjustments, popular with our North Sydney commuter patients.",
      },
    ],
    faqs: [
      {
        q: "How much does a chiropractor cost in Sydney?",
        a: "Cedar & Co. flat rates: $85 first visit (includes exam), $65 follow-up adjustment, $135 adjustment plus 30-minute soft tissue. Average Sydney chiropractor first-visit pricing is $110–$185, often with required X-rays. We don't require imaging unless there's a clinical reason.",
      },
      {
        q: "Do I need X-rays before my first adjustment?",
        a: "No, unless there's a specific clinical red flag — recent trauma, suspected fracture, neurological symptoms below the level of injury, or a patient over 60 with new onset of severe pain. Routine X-rays for every new chiropractic patient are not evidence-based and we don't do them.",
      },
      {
        q: "How many chiropractic visits will I need?",
        a: "For an acute mechanical issue, most Sydney patients see meaningful change in 3–6 visits. For chronic patterns we often recommend a tune-up every 4–6 weeks once you're out of the acute phase. If three visits aren't producing measurable change, we re-evaluate or refer rather than continuing.",
      },
    ],
    keywords: [
      "chiropractor Sydney",
      "chiropractic adjustment Sydney",
      "Sydney chiropractor Balmain",
      "evidence-based chiropractic Sydney",
      "chiropractor Surry Hills",
    ],
  },
  {
    slug: "sports-recovery",
    name: "Sports Massage & Athletic Recovery",
    shortName: "Sports Recovery",
    metaTitle:
      "Sports Massage in Sydney | Athletic Recovery | Cedar & Co.",
    metaDescription:
      "Sports massage and athletic recovery in Sydney for runners, climbers, hikers, and lifters. ART-certified therapists, $125 60-min sessions, pre and post-event work.",
    hero: "Train hard. Recover smart. Stay in the rotation.",
    intro:
      "Cedar & Co. treats roughly 40% of our Sydney patient load on the sports side — Centennial Park runners, Macpac weekend hikers, climbers from Sydney Indoor Climbing Gym, masters lifters, and Sydney Tri Club triathletes. Our therapists are certified in Active Release Technique (ART) and trained in pre-event, post-event, and inter-training maintenance work. We know the difference between a fresh hamstring strain and a chronic high-hamstring tendinopathy — and we treat them differently.",
    sections: [
      {
        heading: "Pre-event vs. post-event vs. maintenance: book the right session",
        body: "Pre-event sports massage (24–48 hours before a race or hard effort) uses faster pace, less depth, and avoids inducing soreness — the goal is to open up tissue without creating an inflammatory response. Post-event work (within 72 hours after) uses lighter, longer strokes to flush metabolic waste and reduce DOMS. Maintenance sports massage between training cycles is where the real deep tissue and ART work happens — the kind that actually changes tissue. Most Sydney athletes book maintenance every 2–3 weeks during a build cycle.",
      },
      {
        heading: "Active Release Technique (ART) for runners and climbers",
        body: "ART is a soft tissue technique where the therapist applies tension to a specific muscle while moving the joint through its range of motion — pinning the tissue down and lengthening it actively. It's the most effective tool we have for chronic running injuries (IT band, high hamstring, plantar fasciitis, posterior tibialis) and climber-specific overuse (medial epicondylosis, wrist flexors, A2 pulley adhesions). Marcus is full-body ART certified and treats roughly 12 climbers and runners a week out of the Sydney Indoor Climbing Gym referral network alone.",
      },
      {
        heading: "Graston, Gua Sha, and instrument-assisted soft tissue mobilisation",
        body: "When ART and traditional deep tissue can't reach a chronic adhesion — most often with old hamstring scar tissue, thoracic outlet patterns, and stubborn lateral elbow tendinosis — we add Graston (a stainless steel instrument set) or Gua Sha (a smooth stone) to the session. Both create controlled microtrauma that triggers a tissue remodelling response. The treated area looks bruised for 2–4 days but the underlying mechanical change is real and durable. We add IASTM to a regular session for $25, or run a focused 60-minute IASTM-only session for $145.",
      },
      {
        heading: "Pricing and how Sydney athletes typically book",
        body: "Sports massage 60-minute: $125. 90-minute: $175. Pre-event 30-minute flush: $70 (we save day-before slots specifically for race prep). Most Sydney masters athletes — the Athletics NSW Masters group, Sydney Trail Runners regulars, and the Sydney Cycling Club competitive masters — book a 5-session package at $560 and use it across a season. Post-injury rehab patients usually combine sports massage with a chiropractic adjustment in the same visit ($165 combined).",
      },
    ],
    faqs: [
      {
        q: "When should I get a sports massage before a race?",
        a: "For half-marathons and shorter, 48–72 hours out. For marathons and ultras, 4–7 days out. Never the day before — even a light flush can leave legs feeling slightly off, and you don't want that variable on race morning. Cedar & Co. saves Wednesday and Thursday slots specifically for weekend race prep.",
      },
      {
        q: "Do you treat climbers' fingers and pulley injuries?",
        a: "Yes. Marcus has worked with Sydney Indoor Climbing Gym members for 9 years and treats A2 pulley strains, lumbrical issues, and chronic flexor tendinopathy regularly. Acute pulley ruptures need orthopaedic referral first — we work the surrounding tissue once the acute phase is past.",
      },
      {
        q: "Can sports massage help with IT band syndrome?",
        a: "It can help, but the IT band itself isn't usually the problem — it's a symptom of glute medius weakness and TFL/quad overactivity. We treat the upstream pattern (TFL release, glute med activation, hip mobility work) rather than just rolling the IT band, which is largely uncompressible fibrous tissue.",
      },
    ],
    keywords: [
      "sports massage Sydney",
      "ART certified Sydney",
      "athletic recovery Sydney",
      "running injury Sydney",
      "Graston Sydney",
    ],
  },
  {
    slug: "myofascial-release",
    name: "Myofascial Release & Trigger Point Therapy",
    shortName: "Myofascial Release",
    metaTitle:
      "Myofascial Release in Sydney | Trigger Point Therapy | Cedar & Co.",
    metaDescription:
      "Cedar & Co. provides myofascial release and trigger point therapy in Sydney for chronic pain, tension headaches, and stubborn referral patterns. 60/90 min sessions.",
    hero: "Find the knot. Release the pattern. Stay loose.",
    intro:
      "Cedar & Co.'s myofascial release and trigger point work is for the patient who's been told to just stretch more and it hasn't worked. We map your specific trigger points using Travell and Simons referral charts, then release them with sustained ischaemic compression, fascial unwinding, and neuromuscular technique. Most chronic tension headaches, mystery shoulder pain, and locked-down hip patterns we see in Sydney are referral patterns from somewhere upstream — and that's where we work.",
    sections: [
      {
        heading: "Why your headache might actually be coming from your shoulder",
        body: "The single most common pattern we see in Sydney desk workers: tension headaches that feel like they originate at the temples or behind the eyes, but actually trace to active trigger points in the upper trapezius, suboccipitals, and sternocleidomastoid. Massaging the head doesn't help because the head isn't the problem. Releasing the trigger points in the upper traps and SCM — using sustained 60–90 second compression at the precise referral point — typically resolves the headache in real time. Most patients feel the headache dissipate on the table.",
      },
      {
        heading: "What myofascial release actually is (and isn't)",
        body: "Myofascial release is sustained, low-load pressure into the fascial layer to allow it to remodel. It looks slow and quiet from the outside — there's not much movement, just held pressure for 90–180 seconds at a time. This isn't woo: connective tissue genuinely behaves viscoelastically and responds to sustained low load by reorganizing collagen fibers. What MFR is not: a magic energy-channeling technique, a treatment for non-mechanical conditions, or a substitute for active rehab. It's a high-quality tool for one specific job.",
      },
      {
        heading: "Trigger point therapy: ischaemic compression and dry needling referrals",
        body: "Active trigger points are hyperirritable spots in taut bands of muscle that refer pain to a predictable distant location. Cedar & Co. treats them in two ways: manual ischaemic compression (sustained pressure until the point releases — usually 30–90 seconds) and stretch-and-spray for surface points. For patients with chronic resistant trigger points who've plateaued on manual work, we refer out to two trusted Sydney dry needling providers — we don't perform dry needling in-house. Honest scope of practice matters more than capturing every revenue line.",
      },
      {
        heading: "Pricing and which session length to book",
        body: "60-minute MFR/trigger point session: $125. 90-minute: $175. The 60-minute slot works for one or two specific complaint areas (neck-and-shoulder pattern, low-back pattern). The 90-minute slot is the better choice if you have a multi-segment pattern — for example, a Surry Hills cyclist with hip flexor tightness, lumbar restriction, and forward neck posture all interacting. We re-test ROM and reproduce the referral pattern at the start and end of every visit so the change is measurable, not guessed.",
      },
    ],
    faqs: [
      {
        q: "How is myofascial release different from regular massage?",
        a: "Regular Swedish or even most deep tissue massage uses moving strokes and works the muscle belly. MFR uses sustained pressure (often 90+ seconds in one spot) into the fascial layer that surrounds and connects muscles. Different tissue, different technique, different results — particularly for chronic patterns that haven't responded to conventional massage.",
      },
      {
        q: "Will trigger point therapy hurt?",
        a: "Pressing on an active trigger point reproduces your familiar referral pain — that's actually how we know we've found the right spot. The intensity should be a 6–7 out of 10, decreasing as the point releases. If it's a 9 or 10, we back off; sustained max-tolerance pressure doesn't release tissue faster, it just guards it.",
      },
      {
        q: "How many sessions until I notice change?",
        a: "Most chronic referral patterns we see in Sydney resolve substantially within 3–4 sessions spaced 1–2 weeks apart. If you're not noticing measurable change by visit 4, we re-evaluate the working diagnosis rather than booking a fifth visit of the same thing.",
      },
    ],
    keywords: [
      "myofascial release Sydney",
      "trigger point therapy Sydney",
      "tension headache massage Sydney",
      "chronic pain massage Sydney",
      "MFR Balmain",
    ],
  },
  {
    slug: "postural-correction",
    name: "Postural Assessment & Correction",
    shortName: "Postural Correction",
    metaTitle:
      "Postural Correction in Sydney | Desk Worker Posture | Cedar & Co.",
    metaDescription:
      "Postural assessment and correction in Sydney for tech workers, students, and desk-bound patients. Photographic analysis, manual therapy, and home programme. $145.",
    hero: "Sitting eight hours a day adds up. We undo it.",
    intro:
      "If you work at Atlassian, Canva, or any one of the 600+ tech companies in Sydney, your body has adapted to a chair. Cedar & Co.'s postural assessment and correction programme combines photographic analysis, manual soft tissue work on the actual restricted structures, and a corrective exercise programme built for someone who has 10 minutes a day, not 60. We've put 380+ Sydney desk workers through this protocol since 2019 and we've learned what works and what doesn't.",
    sections: [
      {
        heading: "The postural assessment: what we measure on visit one",
        body: "The first visit is 75 minutes of structured assessment, not adjustment. We take standardised photographs from anterior, posterior, and lateral with a plumb-line grid, measure forward head translation in centimetres, evaluate scapular position and thoracic kyphosis, screen the pelvis for rotation and tilt, and run a battery of length-tension tests on the predictable culprits: pec minor, upper traps, hip flexors, hamstrings, deep neck flexors. You leave with a printed report showing the actual numbers — so when you come back in 8 weeks, we have apples-to-apples evidence of change.",
      },
      {
        heading: "The Sydney tech worker posture pattern (and why it's specific)",
        body: "Across the 380+ desk workers we've assessed in Sydney, the dominant pattern is remarkably consistent: 4–7cm of forward head translation, internally rotated and elevated shoulders, a flat lower thoracic spine paradoxically combined with an exaggerated upper thoracic kyphosis, anteriorly tilted pelvis, and weak deep neck flexors and lower traps. The North Sydney Atlassian commuters and Pyrmont Canva workers we treat tend to have a stronger anterior tilt component (long drive plus long sit). Surry Hills remote workers tend toward more thoracic kyphosis (smaller home setups, more laptop use). The treatment is similar; the emphasis differs.",
      },
      {
        heading: "What we actually do — manual therapy plus corrective exercise",
        body: "Posture isn't just stretching. The shortened structures need real soft tissue work — usually pec minor, anterior delt, suboccipitals, hip flexors, and the often-overlooked subscapularis. The lengthened, weak structures need activation work — deep neck flexors, lower and middle trapezius, glute max, and posterior cuff. We do the manual therapy in-clinic (typically a 30-minute soft tissue session per visit) and you take home a 4-exercise daily programme that takes 10 minutes. No 27-exercise printouts that no one will actually do.",
      },
      {
        heading: "Pricing, package, and the 8-week reassessment",
        body: "Initial postural assessment with full report: $145 (75 minutes). Most Sydney patients then book a 6-visit package at $620 — six 45-minute treatment-and-progress sessions over 8 weeks plus a final reassessment. At week 8 we re-photograph and re-measure. If the numbers haven't changed, we don't sell you more sessions — we re-think the programme. Roughly 78% of patients in our records show measurable change (>1cm forward head reduction, ROM improvement) by the 8-week mark. The other 22% usually need a different intervention, which we'll identify and refer.",
      },
    ],
    faqs: [
      {
        q: "How much does postural assessment cost in Sydney?",
        a: "Initial assessment with photographic analysis and written report: $145. The 6-visit corrective package: $620 ($103/session). Most Sydney physiotherapists charge $185–$250 for a comparable initial evaluation, often without the photographic baseline.",
      },
      {
        q: "Can I really change my posture as an adult?",
        a: "Yes, within limits. Soft tissue restriction and motor control patterns are highly modifiable at any age. Bony structural changes (severe scoliosis, fixed kyphosis from osteoporotic compression) are not. The first assessment tells us which category you fall in. Most Sydney desk-job posture is the modifiable kind.",
      },
      {
        q: "How often do I need to come in?",
        a: "Once a week for the first 4 weeks, then every 2 weeks for weeks 5–8. After the initial 8-week programme, most patients maintain with one tune-up every 6–8 weeks plus the home programme. The home programme is what holds the change between visits.",
      },
    ],
    keywords: [
      "posture correction Sydney",
      "forward head posture Sydney",
      "desk worker posture Sydney",
      "postural assessment North Sydney",
      "tech neck Sydney",
    ],
  },
  {
    slug: "cupping-art",
    name: "Cupping & Active Release Technique",
    shortName: "Cupping & ART",
    metaTitle:
      "Cupping & ART in Sydney | Soft Tissue Therapy | Cedar & Co.",
    metaDescription:
      "Cupping therapy and Active Release Technique in Sydney for stubborn adhesions, fascial restriction, and post-injury recovery. ART-certified providers. From $95.",
    hero: "Old tissue stuck on old patterns. We unstick it.",
    intro:
      "Cedar & Co. uses cupping and Active Release Technique (ART) on the same patient population — Sydney athletes, climbers, runners, and chronic-pain patients who haven't gotten lasting change from conventional massage. Both techniques target the same problem (fascial adhesion and restricted tissue glide) using different mechanical tools. Most sessions combine the two: ART for the specific muscle-tendon junction, cupping for the broader fascial sheet around it.",
    sections: [
      {
        heading: "Cupping: what it actually does (and what it doesn't)",
        body: "Cupping uses silicone or polycarbonate cups to create localized negative pressure on the skin and superficial fascia, decompressing tissue rather than compressing it like every other manual technique. The negative pressure separates fascial layers, increases microcirculation to the treated area, and breaks adhesions between skin, fascia, and underlying muscle. It produces those distinctive round circular marks that fade in 4–10 days. What cupping doesn't do: pull toxins from your body, balance qi, or treat anything outside of musculoskeletal mechanics. We use it because the mechanical effect on fascia is real and useful.",
      },
      {
        heading: "Active Release Technique (ART): the gold standard for adhesion",
        body: "ART is a patented soft tissue protocol where the provider applies precise tension to a specific muscle, tendon, or nerve while taking the joint through its range of motion. The tension pins the soft tissue while the active movement lengthens and breaks adhesions between tissue layers. ART is the most effective tool we have for IT band issues, plantar fasciitis, tennis elbow, carpal tunnel, and the post-injury scar tissue patterns that linger after surgery or trauma. Marcus is full-body ART certified — there are roughly 18 full-body certified ART providers in greater Sydney.",
      },
      {
        heading: "When we combine cupping and ART in the same session",
        body: "Most stubborn chronic patterns benefit from both. A typical example: a Glebe runner with chronic high hamstring tendinopathy. We start with 10 minutes of cupping along the posterior chain to release the broader fascial restriction from low back through hamstring to calf. Then we switch to ART on the specific hamstring origin and ischial tuberosity attachment. Then we finish with assisted active stretching to lock in the new range. Combined session is 60 minutes for $135. The combination produces more durable change than either technique alone.",
      },
      {
        heading: "Pricing, marks, and what to expect after",
        body: "Cupping-only 30-minute focal session: $95. ART-only 30-minute focal session: $95. Combined 60-minute cupping+ART session: $135. The cupping marks are not bruises — there's no broken capillary or blunt-force injury. They're a stagnation pattern that fades over 4–10 days depending on how restricted the tissue was. Bigger, darker marks indicate more fascial restriction in that spot. We document mark intensity at each visit so patients can see the pattern decrease over a treatment course.",
      },
    ],
    faqs: [
      {
        q: "Does cupping leave bruises?",
        a: "No, not technically. The marks aren't bruises — there's no impact trauma or capillary rupture. They're a stagnation pattern from the tissue decompression and they fade in 4–10 days. They're also a useful biomarker: the mark intensity decreases with each session as the underlying tissue restriction resolves.",
      },
      {
        q: "How is ART different from regular deep tissue massage?",
        a: "Deep tissue massage works the muscle belly with sustained pressure. ART pins specific tissue while you actively move the joint — it's a structured protocol with over 500 specific moves matched to specific muscle/tendon/nerve issues. The active movement component is what makes ART more effective for chronic adhesion than passive manual work.",
      },
      {
        q: "How many cupping or ART sessions until I see change?",
        a: "Most Sydney patients with a chronic adhesion or fascial restriction (IT band, plantar fasciitis, lateral elbow) see meaningful change in 3–5 sessions spaced 1 week apart. If it's a recent acute issue, often 2–3 sessions. If we're not seeing change by visit 5, we re-evaluate the working diagnosis rather than continuing the same treatment.",
      },
    ],
    keywords: [
      "cupping therapy Sydney",
      "ART Sydney",
      "Active Release Technique Sydney",
      "fascial release Sydney",
      "cupping Surry Hills",
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
