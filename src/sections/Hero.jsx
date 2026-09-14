import { profile, techMarquee } from '../data.js';

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-status mono">
          <span className="dot"></span> {profile.status}
        </div>

        <h1 className="hero-title">
          <span className="line">{profile.firstName}</span>
          <span className="line">{profile.lastName}<span className="accent">.</span></span>
        </h1>

        <div className="hero-bottom">
          <p className="hero-lead">
            Ingénieure <em>systèmes embarqués</em>, logiciel &amp; cybersécurité.
            Du microcontrôleur jusqu'à l'interface — je conçois des systèmes
            qui marchent, et que les gens ont envie d'utiliser.
          </p>
          <div className="hero-actions">
            <a href="#experiences" className="btn btn-primary">Voir mon parcours <span aria-hidden="true">↓</span></a>
            <a href="#contact" className="btn btn-ghost">Me contacter</a>
          </div>
        </div>

        <svg className="hero-trace" viewBox="0 0 600 600" aria-hidden="true">
          <path className="trace" d="M40 560 V420 H200 V300 H340 V160 H560" />
          <path className="trace t2" d="M40 480 H120 V360 H260 V240 H420 V60" />
          <path className="trace t3" d="M120 600 V520 H300 V400 H480 V220 H600" />
          <circle cx="560" cy="160" r="7" className="node" />
          <circle cx="420" cy="60" r="7" className="node" />
          <circle cx="600" cy="220" r="7" className="node" />
          <rect x="316" y="276" width="48" height="48" rx="6" className="chip" />
        </svg>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track mono">
          {[...techMarquee, ...techMarquee].map((t, i) => <span key={i}>{t}</span>)}
        </div>
      </div>
    </>
  );
}
