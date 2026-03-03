const DEFAULT_SITE_URL = "https://www.red-arrow.io";

export function getSiteUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;

  return siteUrl.replace(/\/$/, "");
}
