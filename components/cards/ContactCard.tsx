import { CSSProperties, ReactNode } from "react";

export type ContactCardProps = {
  href: string;
  icon: ReactNode;
  title: string;
  color: string;
};

export function ContactCard({ href, icon, title, color }: ContactCardProps) {
  return (
    <a
      href={href}
      style={{ "--icon-color": color } as CSSProperties}
      className="ContactTile h-20 w-[45%] max-w-[100px] md:w-[30%] border border-neutral-800 rounded-lg text-center flex flex-col items-center justify-center my-2 group hover:bg-neutral-800 hover:text-[var(--icon-color)]"
      target="_blank"
    >
      <p className="text-3xl">{icon}</p>
      <p className="text-md font-bold">{title}</p>
    </a>
  );
}
