"use client";

import { useState } from "react";
import ProjectsTabs from "./Projects.tabs";
import { Project, PROJECTS } from "@/data/projects";
import NewProjectCard from "@/components/new/NewProjectCard";

const groups: Record<number, Project["type"][number]> = {
  1: "web",
  2: "app",
};

export default function ProjectsList() {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <ProjectsTabs tab={tab} setTab={setTab} />
      <div className="grid mt-8">
        {PROJECTS.filter(
          (pr) => pr.type.includes(groups[tab]) || tab === 0
        ).map((prj, i) => (
          <NewProjectCard project={prj} key={i} />
        ))}
      </div>
    </div>
  );
}
