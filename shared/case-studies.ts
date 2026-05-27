export interface CaseStudyQuote {
  text: string;
  attribution: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  size: "Small Business" | "Enterprise" | "International";
  industry: string;
  region: string;
  monthlyCost: string;
  savings: string;
  description: string;
  note: string;
  challenge: string;
  solution: string;
  results: string[];
  quote: CaseStudyQuote;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "law-office-michael-h-bonner",
    name: "Law Office of Michael H. Bonner",
    size: "Small Business",
    industry: "Legal — Business & International Law",
    region: "California, USA",
    monthlyCost: "$199.95",
    savings: "65%",
    description:
      "California-based business law practice with emphasis on international matters.",
    note: "Includes conference room and off-site capabilities.",
    challenge:
      "The firm was paying for a legacy hosted PBX with per-extension fees, separate conferencing, and limited mobility. Cross-border client calls were expensive, and partners could not move seamlessly between the office, the conference room, and home without juggling forwarding rules.",
    solution:
      "DSX migrated the practice to a 3CX deployment hosted on the DSX backbone at Citadel Campus. Off-site softphones for every attorney, a unified conference room endpoint, and SIP trunking sized to actual international call volume — implemented in under two weeks with zero downtime and full number porting.",
    results: [
      "65% reduction in total monthly communications cost.",
      "Single $199.95/month bill replaces multiple legacy line items.",
      "Conference-room and off-site calling included at no extra charge.",
      "International call quality and rates improved under DSX SIP trunks.",
    ],
    quote: {
      text:
        "DSX gave us a real phone system for what we used to pay just for extensions. We sound like a much bigger firm.",
      attribution: "Operations lead, Law Office of Michael H. Bonner",
    },
  },
  {
    slug: "synology",
    name: "Synology Inc.",
    size: "Enterprise",
    industry: "Technology — Network-Attached Storage",
    region: "Global",
    monthlyCost: "$686.00",
    savings: "46%",
    description:
      "Global technology leader handling 100,000+ minutes of communications monthly.",
    note: "Added 50% more capacity at 16% lower cost than the prior carrier.",
    challenge:
      "Synology's North American operation was processing over 100,000 minutes of voice traffic per month across sales, support, and partner teams. The incumbent carrier's per-minute and per-seat pricing scaled badly, queue routing was rigid, and adding capacity meant negotiating contract amendments.",
    solution:
      "DSX consolidated the workload onto a 3CX enterprise deployment with capacity-based DSX trunks, custom call-flow routing per department, and integration with the existing CRM. Capacity was sized for headroom, not headcount, so growth no longer means renegotiating.",
    results: [
      "46% reduction in monthly communications spend.",
      "50% additional capacity headroom at 16% lower cost than the legacy carrier.",
      "Department-aware routing across sales, support, and partner queues.",
      "Single platform across regions instead of carrier-by-carrier billing.",
    ],
    quote: {
      text:
        "We added capacity and cut cost at the same time. That almost never happens with a phone vendor.",
      attribution: "Telecom operations, Synology Inc.",
    },
  },
  {
    slug: "synergy-homeopathic",
    name: "Synergy Homeopathic",
    size: "International",
    industry: "Software — Healthcare Practitioner Tools",
    region: "Multi-region",
    monthlyCost: "$239.00",
    savings: "64%",
    description:
      "Global software solutions with distributed teams across multiple regions.",
    note: "Seamless international connectivity across time zones.",
    challenge:
      "Synergy's team was spread across multiple countries with customers calling from everywhere. Their previous setup forced regional phone numbers, expensive international forwarding, and inconsistent voicemail-to-email behavior between offices.",
    solution:
      "DSX deployed a single 3CX tenant with regional DIDs that all route into one unified call flow. Softphones for every team member, follow-the-sun routing rules, and consistent voicemail-to-email regardless of where the call originated.",
    results: [
      "64% reduction in total monthly communications cost.",
      "Regional numbers in every market without per-region contracts.",
      "Follow-the-sun routing across distributed teams.",
      "Consistent voicemail and call recording across all regions.",
    ],
    quote: {
      text:
        "Our customers don't care where we sit. With DSX, our phone system finally doesn't either.",
      attribution: "Engineering manager, Synergy Homeopathic",
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
