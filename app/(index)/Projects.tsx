import ProjectsList from "./Projects.list";
import ProjectsText from "./Projects.text";

export default function Projects() {
  return (
    <section id="PROJECTS" className="pt-14 relative" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="sr-only">
        Creative Projects - Web and Mobile Development Portfolio
      </h2>
      <div className="app-container">
        <ProjectsText />
      </div>
      <ProjectsList />
    </section>
  );
}
