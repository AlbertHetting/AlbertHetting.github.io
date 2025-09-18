import "../components/about.css"
import Footer from "../components/Footer.jsx"
import { useRevealOnScroll4 } from "../Hooks/ScrollAni3.jsx";

export default function About() {

useRevealOnScroll4(); 

const withBase = (p="") => {
  const base = import.meta.env.BASE_URL || "/";
  return base + p.replace(/^public\//, "").replace(/^\/?/, "");
};


return(
  <div>
    <section className="PortfolioPicCon">
        <div className="PortfolioPic">
        <img id="mainimage" src={withBase("videos/PortfolioPicture5.jpg")} alt="" />
        </div>
      </section>



        <section className="aboutmedetail">

          <div className="things reveal4 stagger">

          <div className="aboutmepart1">

              <img id="" src={withBase("Images/Me3.jpg")} alt="" />

              <div id="aboutmetext2">
                  <h1>About Me</h1>
                  <div className="line10"></div>
                  <p> Hi, my name is Albert, I’m currently studying multimedia design at Aarhus Erhvervsakademi. I’ve been in a diverse assortment of jobs ranging from service & communication to technical support & database manager. My total time in the workforce will soon be 8 years. I excel at creating graphics, in both 2D & 3D and incorporating them into my workflows for both webpages and video editing. 
                  Personal interests are: Fitness, Gaming, Animation and Drawing.</p>
              </div>

              <div id="corevalues">
                <h1>Core Values</h1>
                <div className="line10"></div>
                  <p> I’ve been working at WiFi NOW for a bit more than 3 years, doing several tasks. Most of my work is database management & updating several webpages through wordpress when needed. I attend almost every WWC event recording and editing the footage for our customers as well as helping with the backend on our live webinars. </p>

              </div>
              </div>

          </div>
        </section>







        <section className="skills">

          <div className="things reveal4 stagger">
          <div>
          <h1> Software </h1>
          </div>
          </div>

          <div className="things reveal4 stagger">
          <div id="linecon">
          <div className="line11"></div>
          </div>
          </div>

          <div className="skillscon">

            <div className="softwarecon">

              <div className="things reveal4 stagger">

            <div className="software">
              <img src={withBase("Icons/AfterEffects.png")} alt="" />
              <img src={withBase("Icons/Blender.png")} alt="" />
              <img src={withBase("Icons/Illustrator.png")} alt="" />
              <img src={withBase("Icons/Procreate.png")} alt="" />
              <img src={withBase("Icons/LightRoom.png")} alt="" />
              <img src={withBase("Icons/Photoshop.png")} alt="" />
              <img src={withBase("Icons/PremierePro.png")} alt="" />
              <img src={withBase("Icons/VSCode.png")} alt="" />
            </div>

            </div>
            </div>
            <div className="things reveal4 stagger">
          <div>
          <p>I have been using the Adobe Suite for more than 5 years, in that time I’ve mostly used After Effects, Premiere Pro, Photoshop & Illustrator. This summer I also started using Blender to take my skills to the next level. You can go to the projects tab to see what software I’ve used for each of my projects.</p>
          </div>
          </div>
          </div>
        </section>





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
        <h2>I’ve been working at WiFi NOW for a bit more than 3 years, doing several tasks. Most of my work is database management & updating several webpages through wordpress when needed. I attend almost every WWC event recording and editing the footage for our customers as well as helping with the backend on our live webinars.</h2>
        </div>


         <div className="skovgaarddetails">
        <img id="skovgaard" src={withBase("Icons/Skovgaard.jpg")} alt="" />
        <h1>Skovgaard & Damgaard</h1>
        <div className="line10"></div>
        <h2>I’ve worked at Skovgaard & Damgaard for a few months, and during that time I've made my first official splash into the multimedia sector. My tasks include graphic design, wordpress updates, SoMe posts and strategic development. </h2>
        </div>


         <div className="lifdetails">
        <img id="lif" src={withBase("Icons/Lystrup.jpg")} alt="" />
        <h1>Lystrup Svømning</h1>
        <div className="line10"></div>
        <h2>I worked at Lystrup Svømning for around 7 years total. During that time I’ve been in almost every position they offered from a clerk kid to a manager. However most of my work was as a lifeguard and instructor where I studied and received certificates for both lifeguarding and Instructing.</h2>
        </div>

      </section>
      </div>
    
    
    <div className="things reveal4 stagger">
    <div className="workhistoryillustration">
      <img id="workhistoryline" src={withBase("Images/WorkHistory.png")} alt="" />
    </div>
    </div>
  <Footer></Footer>

  </div>
    );

}