import { useEffect, useRef, useState } from 'react';

// Fait apparaître l'élément en douceur quand il entre dans l'écran
export function Reveal({ as: Tag = 'div', className = '', children, ...props }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        io.disconnect();
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${visible ? 'in' : ''} ${className}`} {...props}>
      {children}
    </Tag>
  );
}

export function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map(t => <li key={t}>{t}</li>)}
    </ul>
  );
}

export function SectionHead({ index, label, children }) {
  return (
    <div className="section-head">
      <span className="kicker mono">{index} — {label}</span>
      <h2>{children}</h2>
    </div>
  );
}
