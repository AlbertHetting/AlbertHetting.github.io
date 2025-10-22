import "./Projects2.css";
import { useState, useEffect } from "react";
import ProjectDisplay from "./Projectdisplay";

export default function Projects2() {
  const [project, setProjects] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("/data/projects.json");
      const data = await response.json();
      setProjects(data);
    }
    getData();
  }, []);
  return (
      <div>

        <h1 id="ProjectText">Projects</h1>

        <section id="Projects2">
      {project.map((project) => (
        <div key={project.id}>
          <ProjectDisplay project={project} />
        </div>
      ))}
        </section>

    </div>
  );
}
