import { engagements, hobbies } from '../data.js';
import { Reveal, SectionHead } from '../components.jsx';

export default function Hobbies() {
  return (
    <section className="section" id="horscode">
      <SectionHead index="05" label="Hors du code">
        Ce qui me fait <em>vibrer</em> ailleurs.
      </SectionHead>

      <div className="hobbies">
        {hobbies.map(h => (
          <Reveal className="hobby glass" key={h.text}>
            <span className="hobby-num">{h.num}{h.unit && <small>{h.unit}</small>}</span>
            <p>{h.text}</p>
          </Reveal>
        ))}
      </div>
      <Reveal as="p" className="engagement mono">{engagements}</Reveal>
    </section>
  );
}
