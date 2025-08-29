import Copy from "@/components/animation/Copy";
import { TECHNOLOGIES } from "@/data/technologies";
import Image from "next/image";

export default function AboutStack() {
  
  return (
    <div className="grid md:grid-cols-3 border border-gray-200">
      <div className="p-6">
        <Copy>
          <h2 className="font-bold text-4xl md:text-[4vw] leading-[1.1] uppercase text-gray-800">
            Tech. <br />Stack
          </h2>
        </Copy>
      </div>
      <div className=" md:col-span-2 md:border-l border-gray-200 grid grid-cols-3 lg:grid-cols-4">
        {TECHNOLOGIES.map((tech, i) => (
          <div
            key={i}
            className="flex justify-center group items-center flex-col gap-1 border border-gray-200 aspect-[7/6]"
          >
            <Image
              width={200}
              height={200}
              src={`/images/icons/${tech.img}`}
              alt={tech.title}
              loading="lazy"
              className="object-fit w-4/12 md:w-10/12 aspect-square max-w-20 group-hover:grayscale"
            />
            <p className="text-neutral-900 text-sm font-semibold text-center">
              {tech.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
