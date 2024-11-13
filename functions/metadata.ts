import { HOST } from "@/constants";
import { Metadata } from "next";

export type MetadataProps = {
  title: string;
  description: string;
  img?: string;
};

export function staticMetadata({
  title,
  description,
  img = "/images/features.jpg",
}: MetadataProps): Metadata {
  const keywords = [
    "abundiko",
    "abundance ken-dickson",
    "software developer",
    "abundiko111",
    "developer",
    "website developer in nigeria",
    "mobile developer in nigeria",
    ...title.replace(/[\s\n]+/g, "").split(" "),
    ...description.replace(/[\s\n]+/g, "").split(" "),
  ];
  const buildImg = (img: string) =>
    img ? (img.startsWith("/") ? HOST + img : img) : "/images/banner.jpg";

  return {
    title,
    description,
    metadataBase: new URL(HOST),
    icons: [
      buildImg("/images/favicon.ico"),
      buildImg("/images/favicon.png"),
      buildImg("/images/icon.png"),
    ],
    // appleWebApp: {
    //   capable: true,
    //   title: "Phenom",
    //   startupImage: ["/images/banners/splash.png"],
    // },
    applicationName: "Phenom",
    keywords: keywords,
    // manifest: "/files/manifest.json",
    twitter: { title, description, images: [buildImg(img)] },
    openGraph: {
      title,
      description,
      images: [buildImg(img)],
      tags: keywords,
    },
  };
}
