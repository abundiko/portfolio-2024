import { DatabuddyAnalitics } from "@/components/analitics/DataBuddyAnalitics";
import { staticMetadata } from "@/functions/metadata";
import { Metadata } from "next";
import { HOST } from "@/constants";
import Head from "next/head";
import Script from "next/script";

export const metadata: Metadata = staticMetadata({
  title: "Abundiko - FullStack Developer | Responsive websites & apps",
  description:
    "I've delivered pixel-perfect solutions for over 40 projects, teams and startups worldwide.",
  img: "/images/banner-new.png",
  canonical: "/",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Abundiko",
      url: HOST,
      description:
        "FullStack Developer delivering responsive, performant websites and apps.",
      founder: {
        "@type": "Person",
        name: "Abundance Ken-Dickson",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: HOST },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What services does Abundiko offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FullStack web and mobile development, including responsive websites, performant web applications, and cross-platform mobile apps using React, Next.js, React Native, and modern technologies.",
          },
        },
        {
          "@type": "Question",
          name: "What technologies does Abundiko specialize in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "React, Next.js, React Native, TypeScript, Node.js, and a wide range of modern JavaScript frameworks for full-stack development.",
          },
        },
        {
          "@type": "Question",
          name: "How many projects has Abundiko completed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Over 40 projects delivered worldwide, ranging from frontend design systems to full-stack applications.",
          },
        },
        {
          "@type": "Question",
          name: "Is Abundiko available for new projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, always open to discussing new projects and creative ideas.",
          },
        },
        {
          "@type": "Question",
          name: "What is Abundiko's development approach?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Focusing on clean, efficient code, pixel-perfect design, and collaborating effectively with teams to deliver solutions that users love.",
          },
        },
      ],
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <Head> */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* </Head> */}
      {children}
      <DatabuddyAnalitics />
    </>
  );
}
