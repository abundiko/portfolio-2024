import { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Bad Decisions Developers: We build cool shit",
  description: "A passionate team of developers building innovative and cutting-edge web applications.",
  openGraph: {
    images: "https://bad-dd.vercel.app/images/banner.png"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
