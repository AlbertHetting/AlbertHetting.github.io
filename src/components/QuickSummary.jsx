import "./QuickSummary.css";
import Programs from "./Programs.jsx";
import WorkHistory from "./Companies.jsx";
import { useRevealOnScroll } from "../Hooks/ScrollAni.jsx";
import Highlights from "./BestWorks.jsx";



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


      <Highlights></Highlights>



        <div className="program-icons reveal stagger">
    <section className="AboutMeText"> 

      <h1>Who Am I?</h1>

      <p> My skills range from communications, project management & training to technical support, database administration and video production. <br></br> <br></br>

          My strongest attributes are: Discipline, focus, persistence, passion and consistency.  <br></br> <br></br>

          In digital workflows I always strive to create something better than my previous project.
      </p>

    </section>
    </div>


    </div>
  );
}
