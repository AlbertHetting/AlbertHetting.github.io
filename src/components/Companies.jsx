import { useEffect, useState } from "react";
import "./QuickSummary.css";
import { useRevealOnScroll } from "../Hooks/ScrollAni.jsx";


export default function WorkHistory() {


    useRevealOnScroll(); 

  const [Companies, setCompanies] = useState([]);
   
  useEffect(() => {
    async function getData() {
      const response = await fetch("/data/WorkHistory.json");
      const data = await response.json();
      setCompanies(data);
    }
    getData();
  }, []);



  return (
    <div className="Arbejde">
            <h1>Work History</h1>
            <div className="line"></div>

            <div className="program-icons reveal stagger">
            <div className="arbejdsinfo">
            
            <div className="WorkText">
            <h2>8+</h2>
            <h3>Years</h3>
            </div>

            {Companies.map((Companies) => {
            const src =
            typeof Companies.image === "string"
            ? Companies.image.replace(/^public\//, "/")
            : "";

            if (!src) return null; 

            return (
                <div key={Companies.id} className="Companies">
            <img src={src} alt="" loading="lazy" />
            </div>
                );
            })}



        </div>
            </div>

            <div>


            </div>
        </div>
  );
}

