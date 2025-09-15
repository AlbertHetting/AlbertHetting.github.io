import QuickSummary from "../components/QuickSummary";
import Footer from "../components/Footer.jsx"

export default function Home() {

return (

<div>


<section className="upper">
  <video
    id="mainvideo"
    src="/videos/HomepageFinal2.mp4"
    autoPlay
    muted
    playsInline
    preload="metadata"
  />
</section>

<QuickSummary/>


    <section className="CVsection">

    <h1>Want to know more?</h1>

  <a
    className="button"                              
    href={`${import.meta.env.BASE_URL}public/CVALBERTHETING2025.jpg`}
    download
  >
    Download CV
  </a>


    </section>

  <Footer></Footer>


</div>


)
}





