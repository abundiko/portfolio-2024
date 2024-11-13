import { Experience } from "@/data/experiences";

export default function ExperienceCard({ at, role, year }: Experience) {
  return (
    <div className="border-l border-neutral-400 p-1 flex flex-col flex-shrink-0">
      <h4 className="text-neutral-300">{role}</h4>
      <h5 className="text-neutral-400">@{at}</h5>
      <p className="text-neutral-400 pt-8">{year}</p>
    </div>
  );
}
