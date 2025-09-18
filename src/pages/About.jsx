import "../components/about.css"
import Footer from "../components/Footer.jsx"
import { useRevealOnScroll4 } from "../Hooks/ScrollAni3.jsx";

export default function About() {

useRevealOnScroll4(); 


// bruges til at fixe src pathing, forslået af chatGPT
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

              <div id="personalinfo">

                <h1>Personal Info</h1>
                <div className="line10"></div>

                <h3>Age: 22 Years old</h3>
                <h3>Languages: Danish - native & English</h3>
                <h3>Address: Lystrup 8520, Hedeskovvej 9</h3>
                <h3>Education: <br></br> STX Egaa Gymnasium - Math/Physics + English <br></br><br></br> Business Academy Aarhus - Multimedia Designer</h3>
                <h3>Email: Albert@hetting.dk</h3>

              </div>

              <div id="aboutmetext2">
                  <h1>About Me</h1>
                  <div className="line10"></div>
                  <p> Hi! My name is Albert, and I’m currently studying multimedia design at Business Academy Aarhus. I’ve been in a wide variety of jobs ranging from service & communications to technical support & database management. My total time in the workforce will soon be 8 years. I excel at creating graphics - in both 2D & 3D - and incorporating them into my workflows for both webpages and video editing. Personal interests are fitness, gaming, animation, and drawing.</p>
              </div>

              <div id="corevalues">
                <h1>Core Values</h1>
                <div className="line10"></div>
                  <p> I believe that digital workflows should always challenge what you can already do. In my view, working seamlessly between software and code is what makes or breaks a project. I am consistent in my work and practice, and that probably stems from my 7 years in the gym where consistency is the key to achieving results. Equally important is the passion to make your next project an amazing experience for both you and your users. </p>
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
          <p>Five years of Adobe Suite experience including After Effects, Premiere Pro, and Photoshop & Illustrator. This summer I also started using Blender to take my 3D skills to the next level. Go to the projects tab to view what software I’ve used for each of my projects.</p>
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
        <h2>I worked at Lystrup Svømning for around 7 years total. During that time I’ve been in almost every position they offered from a clerk kid to a manager. However most of my work was as a lifeguard and instructor where I studied and received certificates for both lifeguarding and Instructing.</h2>
        <a href="https://www.lystrupsvoemning.dk/">Visit</a>
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