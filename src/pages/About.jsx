import "../components/about.css"

export default function About() {

const withBase = (p="") => {
  const base = import.meta.env.BASE_URL || "/";
  return base + p.replace(/^public\//, "").replace(/^\/?/, "");
};


return(
    <section className="PortfolioPicCon">
        <div className="PortfolioPic">
        <img id="mainimage" src={withBase("videos/PortfolioPicture5.jpg")} alt="" />
        </div>
      </section>

    );

}