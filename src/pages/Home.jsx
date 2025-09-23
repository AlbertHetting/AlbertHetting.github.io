import QuickSummary from "../components/QuickSummary";
import Footer from "../components/Footer.jsx"

export default function Home() {

return (

<div>


<section className="upper">
  <video
    id="mainvideo"
    src="/videos/HomepageFinal3.mp4"
    autoPlay
    muted
    playsInline
    preload="metadata"
  />
</section>

<QuickSummary/>

  <div className="program-icons reveal stagger">
    <section className="CVsection">

    <h1>Want to know more?</h1>

  <a
    className="button"                              
    href={`${import.meta.env.BASE_URL}CVALBERTHETING2025V3.pdf`}
    download
  >
    Download CV
  </a>


    </section>
    </div>

  <Footer></Footer>


</div>


)
}





