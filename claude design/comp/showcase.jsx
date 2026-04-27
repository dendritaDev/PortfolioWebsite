
// Shared UI for the component sheet: ShowcaseCard, TOC, ThemeToggle, Section headers
// All components exported to window

const showcaseStyles = {
  card: {
    background: 'var(--bg-elevated)',
    border: '1px solid var(--border-default)',
    borderRadius: 'var(--radius-lg)',
    padding: 32,
    marginBottom: 24,
  },
  cardTitle: {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-lg)',
    fontWeight: 700,
    color: 'var(--text-primary)',
    marginBottom: 4,
  },
  cardDesc: {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-sm)',
    color: 'var(--text-secondary)',
    marginBottom: 20,
  },
  cardBody: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 16,
    alignItems: 'flex-start',
  },
  variant: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    alignItems: 'flex-start',
  },
  variantLabel: {
    fontFamily: 'var(--font-mono)',
    fontSize: 11,
    color: 'var(--text-tertiary)',
    letterSpacing: '0.05em',
  },
};

function ShowcaseCard({ title, desc, children, style }) {
  return (
    <div style={{ ...showcaseStyles.card, ...style }}>
      <div style={showcaseStyles.cardTitle}>{title}</div>
      {desc && <div style={showcaseStyles.cardDesc}>{desc}</div>}
      <div style={showcaseStyles.cardBody}>{children}</div>
    </div>
  );
}

function Variant({ label, children, style }) {
  return (
    <div style={{ ...showcaseStyles.variant, ...style }}>
      {label && <div style={showcaseStyles.variantLabel}>{label}</div>}
      {children}
    </div>
  );
}

function SectionHeader({ id, label, title, desc }) {
  return (
    <div id={id} style={{ padding: '48px 0 24px', borderBottom: '1px solid var(--border-default)', marginBottom: 32, scrollMarginTop: 80 }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-pm-blue)', letterSpacing: '0.1em', marginBottom: 8 }}>{label}</div>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', fontWeight: 400, color: 'var(--text-primary)', letterSpacing: '-0.02em', margin: 0 }}>{title}</h2>
      {desc && <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', marginTop: 8, maxWidth: 640 }}>{desc}</p>}
    </div>
  );
}

function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      style={{
        width: 44, height: 44, borderRadius: 'var(--radius-full)',
        border: '1px solid var(--border-default)', background: 'var(--bg-elevated)',
        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 20, transition: 'all var(--duration-base) var(--ease-in-out)',
      }}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}

const TOC_ITEMS = [
  { id: 'homepage', label: 'Homepage' },
  { id: 'section-a', label: 'A — Design Tokens' },
  { id: 'section-b', label: 'B — Typography' },
  { id: 'section-c', label: 'C — Buttons' },
  { id: 'section-d', label: 'D — Forms' },
  { id: 'section-e', label: 'E — Navigation' },
  { id: 'section-f', label: 'F — Cards' },
  { id: 'section-g', label: 'G — Data Viz' },
  { id: 'section-h', label: 'H — Feedback' },
  { id: 'section-i', label: 'I — Overlays' },
  { id: 'section-j', label: 'J — Media' },
  { id: 'section-k', label: 'K — Portfolio' },
  { id: 'section-l', label: 'L — Motion' },
  { id: 'section-m', label: 'M — Accessibility' },
];

function TOCSidebar({ activeId }) {
  return (
    <nav style={{
      position: 'sticky', top: 80, width: 200, flexShrink: 0,
      display: 'flex', flexDirection: 'column', gap: 2, paddingTop: 16,
    }}>
      {TOC_ITEMS.map(item => (
        <a key={item.id} href={`#${item.id}`} style={{
          fontFamily: 'var(--font-mono)', fontSize: 12, padding: '6px 12px',
          color: activeId === item.id ? 'var(--color-pm-blue)' : 'var(--text-tertiary)',
          background: activeId === item.id ? 'var(--color-pm-blue-light)' : 'transparent',
          borderRadius: 'var(--radius-sm)', textDecoration: 'none',
          transition: 'all var(--duration-fast) var(--ease-in-out)',
          fontWeight: activeId === item.id ? 600 : 400,
        }}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}

function useScrollSpy(ids) {
  const [active, setActive] = React.useState(ids[0]);
  React.useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, { rootMargin: '-80px 0px -60% 0px' });
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids.join(',')]);
  return active;
}

// Divider between homepage and component sheet
function BigDivider({ label }) {
  return (
    <div style={{
      padding: '80px 0', textAlign: 'center',
      background: 'var(--bg-sunken)', borderTop: '3px solid var(--border-default)', borderBottom: '3px solid var(--border-default)',
    }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-pm-blue)', letterSpacing: '0.2em', marginBottom: 12 }}>PART 2</div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-5xl)', color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>{label}</div>
      <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-secondary)', marginTop: 12, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
        Todos los componentes, estados y tokens del sistema Hybrid Synthesis.
      </p>
    </div>
  );
}

// Color swatch for tokens section
function ColorSwatch({ name, cssVar, hex }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: 100 }}>
      <div style={{ width: 100, height: 60, borderRadius: 'var(--radius-md)', background: hex || `var(${cssVar})`, border: '1px solid var(--border-default)' }}></div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-primary)', fontWeight: 600 }}>{name}</div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-tertiary)' }}>{hex || cssVar}</div>
    </div>
  );
}

Object.assign(window, {
  ShowcaseCard, Variant, SectionHeader, ThemeToggle, TOCSidebar, TOC_ITEMS,
  useScrollSpy, BigDivider, ColorSwatch, showcaseStyles
});
