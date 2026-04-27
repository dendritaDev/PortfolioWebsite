
// Section E — Navigation + Section F — Cards & Containers

function SectionENavigation() {
  const [activeTab, setActiveTab] = React.useState(0);
  const [activePill, setActivePill] = React.useState(0);
  const [step, setStep] = React.useState(1);
  const [page, setPage] = React.useState(3);

  const tabItems = ['Overview', 'Research', 'Design', 'Outcome'];

  return (
    <div>
      <SectionHeader id="section-e" label="SECTION E" title="Navigation" desc="Navbar, tabs, breadcrumbs, pagination, stepper, sidebar, TOC." />

      <ShowcaseCard title="Top Navbar" desc="Default + scrolled/condensed variant.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
          <Variant label="Default">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 32px', background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 28, height: 28, background: 'var(--color-pm-blue)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: 14, color: '#fff' }}>U</div>
                <span style={{ fontWeight: 700, fontSize: 16 }}>Uri MC</span>
              </div>
              <div style={{ display: 'flex', gap: 32 }}>
                {['About','Projects','Games/Apps','Books','CV'].map(n => <a key={n} href="#" style={{ fontSize: 14, color: 'var(--text-secondary)', textDecoration: 'none' }}>{n}</a>)}
              </div>
              <a href="#" style={{ padding: '8px 18px', background: 'var(--color-pm-blue)', color: '#fff', fontSize: 13, fontWeight: 600, borderRadius: 'var(--radius-md)', textDecoration: 'none' }}>CV →</a>
            </div>
          </Variant>
          <Variant label="Condensed (scrolled)">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 32px', background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', width: '100%', boxShadow: 'var(--shadow-sm)' }}>
              <span style={{ fontWeight: 700, fontSize: 14 }}>Uri MC</span>
              <div style={{ display: 'flex', gap: 28 }}>
                {['About','Projects','Games','Books','CV'].map(n => <a key={n} href="#" style={{ fontSize: 13, color: 'var(--text-secondary)', textDecoration: 'none' }}>{n}</a>)}
              </div>
              <a href="#" style={{ padding: '6px 14px', background: 'var(--color-pm-blue)', color: '#fff', fontSize: 12, fontWeight: 600, borderRadius: 'var(--radius-sm)', textDecoration: 'none' }}>CV</a>
            </div>
          </Variant>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Mobile Menu" desc="Hamburger + drawer (static preview).">
        <div style={{ display: 'flex', gap: 24 }}>
          <Variant label="Hamburger icon">
            <div style={{ width: 44, height: 44, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5, cursor: 'pointer', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ width: 20, height: 2, background: 'var(--text-primary)' }}></div>
              <div style={{ width: 20, height: 2, background: 'var(--text-primary)' }}></div>
              <div style={{ width: 20, height: 2, background: 'var(--text-primary)' }}></div>
            </div>
          </Variant>
          <Variant label="Drawer (preview)">
            <div style={{ width: 260, background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: 24, boxShadow: 'var(--shadow-xl)' }}>
              <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 20 }}>Uri MC</div>
              {['About','Projects','Games/Apps','Books','CV'].map(n => (
                <a key={n} href="#" style={{ display: 'block', padding: '12px 0', fontSize: 15, color: 'var(--text-secondary)', textDecoration: 'none', borderBottom: '1px solid var(--border-subtle)' }}>{n}</a>
              ))}
            </div>
          </Variant>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Breadcrumbs" desc="Ruta de navegación.">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}>
          <a href="#" style={{ color: 'var(--text-tertiary)', textDecoration: 'none' }}>Portfolio</a>
          <span style={{ color: 'var(--text-tertiary)' }}>/</span>
          <a href="#" style={{ color: 'var(--text-tertiary)', textDecoration: 'none' }}>Projects</a>
          <span style={{ color: 'var(--text-tertiary)' }}>/</span>
          <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>TFG Pallapupas</span>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Tabs" desc="Underline, pill, segmented.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%' }}>
          <Variant label="Underline tabs">
            <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid var(--border-default)' }}>
              {tabItems.map((t, i) => (
                <button key={i} onClick={() => setActiveTab(i)} style={{
                  fontFamily: 'var(--font-body)', fontSize: 14, padding: '10px 20px', background: 'none',
                  border: 'none', borderBottom: `2px solid ${activeTab === i ? 'var(--color-pm-blue)' : 'transparent'}`,
                  color: activeTab === i ? 'var(--color-pm-blue)' : 'var(--text-secondary)',
                  fontWeight: activeTab === i ? 600 : 400, cursor: 'pointer', marginBottom: -1,
                }}>{t}</button>
              ))}
            </div>
          </Variant>
          <Variant label="Pill tabs">
            <div style={{ display: 'flex', gap: 6, background: 'var(--bg-sunken)', padding: 4, borderRadius: 'var(--radius-md)' }}>
              {tabItems.map((t, i) => (
                <button key={i} onClick={() => setActivePill(i)} style={{
                  fontFamily: 'var(--font-body)', fontSize: 13, padding: '7px 16px',
                  background: activePill === i ? 'var(--bg-elevated)' : 'transparent',
                  border: 'none', borderRadius: 'var(--radius-sm)',
                  color: activePill === i ? 'var(--text-primary)' : 'var(--text-tertiary)',
                  fontWeight: activePill === i ? 600 : 400, cursor: 'pointer',
                  boxShadow: activePill === i ? 'var(--shadow-xs)' : 'none',
                }}>{t}</button>
              ))}
            </div>
          </Variant>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Pagination" desc="Navegación entre páginas.">
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          <button style={{ padding: '6px 10px', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', background: 'var(--bg-elevated)', cursor: 'pointer', fontSize: 13, color: 'var(--text-secondary)' }}>←</button>
          {[1,2,3,4,5].map(p => (
            <button key={p} onClick={() => setPage(p)} style={{
              padding: '6px 12px', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)',
              background: page === p ? 'var(--color-pm-blue)' : 'var(--bg-elevated)',
              color: page === p ? '#fff' : 'var(--text-secondary)', cursor: 'pointer', fontSize: 13, fontWeight: page === p ? 600 : 400,
            }}>{p}</button>
          ))}
          <button style={{ padding: '6px 10px', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', background: 'var(--bg-elevated)', cursor: 'pointer', fontSize: 13, color: 'var(--text-secondary)' }}>→</button>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Stepper / Progress Steps" desc="Para case studies tipo PM.">
        <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
          {['Problem', 'Research', 'Design', 'Outcome'].map((s, i) => (
            <React.Fragment key={i}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }} onClick={() => setStep(i)}>
                <div style={{
                  width: 28, height: 28, borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: i <= step ? 'var(--color-pm-blue)' : 'var(--bg-sunken)', color: i <= step ? '#fff' : 'var(--text-tertiary)',
                  fontSize: 12, fontWeight: 700, border: i <= step ? 'none' : '1px solid var(--border-default)',
                }}>{i < step ? '✓' : i + 1}</div>
                <span style={{ fontSize: 13, color: i <= step ? 'var(--text-primary)' : 'var(--text-tertiary)', fontWeight: i === step ? 600 : 400 }}>{s}</span>
              </div>
              {i < 3 && <div style={{ width: 40, height: 2, background: i < step ? 'var(--color-pm-blue)' : 'var(--border-default)', margin: '0 8px' }}></div>}
            </React.Fragment>
          ))}
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Anchor Links / TOC" desc="Tabla de contenidos sticky con scroll-spy.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, width: 200, background: 'var(--bg-sunken)', padding: 12, borderRadius: 'var(--radius-md)' }}>
          {['Problema', 'Investigación', 'Hipótesis', 'Diseño', 'Resultados', 'Aprendizajes'].map((item, i) => (
            <a key={i} href="#" style={{
              fontFamily: 'var(--font-mono)', fontSize: 12, padding: '6px 12px',
              color: i === 2 ? 'var(--color-pm-blue)' : 'var(--text-tertiary)',
              background: i === 2 ? 'var(--color-pm-blue-light)' : 'transparent',
              borderRadius: 'var(--radius-sm)', textDecoration: 'none', fontWeight: i === 2 ? 600 : 400,
            }}>{item}</a>
          ))}
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Skip-to-content & Back-to-top" desc="Accesibilidad + UX de scroll.">
        <div style={{ display: 'flex', gap: 24 }}>
          <Variant label="Skip-to-content">
            <a href="#main" style={{ padding: '8px 16px', background: 'var(--color-pm-blue)', color: '#fff', fontSize: 13, fontWeight: 600, borderRadius: 'var(--radius-sm)', textDecoration: 'none' }}>Skip to content</a>
          </Variant>
          <Variant label="Back-to-top">
            <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-full)', background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-md)', cursor: 'pointer', fontSize: 18 }}>↑</div>
          </Variant>
        </div>
      </ShowcaseCard>
    </div>
  );
}

function SectionFCards() {
  const c = { pmBlue: 'var(--color-pm-blue)', ochre: 'var(--color-ochre)', dataGreen: 'var(--color-data-green)', gamePurple: 'var(--color-game-purple)' };

  const CardShell = ({ children, topColor, style: s }) => (
    <div style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', padding: 24, borderTop: topColor ? `3px solid ${topColor}` : undefined, width: 320, ...s }}>
      {children}
    </div>
  );

  const ImgPlaceholder = ({ w = 320, h = 180, label = 'project thumbnail' }) => (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 'var(--radius-md)', display: 'block' }}>
      <rect width={w} height={h} fill="var(--bg-sunken)" />
      {[...Array(Math.ceil(w/20))].map((_, i) => <line key={i} x1={i*20} y1="0" x2={i*20} y2={h} stroke="var(--border-subtle)" strokeWidth="1" />)}
      <text x={w/2} y={h/2} textAnchor="middle" fontFamily="monospace" fontSize="10" fill="var(--text-tertiary)">{label}</text>
    </svg>
  );

  return (
    <div>
      <SectionHeader id="section-f" label="SECTION F" title="Cards & Containers" desc="Project, education, course, book, game, skill, stat, quote, feature, empty state." />

      <ShowcaseCard title="Project Card" desc="Con thumbnail, tags, descripción y hover lift.">
        <CardShell topColor={c.pmBlue}>
          <ImgPlaceholder w={272} h={150} />
          <div style={{ display: 'inline-block', padding: '3px 10px', background: 'var(--color-pm-blue-light)', color: c.pmBlue, fontSize: 11, fontWeight: 700, borderRadius: 'var(--radius-sm)', margin: '14px 0 10px' }}>Health · Product</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 400, marginBottom: 8 }}>Therapeutic App</div>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7, margin: '0 0 16px' }}>App de relajación con ASMR y dashboard personalizado.</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-default)', paddingTop: 12 }}>
            <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: c.pmBlue }}>2 beta users</span>
            <a href="#" style={{ fontSize: 13, color: c.pmBlue, fontWeight: 600 }}>Ver →</a>
          </div>
        </CardShell>
      </ShowcaseCard>

      <ShowcaseCard title="Education Card" desc="Con badge, TFG y color de eje.">
        <CardShell topColor={c.ochre}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 20 }}>Psicología</div>
            <span style={{ padding: '3px 10px', background: 'var(--color-ochre-light)', color: c.ochre, fontSize: 11, fontWeight: 700, borderRadius: 'var(--radius-sm)', height: 'fit-content' }}>Premio Extraordinario</span>
          </div>
          <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 14 }}>UAB · 2019–2023</div>
          <div style={{ borderTop: '1px solid var(--border-default)', paddingTop: 12 }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: c.ochre, letterSpacing: '0.1em', marginBottom: 4 }}>TFG</div>
            <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>Predicción de motivación laboral (SDT + regresión lineal)</div>
          </div>
        </CardShell>
      </ShowcaseCard>

      <ShowcaseCard title="Course Card" desc="Con duración, institución, badge 'completed'.">
        <div style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '16px 18px', borderLeft: `3px solid ${c.dataGreen}`, width: 280 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6 }}>SQL para Análisis de Datos</div>
            <span style={{ fontSize: 10, padding: '2px 8px', background: 'var(--color-data-green-light)', color: c.dataGreen, borderRadius: 'var(--radius-full)', fontWeight: 600 }}>✓ Done</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 12, color: c.dataGreen }}>Frogames</span>
            <span style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>22h · <a href="#" style={{ color: c.dataGreen, textDecoration: 'none' }}>Link ↗</a></span>
          </div>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Book Card" desc="Cover placeholder, título, autor, tags.">
        <CardShell style={{ width: 240, padding: 20 }}>
          <ImgPlaceholder w={200} h={260} label="book cover" />
          <div style={{ fontSize: 15, fontWeight: 600, marginTop: 12 }}>Hooked</div>
          <div style={{ fontSize: 12, color: 'var(--text-tertiary)', marginTop: 2 }}>Nir Eyal</div>
          <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
            {['Product', 'Psychology'].map(t => <span key={t} style={{ fontSize: 10, padding: '2px 8px', background: 'var(--bg-sunken)', borderRadius: 'var(--radius-full)', color: 'var(--text-tertiary)' }}>{t}</span>)}
          </div>
        </CardShell>
      </ShowcaseCard>

      <ShowcaseCard title="Game Card" desc="Con video/gif placeholder, premio si aplica.">
        <CardShell topColor={c.gamePurple} style={{ width: 320 }}>
          <ImgPlaceholder w={272} h={160} label="game gif / video loop" />
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, marginTop: 14 }}>Spiral</div>
          <div style={{ fontSize: 12, color: 'var(--text-tertiary)', marginTop: 4 }}>Game Jam 2025 · 48h</div>
          <div style={{ display: 'inline-block', padding: '3px 10px', background: 'var(--color-game-purple-light)', color: c.gamePurple, fontSize: 11, fontWeight: 700, borderRadius: 'var(--radius-sm)', marginTop: 10 }}>🏆 Best Art</div>
        </CardShell>
      </ShowcaseCard>

      <ShowcaseCard title="Stat / KPI Tile" desc="Con sparkline y delta.">
        <div style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', padding: 20, width: 200 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-tertiary)', letterSpacing: '0.1em', marginBottom: 8 }}>GPA GAME DEV</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <span style={{ fontSize: 32, fontWeight: 800, color: c.pmBlue }}>8.8</span>
              <span style={{ fontSize: 12, color: 'var(--text-tertiary)', marginLeft: 4 }}>/10</span>
              <div style={{ fontSize: 12, color: 'var(--color-data-green)', marginTop: 4 }}>▲ 12%</div>
            </div>
            <svg width="60" height="28" viewBox="0 0 60 28"><polyline points="0,24 12,20 24,16 36,14 48,8 60,4" fill="none" stroke="var(--color-pm-blue)" strokeWidth="1.5" /></svg>
          </div>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Quote Card" desc="Estilo académico.">
        <div style={{ background: 'var(--color-ochre-light)', borderLeft: '3px solid var(--color-ochre)', borderRadius: '0 var(--radius-md) var(--radius-md) 0', padding: 24, maxWidth: 480 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontStyle: 'italic', lineHeight: 1.5, color: 'var(--text-primary)', marginBottom: 12 }}>"El mejor UX es el que no se nota."</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-ochre)' }}>— Game Design philosophy</div>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Empty State" desc="Para secciones vacías.">
        <div style={{ textAlign: 'center', padding: '48px 32px', border: '1px dashed var(--border-default)', borderRadius: 'var(--radius-lg)', width: 400 }}>
          <div style={{ fontSize: 36, marginBottom: 12 }}>📭</div>
          <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 6 }}>No hay proyectos todavía</div>
          <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginBottom: 20 }}>Empieza añadiendo tu primer caso de estudio.</div>
          <button style={{ fontFamily: 'var(--font-body)', fontSize: 13, padding: '8px 18px', background: 'var(--color-pm-blue)', color: '#fff', border: 'none', borderRadius: 'var(--radius-md)', cursor: 'pointer', fontWeight: 600 }}>+ Añadir proyecto</button>
        </div>
      </ShowcaseCard>
    </div>
  );
}

Object.assign(window, { SectionENavigation, SectionFCards });
