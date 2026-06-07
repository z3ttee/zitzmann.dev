import { META_SITE_URL, SOCIAL_EMAIL, SOCIAL_GITHUB_LINK, SOCIAL_LINKEDIN_LINK } from "@/constants";

export const RICH_RESULT_PERSON = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Cedric Zitzmann",
  url: META_SITE_URL,
  email: SOCIAL_EMAIL,
  jobTitle: "Full-Stack Software Engineer",
  sameAs: [SOCIAL_LINKEDIN_LINK, SOCIAL_GITHUB_LINK],
};

export const RICH_RESULT_PROFESSIONAL_SERVICE = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Cedric Zitzmann - Full-Stack Software Development",
  url: META_SITE_URL,
  email: SOCIAL_EMAIL,
  description:
    "Full-stack software development specializing in TypeScript, React, and modern web technologies. Available for projects across the DACH region.",
  areaServed: ["DE", "AT", "CH"],
  founder: { "@type": "Person", name: "Cedric Zitzmann" },
};
