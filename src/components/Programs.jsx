import { useEffect, useState } from "react";
import "./QuickSummary.css";
import { useRevealOnScroll } from "../Hooks/ScrollAni.jsx";


export default function Programs() {

    useRevealOnScroll(); 



      const [programs, setPrograms] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("/data/Programs.json"); // Icons JSON
      const data = await response.json();
      setPrograms(data);
    }
    getData();
  }, []);




  return (
            <div className="program-icons">
                <h1>Software Tools</h1>
                <div className="line3"></div>


            <div className="program-icons reveal stagger">
            <div className="ProgramRow">
            {programs.map((program) => {
            const src =
            typeof program.image === "string"
            ? program.image.replace(/^public\//, "/")
            : "";

            if (!src) return null; // skip if missing

            return (
                <div key={program.id} className="program-icon">
            <img src={src} alt="" loading="lazy" />
            </div>
                );
            })}
            </div>
            </div>
            </div>
  );
}
