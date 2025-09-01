import { staticMetadata } from "@/functions/metadata";
import { Metadata } from "next";
import { Work_Sans, Bricolage_Grotesque } from "next/font/google";
const workSans = Work_Sans({ subsets: ["latin"] });
const bricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = staticMetadata({
  title:
    "Abundiko | Delivering responsive, performant websites and apps that users love.",
  description:
    "I've delivered pixel-perfect solutions for 40+ projects worldwide.",
  img: "/images/banner-new.png",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className={`antialiased ${workSans.className} ${bricolageGrotesque.className}`}
    >
      <body>{children}</body>
    </html>
  );
}
