import { useEffect, useState } from 'react';

const links = [
  { href: '#apropos', label: 'À propos' },
  { href: '#experiences', label: 'Expériences' },
  { href: '#projets', label: 'Projets' },
  { href: '#competences', label: 'Compétences' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#top" className="logo" aria-label="Accueil">
        <span className="logo-mark">ml<i>g</i></span>
      </a>
      <nav className={`nav-links ${open ? 'open' : ''}`}>
        {links.map(l => <a key={l.href} href={l.href} onClick={close}>{l.label}</a>)}
        <a href="#contact" className="nav-cta" onClick={close}>Me contacter</a>
      </nav>
      <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(o => !o)}>
        <span></span><span></span>
      </button>
    </header>
  );
}
