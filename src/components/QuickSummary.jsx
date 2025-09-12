import "./QuickSummary.css";
import { useEffect, useState } from "react";




export default function QuickSummary() {

      const [programs, setPrograms] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("/data/Programs.json"); // or your icons JSON
      const data = await response.json();
      setPrograms(data);
    }
    getData();
  }, []);





  return (
    <div>
    <h1 className="SummaryText">Quick Summary</h1>


    <section className="Statistics">

        <div className="Arbejde">
            <h1>Arbejds Historie</h1>
            <div className="line"></div>

            <div>


            </div>

        </div>

        <div className="Projekter">
            <h1>Projekter</h1>
            <div className="line"></div>






        </div>


    </section>

        <section className="Statistics2">
            <div className="program-icons">
                <h1>Programmer</h1>
                <div className="line"></div>


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
        </section>


    </div>
  );
}
