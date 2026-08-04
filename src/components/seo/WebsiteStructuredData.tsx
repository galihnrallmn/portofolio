import { Helmet } from "react-helmet-async";

import { siteConfig } from "@/config/site";

export default function WebsiteStructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "WebSite",

    name: siteConfig.name,

    url: siteConfig.url,

    author: {
      "@type": "Person",

      name: siteConfig.name,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
