
// Section A — Design Tokens + Section B — Typography

function SectionATokens() {
  const neutrals = [
    ['50','#FAFAF7'],['100','#F4F1EA'],['150','#EEEAE0'],['200','#DDD8CC'],['300','#C4BDAE'],
    ['400','#A39C8D'],['500','#7E786B'],['600','#6B6558'],['700','#514C42'],['800','#36322B'],
    ['900','#1A1814'],['950','#0D0C0A'],
  ];
  const brand = [
    ['PM Blue','#2055D4'],['Blue Light','#EEF2FF'],['Ochre','#9B6F1E'],['Ochre Light','#FBF4E6'],
    ['Data Green','#1A7A54'],['Green Light','#E6F5EE'],['Game Purple','#6535B8'],['Purple Light','#F1ECFB'],
  ];
  const semantic = [
    ['Success','#1A7A54','#E6F5EE'],['Warning','#C08A2F','#FBF4E6'],
    ['Error','#C93B3B','#FDECEC'],['Info','#2055D4','#EEF2FF'],
  ];
  const surfaces = [
    ['bg-base','var(--bg-base)'],['bg-elevated','var(--bg-elevated)'],['bg-sunken','var(--bg-sunken)'],
    ['border-default','var(--border-default)'],['border-strong','var(--border-strong)'],['overlay','var(--bg-overlay)'],
  ];
  const radii = [
    ['none','0'],['sm','4px'],['md','8px'],['lg','12px'],['xl','16px'],['full','9999px'],
  ];
  const shadows = ['xs','sm','md','lg','xl','inner'];
  const spaces = [4,8,12,16,24,32,48,64,96,128];
  const zIndex = [['base',0],['dropdown',100],['sticky',200],['overlay',300],['modal',400],['toast',500]];
  const easings = [
    ['ease-in','cubic-bezier(0.4,0,1,1)'],['ease-out','cubic-bezier(0,0,0.2,1)'],
    ['ease-in-out','cubic-bezier(0.4,0,0.2,1)'],['spring','cubic-bezier(0.34,1.56,0.64,1)'],
  ];
  const durations = [['fast','150ms'],['base','250ms'],['slow','400ms'],['slower','600ms']];

  return (
    <div>
      <SectionHeader id="section-a" label="SECTION A" title="Design Tokens" desc="La base del sistema Hybrid Synthesis — colores, espaciado, radios, sombras, tipografía, animación." />

      <ShowcaseCard title="Brand Colors" desc="Los cuatro ejes del concepto, cada uno con su acento.">
        {brand.map(([n,h]) => <ColorSwatch key={n} name={n} hex={h} />)}
      </ShowcaseCard>

      <ShowcaseCard title="Neutral Scale" desc="Warm-tinted grays from 50 (lightest) to 950 (darkest).">
        {neutrals.map(([n,h]) => <ColorSwatch key={n} name={`neutral-${n}`} hex={h} />)}
      </ShowcaseCard>

      <ShowcaseCard title="Semantic Colors" desc="Success, warning, error, info — con sus fondos light.">
        {semantic.map(([n,h,l]) => (
          <React.Fragment key={n}>
            <ColorSwatch name={n} hex={h} />
            <ColorSwatch name={`${n} Light`} hex={l} />
          </React.Fragment>
        ))}
      </ShowcaseCard>

      <ShowcaseCard title="Surfaces & Backgrounds" desc="Light + dark mode.">
        {surfaces.map(([n,v]) => (
          <div key={n} style={{ display: 'flex', flexDirection: 'column', gap: 6, width: 120 }}>
            <div style={{ width: 120, height: 60, borderRadius: 'var(--radius-md)', background: v, border: '1px solid var(--border-default)' }}></div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-primary)' }}>{n}</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-tertiary)' }}>{v}</div>
          </div>
        ))}
      </ShowcaseCard>

      <ShowcaseCard title="Spacing Scale" desc="4px base unit, used for padding, margins, gaps.">
        {spaces.map(s => (
          <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: s, height: 20, background: 'var(--color-pm-blue)', borderRadius: 2, opacity: 0.7 }}></div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-secondary)', minWidth: 50 }}>{s}px</span>
          </div>
        ))}
      </ShowcaseCard>

      <ShowcaseCard title="Border Radii" desc="From sharp to pill.">
        {radii.map(([n,v]) => (
          <Variant key={n} label={n}>
            <div style={{ width: 64, height: 64, background: 'var(--color-pm-blue)', borderRadius: v, opacity: 0.7 }}></div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-tertiary)' }}>{v}</div>
          </Variant>
        ))}
      </ShowcaseCard>

      <ShowcaseCard title="Shadows" desc="5 elevation levels + inner shadow.">
        {shadows.map(s => (
          <Variant key={s} label={s}>
            <div style={{ width: 80, height: 60, background: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)', boxShadow: `var(--shadow-${s})` }}></div>
          </Variant>
        ))}
      </ShowcaseCard>

      <ShowcaseCard title="Z-Index Scale" desc="Layering system.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
          {zIndex.map(([n,v]) => (
            <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '8px 12px', background: 'var(--bg-sunken)', borderRadius: 'var(--radius-sm)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--color-pm-blue)', fontWeight: 700, width: 40 }}>{v}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-secondary)' }}>{n}</span>
            </div>
          ))}
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Animation Easings" desc="Used across all transitions.">
        {easings.map(([n,v]) => (
          <Variant key={n} label={n} style={{ width: 160 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-tertiary)' }}>{v}</div>
          </Variant>
        ))}
      </ShowcaseCard>

      <ShowcaseCard title="Durations" desc="Timing tokens for animations.">
        {durations.map(([n,v]) => (
          <Variant key={n} label={`${n}: ${v}`}>
            <div style={{ width: parseInt(v) * 0.6, height: 8, background: 'var(--color-data-green)', borderRadius: 4 }}></div>
          </Variant>
        ))}
      </ShowcaseCard>
    </div>
  );
}

function SectionBTypography() {
  const headings = [
    ['H1 Display', 'var(--text-6xl)', 'var(--font-display)', 400, 'var(--leading-tight)', 'var(--tracking-tighter)'],
    ['H2', 'var(--text-4xl)', 'var(--font-display)', 400, 'var(--leading-tight)', 'var(--tracking-tight)'],
    ['H3', 'var(--text-3xl)', 'var(--font-display)', 400, 'var(--leading-snug)', 'var(--tracking-tight)'],
    ['H4', 'var(--text-2xl)', 'var(--font-body)', 700, 'var(--leading-snug)', 'var(--tracking-tight)'],
    ['H5', 'var(--text-xl)', 'var(--font-body)', 700, 'var(--leading-snug)', 'var(--tracking-normal)'],
    ['H6', 'var(--text-lg)', 'var(--font-body)', 600, 'var(--leading-snug)', 'var(--tracking-normal)'],
  ];

  return (
    <div>
      <SectionHeader id="section-b" label="SECTION B" title="Typography & Text" desc="DM Serif Display para headlines, DM Sans para body, JetBrains Mono para datos, Caveat para anotaciones." />

      <ShowcaseCard title="Display Headings" desc="H1–H6 con la jerarquía editorial del concepto Hybrid.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%' }}>
          {headings.map(([label, size, family, weight, lh, ls]) => (
            <div key={label} style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: 16 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-tertiary)', marginBottom: 6 }}>{label} · {size} · weight {weight}</div>
              <div style={{ fontFamily: family, fontSize: size, fontWeight: weight, lineHeight: lh, letterSpacing: ls, color: 'var(--text-primary)' }}>
                Productos con propósito
              </div>
            </div>
          ))}
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Body Text" desc="Párrafo, lead, small, caption.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%' }}>
          <Variant label="Lead (18px)">
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-primary)', maxWidth: 600 }}>Un PM con el rigor de un investigador y la creatividad de un game designer.</p>
          </Variant>
          <Variant label="Body (16px)">
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-normal)', color: 'var(--text-secondary)', maxWidth: 600 }}>Estudié psicología del comportamiento porque quería entender las motivaciones humanas. Hoy ese toolkit me da una ventaja clara como product manager.</p>
          </Variant>
          <Variant label="Small (14px)">
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-normal)', color: 'var(--text-secondary)' }}>Universidad Autònoma de Barcelona · 2019–2023</p>
          </Variant>
          <Variant label="Caption (12px)">
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', lineHeight: 'var(--leading-normal)', color: 'var(--text-tertiary)' }}>Última actualización: abril 2026</p>
          </Variant>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Quote / Pull Quote" desc="Cita editorial con acento académico.">
        <div style={{ width: '100%' }}>
          <blockquote style={{ borderLeft: '3px solid var(--color-ochre)', paddingLeft: 24, fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: 'var(--leading-snug)', maxWidth: 600 }}>
            "Trato cada producto como una hipótesis sobre comportamiento humano."
          </blockquote>
          <div style={{ marginTop: 12, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-ochre)', paddingLeft: 27 }}>— Uri Martín Corella, 2026</div>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Annotation (Caveat)" desc="Nota a mano alzada — firma del concepto Hybrid.">
        <div style={{ fontFamily: 'var(--font-annotation)', fontSize: 20, color: 'var(--color-ochre)', transform: 'rotate(-1.5deg)', padding: 12 }}>
          ← esta es la nota que convierte datos en historia
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Monospace / Code" desc="Inline code, code block, kbd.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
          <Variant label="Inline code">
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-secondary)' }}>
              El análisis usa <code>regression.fit(X, y)</code> para predecir motivación.
            </p>
          </Variant>
          <Variant label="Code block">
            <pre style={{ fontFamily: 'var(--font-mono)', fontSize: 13, background: 'var(--bg-sunken)', padding: 20, borderRadius: 'var(--radius-md)', border: '1px solid var(--border-default)', overflow: 'auto', lineHeight: 1.7, color: 'var(--text-primary)' }}>
              <code>{`SELECT user_id, COUNT(*) as sessions
FROM events
WHERE event_type = 'game_start'
GROUP BY user_id
HAVING sessions >= 3;`}</code>
            </pre>
          </Variant>
          <Variant label="Keyboard shortcut">
            <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
              <kbd>⌘</kbd> + <kbd>K</kbd> <span style={{ fontSize: 13, color: 'var(--text-secondary)', marginLeft: 8 }}>Command palette</span>
            </div>
          </Variant>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Lists" desc="Unordered, ordered, definition.">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, width: '100%' }}>
          <Variant label="Unordered">
            <ul style={{ paddingLeft: 20, fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              <li>User Research</li><li>A/B Testing</li><li>Roadmapping</li>
            </ul>
          </Variant>
          <Variant label="Ordered">
            <ol style={{ paddingLeft: 20, fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              <li>Definir hipótesis</li><li>Diseñar experimento</li><li>Medir impacto</li>
            </ol>
          </Variant>
          <Variant label="Definition">
            <dl style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              <dt style={{ fontWeight: 700, color: 'var(--text-primary)' }}>SDT</dt>
              <dd style={{ marginLeft: 0, marginBottom: 8 }}>Self-Determination Theory</dd>
              <dt style={{ fontWeight: 700, color: 'var(--text-primary)' }}>PRD</dt>
              <dd style={{ marginLeft: 0 }}>Product Requirements Document</dd>
            </dl>
          </Variant>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Links" desc="Default, hover, external.">
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <a href="#" style={{ fontSize: 14 }}>Default link</a>
          <a href="#" style={{ fontSize: 14, textDecoration: 'underline' }}>Hover state</a>
          <a href="#" style={{ fontSize: 14, color: 'var(--text-tertiary)' }}>Visited</a>
          <a href="#" style={{ fontSize: 14, display: 'inline-flex', alignItems: 'center', gap: 4 }}>External ↗</a>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Highlight / Mark" desc="Para resaltar texto en contexto.">
        <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          El resultado fue una <mark style={{ background: 'var(--color-pm-blue-light)', color: 'var(--color-pm-blue)', padding: '2px 6px', borderRadius: 3 }}>reducción significativa de ansiedad</mark> en el grupo experimental (p&lt;0.05).
        </p>
      </ShowcaseCard>

      <ShowcaseCard title="Stat / Metric" desc="Número grande + label + delta.">
        <div style={{ display: 'flex', gap: 32 }}>
          {[
            { value: '8.8', label: 'GPA UPC', delta: '+12%', color: 'var(--color-pm-blue)' },
            { value: '48', label: 'Sujetos TFG', delta: null, color: 'var(--color-ochre)' },
            { value: '2', label: 'Game Jam Wins', delta: '+1 YoY', color: 'var(--color-game-purple)' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 40, fontWeight: 800, color: s.color, letterSpacing: '-1px' }}>{s.value}</div>
              <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 4 }}>{s.label}</div>
              {s.delta && <div style={{ fontSize: 12, color: 'var(--color-data-green)', marginTop: 4 }}>▲ {s.delta}</div>}
            </div>
          ))}
        </div>
      </ShowcaseCard>
    </div>
  );
}

Object.assign(window, { SectionATokens, SectionBTypography });
