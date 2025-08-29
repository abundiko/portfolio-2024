import Link from "next/link";

export default function HeroNav() {
  return (
    <div className="absolute top-0 left-0 right-0 z-10 app-container flex justify-between py-6">
      <div className="flex gap-2 items-center py-2 rounded-3xl border border-gray-200 bg-white/10 backdrop-blur-lg p-4 drop-shadow-lg">
        <Link href="/" className="font-bold">
          abundiko
        </Link>
      </div>
      <div className="flex gap-4 md:gap-8 items-center py-2 rounded-3xl border border-gray-200 bg-white/10 backdrop-blur-lg p-4 drop-shadow-lg">
        {navLinks.map((link) => (
          <Link key={link.title} href={link.href} className="hover:underline">
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

const navLinks = [
  {
    title: "Contact",
    href: "#CONTACT",
  },
  {
    title: "About",
    href: "#ABOUT",
  },
  {
    title: "Portfolio",
    href: "#PROJECTS",
  },
];
