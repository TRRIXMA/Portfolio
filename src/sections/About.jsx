import { pillars, profile, stats } from '../data.js';
import { Reveal, SectionHead } from '../components.jsx';

export default function About() {
  return (
    <section className="section" id="apropos">
      <SectionHead index="01" label="À propos">
        Une ingénieure <em>au croisement</em> du hardware, du logiciel et de la sécurité.
      </SectionHead>

      <div className="about-grid">
        <Reveal className="about-text">
          <p>
            En 5<sup>e</sup> année à l'ESEO Angers en <strong>Systèmes Embarqués &amp; Logiciel Cybersécurité</strong>,
            j'ai construit mon parcours au contact de l'industrie automobile : BMW, Stellantis, Renault, Hyliko.
          </p>
          <p>
            Ce qui me motive : comprendre un système de bout en bout, de la carte électronique jusqu'à
            l'utilisateur final — et le rendre fiable, sûr et agréable à utiliser.
          </p>
          <p className="traits mono">{profile.traits.join(' · ')}</p>
        </Reveal>

        <Reveal as="ul" className="stats">
          {stats.map(s => (
            <li key={s.label}>
              <span className="stat-num">{s.num}{s.unit && <small>{s.unit}</small>}</span>
              <span className="stat-label">{s.label}</span>
            </li>
          ))}
        </Reveal>
      </div>

      <div className="pillars">
        {pillars.map((p, i) => (
          <Reveal as="article" className="pillar" key={p.title}>
            <span className="pillar-icon mono">{String(i + 1).padStart(2, '0')}</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
