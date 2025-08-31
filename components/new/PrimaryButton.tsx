import Link from "next/link";

type PrimaryButtonProps = {
  icon: React.ReactNode;
  title: string;
  href?: string;
  blank?: boolean;
  download?: boolean;
};

export default function PrimaryButton({
  icon,
  title,
  href,
  blank,
  download,
}: PrimaryButtonProps) {
  return (
    <Link
      href={href ?? "#"}
      target={blank ? "_blank" : undefined}
      download={download}
      className="group bg-white text-gray-800 font-semibold p-2 rounded-[0px] flex gap-2 items-center border border-new-primary overflow-hidden"
    >
      <div className="rounded-[0px] aspect-square inline-flex justify-center transition-all duration-500 items-center bg-new-primary p-3 text-white shadow-[0_0_0_0px_rgba(19,69,253,1)] group-hover:shadow-[0_0_0_400px_rgba(19,69,253,1)]">
        {icon}
      </div>
      <p className="relative leading-0 overflow-hidden pr-3 h-fit">
        <span className="opacity-0">{title}</span>
        <span className="absolute bottom-0 left-0 select-none group-hover:bottom-full group-hover:opacity-0 transition-all duration-500">
          {title}
        </span>
        <span className="absolute -bottom-full text-white left-0 select-none opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-500">
          {title}
        </span>
      </p>
    </Link>
  );
}
