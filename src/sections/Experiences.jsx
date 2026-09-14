import { experiences } from '../data.js';
import { Reveal, SectionHead, Tags } from '../components.jsx';

export default function Experiences() {
  return (
    <section className="section section-dark" id="experiences">
      <SectionHead index="02" label="Expériences">
        Quatre stages, <em>une même route</em> : l'automobile.
      </SectionHead>

      <ol className="timeline">
        {experiences.map(xp => (
          <Reveal as="li" className="xp" key={xp.company}>
            <div className="xp-meta mono">
              <span>{xp.dates}</span>
              <span className="xp-place">{xp.place}</span>
            </div>
            <div className="xp-body">
              <h3>{xp.company}</h3>
              <p className="xp-role">{xp.role}</p>
              <p>{xp.text}</p>
              <Tags items={xp.tags} />
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
