export const SITE = {
  name: "DSX Edge",
  legalName: "DSX",
  domain: import.meta.env.VITE_SITE_URL || "https://dsxedge.com",
  defaultTitle: "DSX Edge — Above the Cloud. Into the Business.",
  titleTemplate: "%s | DSX Edge",
  defaultDescription:
    "DSX Edge brings 12+ years of business communications expertise together with practical AI. We answer, qualify, and act on every customer call — so your phone system actually works.",
  defaultImage: "/og-image.png",
  twitter: "@dsxedge",
  locale: "en_US",
  phone: "+1-000-000-0000",
  email: "hello@dsxedge.com",
  founded: "2013",
  address: {
    streetAddress: "",
    addressLocality: "San Diego",
    addressRegion: "CA",
    postalCode: "",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.linkedin.com/company/dsx-edge",
  ],
  areaServed: ["US", "MX", "CA"],
};

export const absoluteUrl = (path: string = "/") => {
  const base = SITE.domain.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
};
