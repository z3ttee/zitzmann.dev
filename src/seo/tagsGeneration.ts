import { META_SITE_URL } from "@/constants";
import { m } from "@/paraglide/messages";

export function generateMainTags() {
  return [
    { name: "description", content: m.meta_description() },
    { property: "og:site_name", content: m.meta_site_name() },
    { property: "og:url", content: META_SITE_URL },
    { property: "og:type", content: "website" },
    { property: "og:title", content: m.meta_title() },
    { property: "og:description", content: m.meta_description() },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: m.meta_title() },
    { name: "twitter:description", content: m.meta_description() },
  ];
}
