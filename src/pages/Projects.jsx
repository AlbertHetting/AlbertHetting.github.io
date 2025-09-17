import { useState, useEffect } from "react";
import ProjectDisplay from "../components/Projectdisplay";
import "../components/Projects.css"
import Footer from "../components/Footer.jsx"



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
      <div>


        <section className="upper2">
        <video
          id="mainvideo2"
         src="/videos/ProjectFinal4.mp4"
         autoPlay
          muted
          playsInline
          preload="metadata"/>
        </section>


    <section id="Projects">
      {project.map((project) => (
        <div key={project.id}>
          <ProjectDisplay project={project} />
        </div>
      ))}
    </section>

        <Footer></Footer>

    </div>
  );
}
