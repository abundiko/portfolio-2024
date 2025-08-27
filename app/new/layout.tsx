import { Work_Sans, Bricolage_Grotesque } from "next/font/google";
const workSans = Work_Sans({ subsets: ["latin"] });
const bricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className={`antialiased ${workSans.className} ${bricolageGrotesque.className}`}
    >
      <body>{children}</body>
    </html>
  );
}
