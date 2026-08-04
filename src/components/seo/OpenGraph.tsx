import { Helmet } from "react-helmet-async";

import { seoConfig } from "@/config/seo";

interface Props {
  title?: string;
  description?: string;
}

export default function OpenGraph({ title, description }: Props) {
  const pageTitle = title
    ? seoConfig.titleTemplate.replace("%s", title)
    : seoConfig.defaultTitle;

  return (
    <Helmet>
      <meta property="og:type" content="website" />

      <meta property="og:title" content={pageTitle} />

      <meta
        property="og:description"
        content={description ?? seoConfig.description}
      />

      <meta property="og:image" content={seoConfig.image} />
    </Helmet>
  );
}
