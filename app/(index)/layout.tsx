'use client'

import { useGlobalState } from "@/state";
import { useMemo } from "react";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

const bauserif = localFont({
    src: "../../public/fonts/bauserif.ttf",
    variable: "--font-bauserif",
    weight: "100 900",
});
const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { pageIndex } = useGlobalState();
    const bgClass = useMemo(() => {
        if (pageIndex === 1) return "!bg-blue-300";
        if (pageIndex === 2) return "!bg-black";
        return '!bg-[#001]'
    }, [pageIndex])


    return (
        <html lang="en" className={`${bauserif.variable} ${inter.className} antialiased bg-[#001] ${bgClass} transition-colors duration-1000`}>
            <body className="h-screen"
            >
                {children}
            </body>
        </html>
    );
}
