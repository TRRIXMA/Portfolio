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
          <circle cx="60" cy="60" r="60" fill="#0a0910" />
          <circle cx="60" cy="60" r="57.5" fill="none" stroke="url(#mlgGrad)" strokeWidth="3" />
          <path d="M22 34 H68 L76 26 H97" fill="none" stroke="url(#mlgGrad)" strokeWidth="3.4" strokeLinecap="round" />
          <circle cx="97" cy="26" r="4" fill="#8b6cff" />
          <path d="M98 86 H52 L44 94 H23" fill="none" stroke="url(#mlgGrad)" strokeWidth="3.4" strokeLinecap="round" />
          <circle cx="23" cy="94" r="4" fill="#ff6a3d" />
          <text x="61" y="61" textAnchor="middle" dominantBaseline="central" fill="#f1eee8"
            fontFamily="JetBrains Mono, ui-monospace, monospace" fontWeight="500" fontSize="26" letterSpacing="2.5">MLG</text>
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
