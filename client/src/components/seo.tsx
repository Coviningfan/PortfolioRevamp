import { Helmet } from "react-helmet-async";
import { SITE, absoluteUrl } from "@/lib/site";
import { buildJsonLdForPath, metaForStaticPath } from "@shared/seo-meta";

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  keywords?: string[];
  /** Extra JSON-LD to merge with auto-generated static-route JSON-LD */
  jsonLd?: object | object[];
  /** If true, skip the registry-driven JSON-LD (use only `jsonLd`) */
  skipAutoJsonLd?: boolean;
}

export default function Seo({
  title,
  description,
  path = "/",
  image = SITE.defaultImage,
  imageAlt = `${SITE.name} — Above the Cloud. Into the Business.`,
  type = "website",
  noIndex = false,
  publishedTime,
  modifiedTime,
  author,
  keywords,
  jsonLd,
  skipAutoJsonLd = false,
}: SeoProps) {
  const registry = metaForStaticPath(path);
  const resolvedTitle = title ?? registry?.title;
  const resolvedDescription =
    description ?? registry?.description ?? SITE.defaultDescription;
  const resolvedKeywords = keywords ?? registry?.keywords;

  const fullTitle = resolvedTitle
    ? SITE.titleTemplate.replace("%s", resolvedTitle)
    : SITE.defaultTitle;
  const url = absoluteUrl(path);
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);

  const autoLd = skipAutoJsonLd ? [] : buildJsonLdForPath(path, SITE.domain);
  const extraLd = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  const ldArray = [...autoLd, ...extraLd];

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={resolvedDescription} />
      {resolvedKeywords && resolvedKeywords.length > 0 && (
        <meta name="keywords" content={resolvedKeywords.join(", ")} />
      )}
      <link rel="canonical" href={url} />
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
      )}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {imageUrl.toLowerCase().endsWith(".png") && (
        <meta property="og:image" content={imageUrl.replace(/\.png$/i, ".webp")} />
      )}
      {imageUrl.toLowerCase().endsWith(".png") && (
        <meta property="og:image:type" content="image/webp" />
      )}
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content={SITE.locale} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE.twitter} />
      <meta name="twitter:creator" content={SITE.twitter} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {ldArray.map((ld, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(ld).replace(/</g, "\\u003c")}
        </script>
      ))}
    </Helmet>
  );
}
