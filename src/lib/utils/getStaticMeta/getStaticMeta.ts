import { Metadata } from "next";

import { SEO } from "@lib/constants";

const getStaticMeta = (): Metadata => ({
  title: SEO.TITLE,
  description: SEO.DESCRIPTION,
  keywords: "",
  creator: "",

  openGraph: {
    type: "website",
    title: SEO.TITLE,
    siteName: SEO.TITLE,
    description: SEO.DESCRIPTION,
    images: "",
    url: "",
  },

  twitter: {
    card: "summary",
    title: SEO.TITLE,
    description: SEO.DESCRIPTION,
    images: "",
    creator: "",
  },
});

export default getStaticMeta;
