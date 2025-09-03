import { useState, useEffect } from "react";
import ProjectDisplay from "../components/Projectdisplay";
import { NavLink } from "react-router";

export default function Projects() {
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
    <section id="clients">
      <div className="headline-container">
        <h2>Clients</h2>
      </div>
      {project.map((project) => (
        <div key={project.id}>
          <ProjectDisplay project={project} />
          <NavLink to={`/projects/${project.id}`}>Se detaljer</NavLink>
        </div>
      ))}
    </section>
  );
}
