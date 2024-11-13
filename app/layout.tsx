import { Metadata } from "next";
import "./globals.css";
import { staticMetadata } from "@/functions/metadata";

export const metadata: Metadata = staticMetadata({
  title: "Abundiko - Software built to perfection",
  description:
    "We specialize in building custom software solutions for businesses of all sizes. We have a team of experienced developers who are experts in a variety of programming languages and technologies, including Python, JavaScript, React, and more. We work closely with our clients to understand their unique needs and goals, and we use our expertise to create software that is both functional and user-friendly. Whether you need a new website, a custom application, or a complex software system, we have the skills and experience to deliver a solution that meets your needs and exceeds your expectations.",
    img: "/images/banner.png",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
