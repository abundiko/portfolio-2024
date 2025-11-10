import { DatabuddyAnalitics } from "@/components/analitics/DataBuddyAnalitics";
import { staticMetadata } from "@/functions/metadata";
import { Metadata } from "next";
import { Work_Sans, Bricolage_Grotesque } from "next/font/google";
const workSans = Work_Sans({ subsets: ["latin"] });
const bricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = staticMetadata({
  title:
    "Abundance Ken Dickson (Abundiko) - FullStack Developer | Delivering responsive, performant websites and apps that users love.",
  description:
    "I've delivered pixel-perfect solutions for over 40 projects, teams and startups worldwide.",
  img: "/images/banner-new.png",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className={`antialiased ${workSans.className} ${bricolageGrotesque.className}`}
    >
      <body>
        {children}
        <DatabuddyAnalitics />
      </body>
    </html>
  );
}
