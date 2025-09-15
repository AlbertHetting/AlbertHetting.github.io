import QuickSummary from "../components/QuickSummary";

export default function Home() {

return (

<div>


<section className="upper">
  <video
    id="mainvideo"
    src="/videos/HomepageFINAL.mp4"
    autoPlay
    muted
    playsInline
    preload="metadata"
  />
</section>

<QuickSummary/>


    <section className="CVsection">

    <h1>Want to know more?</h1>

    <button>
      Download CV
    </button>


    </section>


</div>


)
}





