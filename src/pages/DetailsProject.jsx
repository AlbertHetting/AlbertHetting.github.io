import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../components/detailproject.css";
import Footer from "../components/Footer.jsx";

// GH Pages–safe helper
const withBase = (p="") => {
  const base = import.meta.env.BASE_URL || "/";
  return base + p.replace(/^public\//, "").replace(/^\/?/, "");
};

export default function ProjectDetail() {


  const { id } = useParams();               // /projects/:id
  const [project, setProject] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await fetch(withBase("data/DetailProject.json"));
      const data = await res.json();
      const arr = Array.isArray(data) ? data : [data];
      setProject(arr.find(p => String(p.id) === String(id)) || null);
    })();
  }, [id]);

  if (!project) return <main className="project-detail">Loading…</main>;

  return (
   <main>
    <div>
      <section className="upperDetail">
        <img id="mainvideoDetail" src={withBase("videos/FrameVideo.jpg")} alt="" />
      </section>


<div className="detailwrapper">
      <section id="detail">
        <h1>{project.title}</h1>
        <h2> {project.description} </h2>
        <div className="line"></div>
        <h3> {project.descriptiondetail} </h3>
      </section>
</div>

    <section className="images">

        <img
        className="detailimage"
        src={withBase(project?.image)}
        alt={project?.description || ""}
        id={project ? `glow-${project.id}` : undefined}
      />

    <div className="loweroutcon">
    <div className="lowersectioncontainer">
        
        <div className="Aboutextcon">
        <h2>{project?.aboutproject}</h2>
        <div className="line"></div>
        <h2 id="gradetext">{project?.grade}</h2>
        </div>

        <div className="imagecontainer">   
         <img
        className="detailimage"
        src={withBase(project?.image2)}
        alt={project?.description || ""}
        id={project ? `glow-${project.id}` : undefined}
      />
      </div>
    </div>
    </div>

    </section>
    

      <Footer />
    </div>
    </main>
  );
}