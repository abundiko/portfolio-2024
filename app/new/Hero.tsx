import PrimaryButton from "@/components/new/PrimaryButton";
import HeroProfile from "./Hero.profile";
import HeroText from "./Hero.text";
import { BsLayoutTextSidebarReverse, BsGrid3X3Gap  } from "react-icons/bs";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute w-full h-full bg-[url(/images/noise.jpg)] bg-cover animate-spin bg-no-repeat [animation-duration:3s] scale-[3]"></div>
      <div className="absolute w-full h-full bg-[radial-gradient(white,#ffffff88)]"></div>
      <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_top,#ffffff00,#ffffffcc,white)]"></div>
      <div className="absolute w-full h-full bg-[url(/images/border.png)] [background-size:20px] opacity-20 "></div>
      <div className="relative bg-gradient-to-t from-white/90 to-transparent">
        <div className="app-container pt-40 pb-32">
          <div className="w-full mx-auto max-w-[800px] flex flex-col gap-8">
            <HeroProfile />
            <HeroText />
            <div className="grid grid-cols-2 sm:flex gap-4 justify-center items-center">
              <PrimaryButton
                icon={<BsLayoutTextSidebarReverse />}
                title="My Resume"
              />
              <PrimaryButton
                icon={<BsGrid3X3Gap  />}
                title="My Projects"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
