import { CONTACT_INFO } from "@/data/contact";
import Link from "next/link";
import { CSSProperties } from "react";

export default function Footer() {
  return (
    <footer
      id="CONTACT"
     className="pt-28 pb-10 overflow-hidden app-container bg-gray-50 grid gap-4 md:gap-6">
      {/* <Copy> */}
        <h2 className="font-semibold text-3xl lg:text-3xl">
          Let&apos;s work <br />
          Together
        </h2>
      {/* </Copy> */}
      {/* <Copy> */}
        <p className="text-gray-500 font-medium text-lg md:text-xl w-10/12 max-w-[400px]">
          I&apos;m always open to discussing new projects and creative ideas.
        </p>
      {/* </Copy> */}
      <div className="grid grid-cols-3 md:grid-cols-6 max-w-[800px]">
        {CONTACT_INFO.map((contact, i) => (
          <Link
            href={contact.href}
            target="_blank"
            key={i}
            style={
              {
                "--color": contact.color,
              } as CSSProperties
            }
            className={`border border-gray-200 flex flex-col gap-3 p-6 justify-center items-center aspect-square text-3xl hover:bg-[var(--color)]`}
          >
            {contact.icon}
            <span className="font-medium text-lg">{contact.title}</span>
          </Link>
        ))}
      </div>
      <p className="text-gray-500 font-light text-sm ">
        copyright &copy; 2025
      </p>
      <div className="relative -bottom-14 md:-bottom-16 xl:-bottom-20">
        <p className="relative [text-shadow:0_0_2px_#555] text-gray-50 select-none text-5xl md:text-6xl xl:text-8xl font-bold leading-[-100px]">
          Abundiko
        </p>
      </div>
    </footer>
  );
}
