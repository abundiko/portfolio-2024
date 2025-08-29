import { Project } from "@/data/projects";
import Image from "next/image";
import { useRef } from "react";
import { BsGithub } from "react-icons/bs";
import { GoLinkExternal } from "react-icons/go";
import PrimaryButton from "./PrimaryButton";

type Props = {
  project: Project;
};

export default function NewProjectCard(props: Props) {
  const { project } = props;
  const ref = useRef<HTMLDivElement>(null);
  const img = `/images/projects/${project.image}`;
  // useGSAP(() => {
  //   gsap.to(ref.current, {
  //     maxHeight: `700px`,
  //     scrollTrigger: {
  //       trigger: ref.current,
  //       start: "top 50%",
  //       end: "top 30%",
  //       scrub: true,
  //       invalidateOnRefresh: true,
  //       onLeave: () => {
  //         // schedule refresh safely after frame
  //         gsap.delayedCall(0.1, () =>
  //           requestAnimationFrame(() => {
  //             ScrollTrigger.refresh();
  //           })
  //         );
  //       },
  //     },
  //   });
  // });

  return (
    <div
      ref={ref}
      className="grid md:grid-cols-2 border-y border-gray-200 p-5 gap-4 md:gap-8 xl:p-10 md:p-8 overflow-hidden"
    >
      <div className="relative">
        <div className="relative w-full h-full overflow-hidden">
          {/* <Image
            height={100}
            width={100}
            src={img}
            alt={`Image of ${project.title}`}
            className=" blur-xl w-full h-full object-cover opacity-10"
          /> */}
          <Image
            height={600}
            width={600}
            src={img}
            alt={`Image of ${project.title}`}
            className=" relative left-0 top-0 w-full h-full object-contain border border-gray-200"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 text-gray-800">
        <h3 className="font-semibold text-2xl md:text-3xl">{project.title}</h3>
        <p className="max-md:text-sm text-gray-600">{project.description}</p>
        <div className="flex flex-wrap">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="border border-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className=" flex-1 pt-10 grid grid-cols-2 gap-4 items-end">
          {project.live && (
            <PrimaryButton
              href={project.live}
              icon={<GoLinkExternal />}
              title="View Website"
              blank
            />
          )}
          {project.github && (
            <PrimaryButton
              href={project.github}
              icon={<BsGithub />}
              title="View on GitHub"
              blank
            />
          )}
        </div>
      </div>
    </div>
  );
}
