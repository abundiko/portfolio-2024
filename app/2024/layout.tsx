"use client";

import { useGlobalState } from "@/state";
import { useMemo } from "react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { pageIndex } = useGlobalState();
  const bgClass = useMemo(() => {
    if (pageIndex === 1) return "!bg-blue-300";
    if (pageIndex === 2) return "!bg-black";
    return "!bg-[#efefef]";
  }, [pageIndex]);

  return (
    <html
      lang="en"
      className={`${inter.className} antialiased ${bgClass} transition-colors duration-1000`}
    >
      <body>{children}</body>
    </html>
  );
}
