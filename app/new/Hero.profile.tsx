import Image from "next/image";

export default function HeroProfile() {
  return (
    <div className="flex gap-2 items-center py-4 rounded-xl bg-white/10 backdrop-blur-lg p-4 drop-shadow-lg mx-auto">
      <Image
        height={100}
        width={100}
        src="/images/new/me.png"
        alt="Abundance Ken-Dickson avatar"
        className="size-14 rounded-full overflow-hidden"
      />
      <div className="flex flex-col">
        <p className="font-semibold text-lg md:text-xl">Abundance Ken-Dickson</p>
        <span className=" text-gray-500">FullStack Developer</span>
      </div>
    </div>
  );
}
