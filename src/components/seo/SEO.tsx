import { Helmet } from "react-helmet-async";

import { seoConfig } from "@/config/seo";

interface SEOProps {
  title?: string;
  description?: string;
}

export default function SEO({ title, description }: SEOProps) {
  const pageTitle = title
    ? seoConfig.titleTemplate.replace("%s", title)
    : seoConfig.defaultTitle;

  return (
    <Helmet>
      <html lang={seoConfig.language} />

      <title>{pageTitle}</title>

      <meta name="description" content={description ?? seoConfig.description} />

      <meta name="keywords" content={seoConfig.keywords.join(", ")} />

      <meta name="author" content={seoConfig.author} />

      <meta name="robots" content={seoConfig.robots} />
    </Helmet>
  );
}
