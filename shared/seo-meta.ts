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
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Answer — AI Voice Reception", description: "AI answers every customer call, 24/7, in your brand voice." } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Qualify — Lead Qualification & Routing", description: "AI asks the right questions, qualifies the lead, routes to the right person or workflow." } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Act — Booking, Follow-up & CRM Sync", description: "AI books appointments, sends confirmations, and updates your CRM automatically." } },
          ],
        },
      },
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

  return [];
}
