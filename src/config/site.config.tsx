import { Metadata } from "next";
import { LAYOUT_OPTIONS } from "@/config/enums";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";

enum MODE {
  DARK = "dark",
  LIGHT = "light",
}

export const siteConfig = {
  title: "Aayushi Singh github page",
  description: `This is Aayushi Singh Github page for all the projects. I will keep on adding everything on this page.`,
  // logo: logoImg,
  // icon: logoIconImg,
  mode: MODE.LIGHT,
  layout: LAYOUT_OPTIONS.HYDROGEN,
  // TODO: favicon
};

export const metaObject = (
  title?: string,
  openGraph?: OpenGraph,
  description: string = siteConfig.description
): Metadata => {
  return {
    title: title ? `${title} - Aayushi Singh github Page` : siteConfig.title,
    description,
    openGraph: openGraph ?? {
      title: title ? `${title} - Aayushi Singh github Page` : title,
      description,
      url: "https://isomorphic-furyroad.vercel.app",
      siteName: "Aayushi Singh github Page", // https://developers.google.com/search/docs/appearance/site-names
      images: {
        url: "",
        width: 1200,
        height: 630,
      },
      locale: "en_US",
      type: "website",
    },
  };
};
