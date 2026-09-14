import { profile } from '../data.js';

export default function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <span className="kicker mono">06 — Contact</span>
        <h2 className="contact-title">Construisons <em>la suite</em><br />ensemble.</h2>
        <p className="contact-lead">
          Je recherche un stage de fin d'études de 6 mois à partir de fin janvier 2027,
          en systèmes embarqués, logiciel ou cybersécurité. {profile.location}
        </p>
        <a className="contact-mail" href={`mailto:${profile.email}`}>
          {profile.email} <span aria-hidden="true">↗</span>
        </a>
        <div className="contact-links mono">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href={profile.cv} target="_blank" rel="noopener noreferrer">Télécharger le CV ↗</a>
        </div>
      </section>

      <footer className="footer mono">
        <span>© {new Date().getFullYear()} {profile.firstName} {profile.lastName}</span>
        <span>Conçu &amp; codé avec soin</span>
      </footer>
    </>
  );
}
