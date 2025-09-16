import { useEffect, useState } from "react";
import "./QuickSummary.css";
import { useRevealOnScroll } from "../Hooks/ScrollAni.jsx";


export default function Highlights(){  


 useRevealOnScroll(); 


          const [highlights, setHighlights] = useState([]);
    
      useEffect(() => {
        async function getData() {
          const response = await fetch("/data/Highlights.json"); 
          const data = await response.json();
          setHighlights(data);
        }
        getData();
      }, []);
    


    return(

    <div className="WorksContainer">

        <div className="WorksText">
            <h1>Highlighted Work</h1>
        </div>

            <div className="program-icons reveal stagger">
            <div className="WorksGrid">
            {highlights.map((highlights) => {
            const src =
            typeof highlights.image === "string"
            ? highlights.image.replace(/^public\//, "/")
            : "";

            if (!src) return null; 

            return (
                <div key={highlights.id} className="WorksIcon">
            <img src={src} alt="" loading="lazy" />
            </div>
                );
            })}
            </div>
            </div>

    </div>

    )

    
 }