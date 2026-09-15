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
        <svg className="logo-mark" viewBox="0 0 120 120" width="44" height="44" role="img" aria-label="MLG — Mathilde Le Goff">
          <defs>
            <linearGradient id="mlgGrad" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#ff6a3d" />
              <stop offset="50%" stopColor="#ff4f8b" />
              <stop offset="100%" stopColor="#8b6cff" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="116" height="116" rx="33" fill="none" stroke="rgba(241,238,232,0.18)" strokeWidth="4" />
          <text x="60" y="62" textAnchor="middle" dominantBaseline="central" fill="url(#mlgGrad)"
            fontFamily="Syne, 'Inter Tight', system-ui, sans-serif" fontWeight="800" fontSize="30" letterSpacing="-0.3">MLG</text>
        </svg>
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
