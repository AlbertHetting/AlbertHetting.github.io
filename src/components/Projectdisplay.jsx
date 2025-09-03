export default function ProjectDisplay({ project }) {
  return (
    <section className="client-row">
      <article>
        <h3>{project.name}</h3>
        <h4>{project.subtitle}</h4>
        <p>{project.body}</p>
        <section className="client-links">
          {project.links.map((link, index) => (
            <a
              key={`${project.id}-${index}`}
              href={link.url}
              rel="noreferrer"
              target="_blank"
            >
              {link.text} <i className="ion-ios-arrow-forward"></i>
              <i className="ion-ios-arrow-forward"></i>{" "}
            </a>
          ))}
        </section>
      </article>
      <figure>
        <img src={project.image} alt="House of Vincent" />
      </figure>
    </section>
  );
}
