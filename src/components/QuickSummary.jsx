import "./QuickSummary.css";
import Programs from "./Programs.jsx";
import WorkHistory from "./Companies.jsx";
import { useRevealOnScroll } from "../Hooks/ScrollAni.jsx";
import Highlights from "./BestWorks.jsx";
import { useRevealOnScroll4 } from "../Hooks/ScrollAni3.jsx";

import Projects2 from "./Projects2.jsx";



export default function QuickSummary() {

useRevealOnScroll(); 
useRevealOnScroll4();


// bruges til at fixe src pathing, forslået af chatGPT
const withBase = (p="") => {
  const base = import.meta.env.BASE_URL || "/";
  return base + p.replace(/^public\//, "").replace(/^\/?/, "");
};


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
            <h2>7+</h2>

            <p> Completed school or work <br></br> projects 
            - check back to see 
            <br></br>this number increase!  
          
            
            </p>
            </div>
            </div>

        </div>

        <Programs></Programs>
    
    
    </section>
    </div>



          
        <div className="things reveal4 stagger">
        <div className="workheader">
            <h1>Work Experience</h1>
        </div>
        </div>

      <div className="things reveal4 stagger">
      <section className="detailedwork">

        <div className="wifinowdetails">
        <img id="wifinow" src={withBase("Icons/WiFiNOW.jpg")} alt="" />
        <h1>WiFi NOW</h1>
        <div className="line10"></div>
        <h2>I’ve been working at WiFi NOW for more than 3 years performing a variety of tasks including database management, webpage updates with wordpress, and more. I’ve contributed to almost every WWC event including recording and editing the video recordings for customers as well as helping with the production and backend management for our live webinars.</h2>
        <a href="https://wifinowglobal.com/">Visit</a>
        </div>


         <div className="skovgaarddetails">
        <img id="skovgaard" src={withBase("Icons/Skovgaard.jpg")} alt="" />
        <h1>Skovgaard & Damgaard</h1>
        <div className="line10"></div>
        <h2>Working at Skovgaard & Damgaard is my first official splash into the multimedia sector. My tasks include graphic design, wordpress updates, SoMe posts, and strategic development. </h2>
        <a href="https://skovgaard-damgaard.dk/en/">Visit</a>
        </div>


         <div className="lifdetails">
        <img id="lif" src={withBase("Icons/Lystrup.jpg")} alt="" />
        <h1>Lystrup Svømning</h1>
        <div className="line10"></div>
        <h2>I worked at Lystrup Swimming Club for a total of 7 years. During that time I’ve held almost every available position from a clerk to a manager. Most of my work was as a lifeguard and instructor where I studied and received certificates for both lifeguarding and swimming instruction.</h2>
        <a href="https://www.lystrupsvoemning.dk/">Visit</a>
        </div>

      </section>
      </div>
    
    
        <div className="things reveal4 stagger">
        <div className="workhistoryillustration">
      <img id="workhistoryline" src={withBase("Images/WorkHistory.png")} alt="" />
        </div>
       </div>
        

      <Highlights></Highlights>


        <Projects2></Projects2>

    <div className="program-icons reveal stagger">
    <section className="AboutMeText"> 

      <h1>Who Am I?</h1>

      <p> My skills range from communications, project management & training to technical support, database administration, & video production. 

          My strongest attributes are: Discipline, focus, persistence, passion, & consistency.

          In digital workflows I always strive to create something better than my previous project.
      </p>

    </section>
    </div>


    </div>
  );
}
