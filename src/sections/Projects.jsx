import { projects } from '../data.js';
import { Reveal, SectionHead, Tags } from '../components.jsx';

export default function Projects() {
  return (
    <section className="section" id="projets">
      <SectionHead index="03" label="Projets">
        Des projets <em>concrets</em>, du circuit analogique à l'appli web.
      </SectionHead>

      <div className="projects">
        {projects.map(p => (
          <Reveal as="article" className={`project glass ${p.featured ? 'project-lg' : ''}`} key={p.title}>
            <div className="project-top mono"><span>{p.context}</span><span>{p.kind}</span></div>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <Tags items={p.tags} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
