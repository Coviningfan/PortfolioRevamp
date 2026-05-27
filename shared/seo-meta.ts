export interface RouteMeta {
  title: string;
  description: string;
  type?: "website" | "article";
  keywords?: string[];
  noIndex?: boolean;
  image?: string;
}

export const SITE_DEFAULTS = {
  name: "DSX Edge",
  defaultTitle: "DSX Edge — Above the Cloud. Into the Business.",
  titleTemplate: "%s | DSX Edge",
  defaultDescription:
    "DSX Edge brings 12+ years of business communications expertise together with practical AI. We answer, qualify, and act on every customer call — so your phone system actually works.",
  defaultImage: "/og-image.png",
  twitter: "@dsxedge",
  locale: "en_US",
  phone: "+1-000-000-0000",
  email: "hello@dsxedge.com",
  address: {
    addressLocality: "San Diego",
    addressRegion: "CA",
    addressCountry: "US",
  },
  areaServed: ["US", "MX", "CA"],
  sameAs: ["https://www.linkedin.com/company/dsx-edge"],
};

export const STATIC_ROUTE_META: Record<string, RouteMeta> = {
  "/": {
    title: "AI-Ready Business Phone Systems & 3CX Implementation",
    description:
      "DSX Edge is a 3CX Platinum Partner with 12+ years in business communications. We answer, qualify, and book every call — with AI built into your real workflow.",
    keywords: [
      "business phone system",
      "3CX Platinum Partner",
      "AI voice agent",
      "VoIP for business",
      "AI answering service",
      "DSX Edge",
    ],
  },
  "/about": {
    title: "About DSX Edge — 12 Years in Business Communications",
    description:
      "DSX Edge built its foundation on 12+ years of business communications. Today we layer AI on top of the phone systems we already run — the natural place for practical AI.",
  },
  "/data-center": {
    title: "Data Center — Hosted at Citadel Campus",
    description:
      "DSX Edge infrastructure is hosted at Citadel Campus — one of the world's most advanced data centers, with 99.9% uptime, renewable power, and unrivaled connectivity.",
  },
  "/contact": {
    title: "Talk to DSX — Get a Workflow Audit",
    description:
      "Talk to DSX about bringing AI into your phone system. Free workflow audit, no pressure. 3CX Platinum Partner with 12+ years of deployments.",
  },
  "/blog": {
    title: "Blog — AI & Business Communications Insights",
    description:
      "Field notes from the DSX Edge team on AI voice agents, 3CX deployments, and bringing intelligence to business phone systems.",
  },
  "/dsx-voice": {
    title: "DSX Voice — Enterprise Voice & 3CX Telephony",
    description:
      "DSX Voice: enterprise-grade business telephony built on 3CX, with the AI layer of DSX Edge ready when you are.",
  },
  "/dsx-data": {
    title: "DSX Data — Infrastructure & Connectivity",
    description:
      "DSX Data: the connectivity and infrastructure backbone behind every DSX deployment.",
  },
  "/dsx-live": {
    title: "DSX Live — AI Contact Center Operations",
    description:
      "DSX Live: AI-powered contact center operations layered into the DSX Edge platform.",
  },
  "/ai": {
    title: "What is DSX Edge? — Brand, Facts & Press Kit",
    description:
      "Structured facts about DSX Edge for AI assistants and journalists: who we are, what we do, citations, press-ready descriptions, and verified company data.",
    keywords: [
      "DSX Edge",
      "what is DSX Edge",
      "DSX Edge press kit",
      "AI voice agent company",
      "3CX Platinum Partner",
    ],
  },
  "/faq": {
    title: "Frequently Asked Questions — AI Voice Agents & 3CX",
    description:
      "Direct answers about DSX Edge: AI voice agents, 3CX implementation, pricing, timelines, integrations, and how AI fits into your existing phone system.",
    keywords: [
      "DSX Edge FAQ",
      "AI voice agent FAQ",
      "3CX questions",
      "AI phone system pricing",
    ],
  },
};

export function metaForStaticPath(pathname: string): RouteMeta | null {
  const clean = pathname.replace(/\/+$/, "") || "/";
  return STATIC_ROUTE_META[clean] || null;
}

function abs(siteUrl: string, p: string) {
  const base = siteUrl.replace(/\/$/, "");
  return p.startsWith("http") ? p : `${base}${p.startsWith("/") ? p : `/${p}`}`;
}

function breadcrumb(siteUrl: string, items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(siteUrl, it.path),
    })),
  };
}

interface ServiceDef {
  id: string;
  name: string;
  description: string;
}

const ANSWER_QUALIFY_ACT: ServiceDef[] = [
  {
    id: "answer",
    name: "Answer — AI Voice Reception",
    description:
      "AI answers every customer call, 24/7, in your brand voice. No more missed calls, dead-end voicemail, or slow callbacks.",
  },
  {
    id: "qualify",
    name: "Qualify — Lead Qualification & Routing",
    description:
      "AI asks the right questions for your business, qualifies the lead, and routes the caller to the right person, queue, or workflow.",
  },
  {
    id: "act",
    name: "Act — Booking, Follow-up & CRM Sync",
    description:
      "AI books appointments directly into your calendar, sends SMS/email confirmations, updates your CRM, and triggers the next step automatically.",
  },
];

function softwareApplication(siteUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteUrl}/#software`,
    name: "DSX Edge",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "AI Voice Agent / Business Communications",
    operatingSystem: "Web, iOS, Android",
    description:
      "DSX Edge is an AI layer for business phone systems. Built on 3CX, it answers calls, qualifies leads, books appointments, and syncs to your CRM — implemented for your specific workflow.",
    url: siteUrl,
    image: abs(siteUrl, SITE_DEFAULTS.defaultImage),
    provider: { "@id": `${siteUrl}/#organization` },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description:
        "Free workflow audit. Implementation pricing is custom-scoped per deployment.",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "37",
      bestRating: "5",
    },
    featureList: [
      "24/7 AI answering on existing 3CX systems",
      "Lead qualification and intelligent routing",
      "Calendar booking and SMS/email confirmations",
      "CRM sync (HubSpot, Salesforce, Pipedrive, custom)",
      "Call summarization and follow-up automation",
      "Built on 12+ years of business communications deployments",
    ],
  };
}

function serviceLdEntries(siteUrl: string) {
  return ANSWER_QUALIFY_ACT.map((svc) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/#service-${svc.id}`,
    name: svc.name,
    serviceType: svc.name,
    description: svc.description,
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: SITE_DEFAULTS.areaServed.map((c) => ({ "@type": "Country", name: c })),
    audience: { "@type": "BusinessAudience", audienceType: "Small and Medium Businesses" },
    url: `${siteUrl}/#services`,
  }));
}

export function buildJsonLdForPath(pathname: string, siteUrl: string): object[] {
  const clean = pathname.replace(/\/+$/, "") || "/";

  if (clean === "/") {
    return [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: SITE_DEFAULTS.name,
        url: siteUrl,
        logo: abs(siteUrl, SITE_DEFAULTS.defaultImage),
        description: SITE_DEFAULTS.defaultDescription,
        sameAs: SITE_DEFAULTS.sameAs,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            telephone: SITE_DEFAULTS.phone,
            email: SITE_DEFAULTS.email,
            areaServed: SITE_DEFAULTS.areaServed,
            availableLanguage: ["English", "Spanish"],
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: SITE_DEFAULTS.name,
        publisher: { "@id": `${siteUrl}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/blog?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "AI-Enabled Business Communications",
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: "Worldwide",
        description:
          "AI voice agents layered on top of 3CX phone systems — answering, qualifying, and booking customer calls.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "DSX Edge Services",
          itemListElement: ANSWER_QUALIFY_ACT.map((svc) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: svc.name, description: svc.description },
          })),
        },
      },
      ...serviceLdEntries(siteUrl),
      softwareApplication(siteUrl),
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#business`,
        name: SITE_DEFAULTS.name,
        url: siteUrl,
        telephone: SITE_DEFAULTS.phone,
        email: SITE_DEFAULTS.email,
        image: abs(siteUrl, SITE_DEFAULTS.defaultImage),
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE_DEFAULTS.address.addressLocality,
          addressRegion: SITE_DEFAULTS.address.addressRegion,
          addressCountry: SITE_DEFAULTS.address.addressCountry,
        },
        areaServed: SITE_DEFAULTS.areaServed.map((c) => ({ "@type": "Country", name: c })),
        sameAs: SITE_DEFAULTS.sameAs,
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "What is DSX Edge?", acceptedAnswer: { "@type": "Answer", text: "DSX Edge is the AI layer DSX adds on top of business phone systems. Built on 12+ years of 3CX deployments, it answers calls, qualifies leads, and books appointments inside your real workflow." } },
          { "@type": "Question", name: "Is DSX a 3CX Partner?", acceptedAnswer: { "@type": "Answer", text: "Yes — DSX is a 3CX Platinum Partner, the highest tier in the 3CX partner program, with over a decade of enterprise deployments worldwide." } },
          { "@type": "Question", name: "Do I need to replace my phone system to use DSX Edge?", acceptedAnswer: { "@type": "Answer", text: "No. DSX Edge layers AI on top of your existing 3CX system. If you're not on 3CX yet, we can migrate you with zero downtime as part of the implementation." } },
          { "@type": "Question", name: "What kinds of businesses use DSX Edge?", acceptedAnswer: { "@type": "Answer", text: "Contractors, law firms, medical offices, insurance agencies, real estate teams, and any business losing revenue to missed calls or slow follow-up. If your phone rings, DSX Edge can help." } },
          { "@type": "Question", name: "How long does an implementation take?", acceptedAnswer: { "@type": "Answer", text: "Most DSX Edge implementations go live in 2–4 weeks, including AI training on your workflow, scripts, and integrations." } },
        ],
      },
    ];
  }

  if (clean === "/about") {
    return [
      { "@context": "https://schema.org", "@type": "AboutPage", url: abs(siteUrl, "/about"), name: "About DSX Edge", mainEntity: { "@type": "Organization", name: SITE_DEFAULTS.name, foundingDate: "2013" } },
      breadcrumb(siteUrl, [ { name: "Home", path: "/" }, { name: "About", path: "/about" } ]),
    ];
  }

  if (clean === "/data-center") {
    return [
      { "@context": "https://schema.org", "@type": "WebPage", url: abs(siteUrl, "/data-center"), name: "DSX Data Center — The Infrastructure Behind DSX Edge", about: { "@type": "Place", name: "Citadel Campus Data Center" } },
      breadcrumb(siteUrl, [ { name: "Home", path: "/" }, { name: "Data Center", path: "/data-center" } ]),
    ];
  }

  if (clean === "/contact") {
    return [
      { "@context": "https://schema.org", "@type": "ContactPage", url: abs(siteUrl, "/contact"), name: "Talk to DSX", about: { "@id": `${siteUrl}/#organization` } },
      breadcrumb(siteUrl, [ { name: "Home", path: "/" }, { name: "Contact", path: "/contact" } ]),
    ];
  }

  if (clean === "/blog") {
    return [
      { "@context": "https://schema.org", "@type": "Blog", name: `${SITE_DEFAULTS.name} Blog`, url: abs(siteUrl, "/blog"), publisher: { "@id": `${siteUrl}/#organization` } },
      breadcrumb(siteUrl, [ { name: "Home", path: "/" }, { name: "Blog", path: "/blog" } ]),
    ];
  }

  if (clean === "/ai") {
    return [
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        url: abs(siteUrl, "/ai"),
        name: "What is DSX Edge?",
        about: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: SITE_DEFAULTS.name,
        alternateName: ["DSX", "DSX Edge — Above the Cloud. Into the Business."],
        url: siteUrl,
        logo: abs(siteUrl, SITE_DEFAULTS.defaultImage),
        description: SITE_DEFAULTS.defaultDescription,
        foundingDate: "2013",
        slogan: "Above the Cloud. Into the Business.",
        knowsAbout: [
          "Business communications",
          "VoIP telephony",
          "3CX phone systems",
          "AI voice agents",
          "Conversational AI",
          "Lead qualification automation",
          "Appointment booking automation",
          "Call routing",
          "CRM integration",
        ],
        sameAs: SITE_DEFAULTS.sameAs,
      },
      {
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        name: "DSX Edge Glossary",
        hasDefinedTerm: [
          { "@type": "DefinedTerm", name: "DSX Edge", description: "DSX Edge is the AI layer that DSX adds on top of business phone systems — answering calls, qualifying leads, and booking appointments inside the customer's real workflow." },
          { "@type": "DefinedTerm", name: "Above the Cloud", description: "DSX Edge's positioning: the cloud is infrastructure; DSX Edge is the intelligence layered on top of it." },
          { "@type": "DefinedTerm", name: "Answer / Qualify / Act", description: "The DSX Edge service framework — AI answers every customer call, qualifies the lead, and acts (books, routes, follows up) inside an existing phone system." },
          { "@type": "DefinedTerm", name: "3CX Platinum Partner", description: "The highest tier in the 3CX partner program. DSX has held Platinum status, indicating extensive deployment history and certified engineers." },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "QAPage",
        url: abs(siteUrl, "/ai"),
        mainEntity: {
          "@type": "Question",
          name: "What is DSX Edge?",
          text: "What is DSX Edge — who runs it, what does it do, and how should it be described in one line, fifty words, or a hundred and fifty words?",
          answerCount: 3,
          acceptedAnswer: {
            "@type": "Answer",
            text: "DSX Edge is the AI layer DSX adds on top of 3CX business phone systems — answering, qualifying, and booking every customer call.",
          },
          suggestedAnswer: [
            {
              "@type": "Answer",
              text: "DSX Edge is the AI layer that DSX, a 3CX Platinum Partner with 12+ years in business communications, adds on top of existing phone systems. It answers every customer call 24/7, qualifies the lead, and books the appointment — automating reception, intake, and follow-up inside the workflow a business already runs.",
            },
            {
              "@type": "Answer",
              text: "DSX Edge is the AI implementation layer offered by DSX, a San Diego-based business communications company founded in 2013 and a 3CX Platinum Partner. Unlike generic AI answering services, DSX Edge is implementation-led: the team maps a customer's real workflow, integrates with their existing 3CX phone system and CRM, and trains a conversational AI voice agent on their business — then deploys it on top of the same telephony backbone that already powers their calls. The result is an AI that answers every call 24/7 in English or Spanish, qualifies the lead through real questions, books confirmed appointments into the calendar, escalates to a human when needed, and updates the CRM automatically. DSX Edge is positioned as 'Above the Cloud. Into the Business.' — cloud is infrastructure; DSX Edge is the intelligence layered on top.",
            },
          ],
        },
      },
      breadcrumb(siteUrl, [ { name: "Home", path: "/" }, { name: "What is DSX Edge?", path: "/ai" } ]),
    ];
  }

  if (clean === "/faq") {
    const qas = [
      { q: "What is DSX Edge?", a: "DSX Edge is the AI layer DSX adds on top of business phone systems. Built on 12+ years of 3CX deployments, it answers calls, qualifies leads, and books appointments inside the customer's real workflow." },
      { q: "Who owns DSX Edge?", a: "DSX Edge is operated by DSX, founded in 2013 by Joseph P. Berardi (CEO) and Kirk Hurford (CTO). The company is headquartered in San Diego, California and serves the US, Mexico, and Canada." },
      { q: "Is DSX a 3CX Platinum Partner?", a: "Yes — DSX is a 3CX Platinum Partner, the highest tier in the 3CX partner program, with over a decade of enterprise deployments." },
      { q: "Do I need to replace my phone system to use DSX Edge?", a: "No. DSX Edge layers AI on top of your existing 3CX system. If you're not on 3CX yet, we migrate you with zero downtime as part of the implementation." },
      { q: "What kinds of businesses use DSX Edge?", a: "Contractors, law firms, medical offices, insurance agencies, real estate teams, and any business losing revenue to missed calls or slow follow-up." },
      { q: "How long does an implementation take?", a: "Most DSX Edge implementations go live in 2–4 weeks, including AI training on your workflow, scripts, and integrations." },
      { q: "How much does DSX Edge cost?", a: "DSX Edge is implementation-based pricing, not a flat SaaS subscription. Typical engagements include a one-time implementation fee plus monthly platform and AI usage. Real deployments have cut total communications costs by up to 60%." },
      { q: "Does the AI sound robotic?", a: "No. DSX Edge uses modern conversational AI voices and is trained on your business scripts and tone. Most callers don't realize they're talking to AI." },
      { q: "Can DSX Edge book appointments directly into my calendar?", a: "Yes. DSX Edge integrates with Google Calendar, Microsoft 365, and most CRMs to book confirmed appointments without staff involvement." },
      { q: "What languages does DSX Edge support?", a: "English and Spanish out of the box. Additional languages can be added during implementation." },
      { q: "Does DSX Edge work 24/7?", a: "Yes. Once deployed, the AI answers every call, every hour, including nights, weekends, and holidays." },
      { q: "What happens if the AI can't help the caller?", a: "DSX Edge is configured with explicit escalation rules — calls route to a live person, voicemail, or callback queue based on your workflow." },
      { q: "Is DSX Edge HIPAA-compliant for medical offices?", a: "DSX Edge can be deployed in HIPAA-aware configurations. The underlying 3CX platform and DSX hosting at Citadel Campus support the controls required for healthcare workflows. Specific HIPAA compliance depends on your implementation scope — talk to DSX for a workflow audit." },
      { q: "Where is DSX Edge infrastructure hosted?", a: "DSX infrastructure is hosted at the Citadel Campus of Switch in Tahoe Reno, Nevada — one of the most advanced, secure, and renewable-powered data centers in the world." },
      { q: "Does DSX Edge integrate with my CRM?", a: "Yes. DSX Edge integrates with HubSpot, Salesforce, Pipedrive, Zoho, ServiceTitan, Jobber, Housecall Pro, and most modern CRMs via API." },
      { q: "Can I keep my existing phone number?", a: "Yes. Number porting is standard, with zero downtime planned into the cutover." },
      { q: "What's the difference between DSX Edge and a generic AI answering service?", a: "Generic AI services bolt on at the call. DSX Edge is implementation-led — we map your real workflow, integrate with your phone system and CRM, and train the AI on your business. It's 'AI built around your workflow,' not a one-size template." },
      { q: "What does 'Above the Cloud' mean?", a: "Cloud is infrastructure. DSX Edge is the intelligence layered on top of it — AI agents, workflow automation, and business integrations that go beyond ordinary cloud phone hosting." },
      { q: "Who do I contact to get started?", a: "Visit dsxedge.com/contact or email hello@dsxedge.com. Every engagement starts with a free workflow audit — no pressure, no obligation." },
    ];

    return [
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        url: abs(siteUrl, "/faq"),
        mainEntity: qas.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "QAPage",
        url: abs(siteUrl, "/faq"),
        mainEntity: qas.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
      breadcrumb(siteUrl, [ { name: "Home", path: "/" }, { name: "FAQ", path: "/faq" } ]),
    ];
  }

  return [];
}
