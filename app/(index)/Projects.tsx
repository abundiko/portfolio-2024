import ProjectsList from "./Projects.list";
import ProjectsText from "./Projects.text";

export default function Projects() {
  return (
    <section id="PROJECTS" className="pt-14 relative">
      <div className="app-container">
        <ProjectsText />
      </div>
      <ProjectsList />
    </section>
  );
}
