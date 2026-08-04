import { Helmet } from "react-helmet-async";

import { siteConfig } from "@/config/site";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: siteConfig.name,

    jobTitle: siteConfig.title,

    image: siteConfig.avatar,

    url: siteConfig.url,

    email: siteConfig.email,

    sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.instagram],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
