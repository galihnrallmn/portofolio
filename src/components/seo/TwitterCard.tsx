import { Helmet } from "react-helmet-async";

import { seoConfig } from "@/config/seo";

interface Props {
  title?: string;
  description?: string;
}

export default function TwitterCard({ title, description }: Props) {
  const pageTitle = title
    ? seoConfig.titleTemplate.replace("%s", title)
    : seoConfig.defaultTitle;

  return (
    <Helmet>
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={pageTitle} />

      <meta
        name="twitter:description"
        content={description ?? seoConfig.description}
      />

      <meta name="twitter:image" content={seoConfig.image} />
    </Helmet>
  );
}
