import "./QuickSummary.css";
import Programs from "./Programs.jsx";
import WorkHistory from "./Companies.jsx";
import { useRevealOnScroll } from "../Hooks/ScrollAni.jsx";



export default function QuickSummary() {

useRevealOnScroll(); 


  return (
    <div>
    <h1 className="SummaryText">Quick Summary</h1>

    <div className="StatisticsCon">
    <section className="Statistics">

        <section className="WotkHistory">

            <WorkHistory></WorkHistory>

        </section>


        <div className="Projekter">
            <h1>Projects</h1>
            <div className="line2"></div>
            <div className="program-icons reveal stagger">
            <div className="ProjectText">
            <h2>6+</h2>

            <p>Projects that are completed <br></br>
            related to school or work, Check <br></br>
            back to see this number increase!
            
            </p>
            </div>
            </div>

        </div>

        <Programs></Programs>
    
    
    </section>
    </div>

        
 

    </div>
  );
}
