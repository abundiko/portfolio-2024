import Copy from "@/components/animation/Copy";
import ExperienceTile from "@/components/new/ExperienceTile";
import { EXPERIENCES } from "@/data/experiences";

export default function AboutExperience() {
  return (
    <div className="grid md:grid-cols-3 border border-gray-200">
      <div className="p-6">
        <Copy>
          <h2 className="font-bold text-4xl md:text-[4vw] leading-[1.1] uppercase text-gray-800">
            Work <br />
            Experience
          </h2>
        </Copy>
      </div>
      <div className="p-6 md:col-span-2 md:border-l border-gray-200 grid gap-4">
        {EXPERIENCES.map((exp, index) => (
          <ExperienceTile key={index} experience={exp} />
        ))}
      </div>
    </div>
  );
}
