const base = import.meta.env.BASE_URL || "/";
const srcFromPublic = (p) => (typeof p === "string" ? p.replace(/^public\//, base) : "");
import { useRevealOnScroll2 } from "../Hooks/ScrollAni2.jsx";


export default function ProjectDisplay({ project }) {

useRevealOnScroll2(); 


const withBase = (p) => {
  const base = import.meta.env.BASE_URL || "/"; // e.g. "/your-repo/" on GH Pages
  if (!p) return "";
  if (p.startsWith("public/")) return base + p.slice(7);          // "public/Projects/x.jpg" -> "/your-repo/Projects/x.jpg"
  if (p.startsWith("/")) return base === "/" ? p : base + p.slice(1); // "/Projects/x.jpg" -> "/your-repo/Projects/x.jpg"
  return base + p;                                                 // "Projects/x.jpg" -> "/your-repo/Projects/x.jpg"
};



  return (
    <div className="project-container">
      <div className="Thumbnail reveal2 stagger">
    <section className="project-row">
      <article>
        <h3>{project.title}</h3>
        <div className="line"></div>
        <h2>{project.description}</h2>
      </article>
      <figure>


       <img
        className="projectimage"
        src={withBase(project?.image)}
        alt={project?.description || ""}
        id={project ? `glow-${project.id}` : undefined}
      />

      </figure>


    {/* app icons (array of image URLs) */}
      {Array.isArray(project.appIcons) && project.appIcons.length > 0 && (
        <div className="project-apps" aria-label="Apps used">
          {project.appIcons.map((iconSrc, i) => (
            <li key={`${project.id}-app-${i}`} className="project-app">
              <img src={srcFromPublic(iconSrc)} alt="" loading="lazy" />
            </li>
          ))}
        </div>
      )}
    </section>
    </div>
    </div>
  );
}
