import { education, skills } from '../data.js';
import { Reveal, SectionHead, Tags } from '../components.jsx';

export default function Skills() {
  return (
    <section className="section" id="competences">
      <SectionHead index="04" label="Compétences & formation">
        La <em>boîte à outils</em>.
      </SectionHead>

      <div className="skills">
        {skills.map(s => (
          <Reveal className="skill" key={s.group}>
            <h3 className="mono">{s.group}</h3>
            <Tags items={s.items} />
          </Reveal>
        ))}
      </div>

      <Reveal className="edu">
        <h3 className="edu-title mono">Formation</h3>
        <ul>
          {education.map(e => (
            <li key={e.title}>
              <span className="mono">{e.dates}</span>
              <strong>{e.title}</strong>
              <span>{e.school}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
