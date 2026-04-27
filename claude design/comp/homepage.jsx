
// Homepage — Hybrid Synthesis full implementation
const homepageColors = {
  bg: 'var(--bg-base)', paper: 'var(--bg-sunken)', text: 'var(--text-primary)',
  muted: 'var(--text-secondary)', border: 'var(--border-default)',
  pmBlue: 'var(--color-pm-blue)', pmBlueLight: 'var(--color-pm-blue-light)',
  ochre: 'var(--color-ochre)', ochreLight: 'var(--color-ochre-light)',
  dataGreen: 'var(--color-data-green)', dataLight: 'var(--color-data-green-light)',
  gamePurple: 'var(--color-game-purple)', gamePurpleLight: 'var(--color-game-purple-light)',
};

function Homepage() {
  const c = homepageColors;
  const [eggOpen, setEggOpen] = React.useState(false);

  const Pill = ({ label, color, bg }) => (
    <span style={{ padding: '5px 14px', background: bg, color, fontSize: 12, fontWeight: 600, borderRadius: 'var(--radius-full)', border: `1px solid ${color}22` }}>{label}</span>
  );

  const MiniBar = ({ data, color }) => {
    const mx = Math.max(...data.map(d => d.v));
    return (
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 48 }}>
        {data.map((d, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            <div style={{ width: 20, background: color, height: `${(d.v / mx) * 44}px`, opacity: 0.85, borderRadius: '2px 2px 0 0' }}></div>
            <div style={{ fontSize: 8, fontFamily: 'var(--font-mono)', color: c.muted }}>{d.l}</div>
          </div>
        ))}
      </div>
    );
  };

  const PhotoPlaceholder = () => (
    <svg width="220" height="220" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: '50%', border: '3px solid var(--border-default)' }}>
      <rect width="220" height="220" fill="var(--bg-sunken)" rx="110" />
      {[...Array(14)].map((_, i) => <line key={i} x1={i * 17} y1="0" x2={i * 17} y2="220" stroke="var(--border-default)" strokeWidth="1" />)}
      <text x="110" y="106" textAnchor="middle" fontFamily="var(--font-display)" fontSize="11" fill="var(--text-secondary)">portrait</text>
      <text x="110" y="123" textAnchor="middle" fontFamily="monospace" fontSize="10" fill="var(--text-secondary)">Uri M.C.</text>
    </svg>
  );

  const navItems = ['About', 'Projects', 'Games/Apps', 'Books', 'CV'];
  const edu = [
    { degree: 'Psicología', school: 'UAB', period: '2019–2023', badge: 'Premio Extraordinario', color: c.ochre, bg: c.ochreLight, tfg: 'Predicción de motivación laboral (SDT + regresión lineal)' },
    { degree: 'Data Science', school: 'UOC', period: '2023–2024', badge: 'Matrícula Honor', color: c.dataGreen, bg: c.dataLight, tfg: 'Fundamentos estadísticos y programación' },
    { degree: 'Game Dev', school: 'UPC', period: '2021–2025', badge: '8.8 · 12 matrículas', color: c.gamePurple, bg: c.gamePurpleLight, tfg: 'Videojuego terapéutico para ansiedad preoperatoria' },
  ];
  const courses = [
    { name: 'Product Management', inst: 'Udemy', h: '14h', col: c.pmBlue },
    { name: 'SQL Analysis', inst: 'Frogames', h: '22h', col: c.dataGreen },
    { name: 'Python DS', inst: 'Udemy', h: '30h', col: c.dataGreen },
    { name: 'UX Research', inst: 'Coursera', h: '18h', col: c.pmBlue },
    { name: 'A/B Testing', inst: 'Udemy', h: '12h', col: c.dataGreen },
    { name: 'Unity Dev', inst: 'Udemy', h: '45h', col: c.gamePurple },
    { name: 'PowerBI', inst: 'Frogames', h: '20h', col: c.dataGreen },
    { name: 'Psicometría', inst: 'UAB', h: '60h', col: c.ochre },
  ];
  const skills = {
    Product: { items: ['User Research', 'Roadmapping', 'A/B Testing', 'PRD Writing', 'Prioritization'], color: c.pmBlue, bg: c.pmBlueLight },
    Data: { items: ['SQL', 'Python', 'Looker', 'Regression', 'PowerBI', 'Psicometría'], color: c.dataGreen, bg: c.dataLight },
    Psychology: { items: ['SDT', 'Behavioral Anal.', 'Survey Design', 'Psychometrics'], color: c.ochre, bg: c.ochreLight },
    'Game & Tech': { items: ['Unity/C#', 'Game Design', 'Level Design', 'GitHub'], color: c.gamePurple, bg: c.gamePurpleLight },
  };
  const projects = [
    { tag: 'Health · Product', color: c.pmBlue, bg: c.pmBlueLight, title: 'Therapeutic App', desc: 'App de relajación con ASMR y dashboard personalizado. Co-diseñada con psicóloga.', metric: '2 beta users' },
    { tag: 'Serious Game', color: c.gamePurple, bg: c.gamePurpleLight, title: 'TFG Pallapupas', desc: 'Videojuego terapéutico para ansiedad preoperatoria pediátrica. A/B testing hospitalario.', metric: 'N=48, p<0.05' },
    { tag: 'Data · Behavior', color: c.dataGreen, bg: c.dataLight, title: 'Minesweeper Analytics', desc: 'Pipeline de análisis comportamental. 12k eventos. SQL + Python + Looker.', metric: '3 insights' },
  ];

  const sectionBar = (color) => <div style={{ width: 3, height: 40, background: color, flexShrink: 0 }}></div>;

  return (
    <div id="homepage" style={{ scrollMarginTop: 40 }}>
      {/* NAV */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '22px 100px', borderBottom: '1px solid var(--border-default)', background: 'var(--bg-elevated)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 28, height: 28, background: c.pmBlue, borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 14, color: '#fff', fontWeight: 700 }}>U</span>
          </div>
          <span style={{ fontWeight: 700, fontSize: 16 }}>Uri MC</span>
        </div>
        <div style={{ display: 'flex', gap: 36 }}>
          {navItems.map(n => <a key={n} href="#" style={{ fontSize: 14, color: c.muted, textDecoration: 'none' }}>{n}</a>)}
        </div>
        <a href="#" style={{ padding: '9px 22px', background: c.pmBlue, color: '#fff', fontSize: 13, fontWeight: 600, borderRadius: 'var(--radius-md)' }}>CV →</a>
      </nav>

      {/* HERO */}
      <section style={{ padding: '80px 100px 60px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 80, alignItems: 'start', borderBottom: '1px solid var(--border-default)' }}>
        <div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 28 }}>
            <Pill label="Product Manager" color={c.pmBlue} bg={c.pmBlueLight} />
            <Pill label="Psicólogo" color={c.ochre} bg={c.ochreLight} />
            <Pill label="Game Designer" color={c.gamePurple} bg={c.gamePurpleLight} />
            <Pill label="Data" color={c.dataGreen} bg={c.dataLight} />
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-6xl)', fontWeight: 400, lineHeight: 1.02, letterSpacing: '-2px', margin: '0 0 24px' }}>
            Uri Martín<br /><span style={{ color: c.pmBlue }}>Corella</span>
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.7, color: c.muted, maxWidth: 560, margin: '0 0 36px' }}>
            Un PM con el rigor de un investigador, la empatía de un psicólogo y la creatividad de un game designer. Construyo productos con los que la gente quiere interactuar — y los datos para saber cuándo funcionan.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#" style={{ padding: '12px 26px', background: c.pmBlue, color: '#fff', fontSize: 14, fontWeight: 600, borderRadius: 'var(--radius-md)' }}>Ver CV →</a>
            <a href="#" style={{ padding: '12px 26px', border: '1.5px solid var(--border-default)', color: 'var(--text-primary)', fontSize: 14, fontWeight: 500, borderRadius: 'var(--radius-md)' }}>Proyectos</a>
            <a href="#" style={{ fontSize: 14, color: c.muted, alignSelf: 'center', marginLeft: 4 }}>LinkedIn ↗</a>
            <a href="#" style={{ fontSize: 14, color: c.muted, alignSelf: 'center' }}>GitHub ↗</a>
          </div>
          <div style={{ marginTop: 32, padding: '14px 18px', background: c.ochreLight, borderLeft: '3px solid var(--color-ochre)', maxWidth: 480 }}>
            <div style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: c.ochre, letterSpacing: '0.12em', marginBottom: 6 }}>NOTA DE CAMPO</div>
            <div style={{ fontSize: 13, color: c.muted, fontStyle: 'italic', lineHeight: 1.6 }}>La hipótesis: un PM que entiende el comportamiento humano desde la psicología y diseña desde la experiencia lúdica tomará mejores decisiones de producto.</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
          <PhotoPlaceholder />
          <div style={{ background: 'var(--bg-sunken)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', padding: '16px 20px', width: 220 }}>
            <div style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: c.muted, letterSpacing: '0.12em', marginBottom: 12 }}>PROFILE DATA</div>
            <MiniBar data={[{ l: 'Psych', v: 95 }, { l: 'Data', v: 80 }, { l: 'Game', v: 88 }, { l: 'PM', v: 82 }]} color={c.pmBlue} />
            <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {[['8.8', 'GPA UPC', c.pmBlue], ['12', 'Honours', c.dataGreen], ['48', 'N TFG', c.ochre], ['2', 'Jam wins', c.gamePurple]].map(([v, l, col], i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 20, fontWeight: 800, color: col, letterSpacing: '-0.5px' }}>{v}</div>
                  <div style={{ fontSize: 10, color: c.muted }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: '72px 100px', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, marginBottom: 40 }}>
          {sectionBar(c.pmBlue)}
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', fontWeight: 400, letterSpacing: '-1px', margin: 0 }}>Sobre mí</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 40 }}>
          {[
            { color: c.ochre, bg: c.ochreLight, label: 'Psicología', body: 'Estudié psicología del comportamiento. TFG cuantitativo con regresión lineal y SDT. Entiendo al usuario antes de abrir Figma — no como "persona", sino como sistema de motivaciones y barreras.' },
            { color: c.gamePurple, bg: c.gamePurpleLight, label: 'Game Design', body: 'Diseñé experiencias que enganchan. Gané game jams sobre rumiación y adicción. Mi TFG fue un serious game evaluado en un hospital pediátrico con la ONG Pallapupas.' },
            { color: c.dataGreen, bg: c.dataLight, label: 'Datos & Producto', body: 'Sin datos, el producto es solo opinión. SQL, Python, A/B testing — valido hipótesis, priorizo con evidencia y comunico impacto a stakeholders. El número cierra la conversación.' },
          ].map((item, i) => (
            <div key={i}>
              <div style={{ display: 'inline-block', padding: '4px 12px', background: item.bg, color: item.color, fontSize: 12, fontWeight: 700, borderRadius: 'var(--radius-sm)', marginBottom: 16 }}>{item.label}</div>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: c.muted, margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section style={{ padding: '72px 100px', background: 'var(--bg-sunken)', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, marginBottom: 40 }}>
          {sectionBar(c.ochre)}
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', fontWeight: 400, letterSpacing: '-1px', margin: 0 }}>Formación</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {edu.map((e, i) => (
            <div key={i} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', padding: 28, borderTop: `3px solid ${e.color}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400 }}>{e.degree}</div>
                <span style={{ padding: '4px 10px', background: e.bg, color: e.color, fontSize: 11, fontWeight: 700, borderRadius: 'var(--radius-sm)', height: 'fit-content', whiteSpace: 'nowrap' }}>{e.badge}</span>
              </div>
              <div style={{ fontSize: 13, color: c.muted, marginBottom: 16 }}>{e.school} · {e.period}</div>
              <div style={{ borderTop: '1px solid var(--border-default)', paddingTop: 14 }}>
                <div style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: e.color, letterSpacing: '0.12em', marginBottom: 6 }}>TFG</div>
                <div style={{ fontSize: 13, color: c.muted, lineHeight: 1.6 }}>{e.tfg}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section style={{ padding: '72px 100px', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, marginBottom: 40 }}>
          {sectionBar(c.dataGreen)}
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', fontWeight: 400, letterSpacing: '-1px', margin: 0 }}>Skills</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {Object.entries(skills).map(([group, { items, color, bg }]) => (
            <div key={group}>
              <div style={{ padding: '8px 14px', background: bg, color, fontSize: 13, fontWeight: 700, borderRadius: 'var(--radius-md)', marginBottom: 20, display: 'inline-block' }}>{group}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {items.map(s => (
                  <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 5, height: 5, background: color, borderRadius: '50%', flexShrink: 0 }}></div>
                    <span style={{ fontSize: 14, color: c.muted }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COURSES */}
      <section style={{ padding: '72px 100px', background: 'var(--bg-sunken)', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, marginBottom: 40 }}>
          {sectionBar(c.gamePurple)}
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', fontWeight: 400, letterSpacing: '-1px', margin: 0 }}>Formación Complementaria</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {courses.map((co, i) => (
            <div key={i} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: '16px 18px', borderLeft: `3px solid ${co.col}` }}>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6 }}>{co.name}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 12, color: co.col }}>{co.inst}</span>
                <span style={{ fontSize: 12, color: c.muted }}>{co.h}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section style={{ padding: '72px 100px', borderBottom: '1px solid var(--border-default)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, marginBottom: 40 }}>
          {sectionBar(c.gamePurple)}
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', fontWeight: 400, letterSpacing: '-1px', margin: 0 }}>Proyectos Destacados</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {projects.map((p, i) => (
            <div key={i} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', padding: 28, borderTop: `3px solid ${p.color}` }}>
              <div style={{ display: 'inline-block', padding: '4px 10px', background: p.bg, color: p.color, fontSize: 11, fontWeight: 700, borderRadius: 'var(--radius-sm)', marginBottom: 14 }}>{p.tag}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 400, margin: '0 0 12px' }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: c.muted, lineHeight: 1.7, margin: '0 0 20px' }}>{p.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-default)', paddingTop: 16 }}>
                <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: p.color }}>{p.metric}</span>
                <a href="#" style={{ fontSize: 13, color: p.color, fontWeight: 600 }}>Ver caso →</a>
              </div>
            </div>
          ))}
        </div>
        {/* Easter egg */}
        <div onClick={() => setEggOpen(!eggOpen)} style={{ marginTop: 48, padding: '20px 24px', background: c.gamePurpleLight, border: '1px dashed var(--color-game-purple)', borderRadius: 'var(--radius-md)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ fontSize: 20 }}>🎮</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: c.gamePurple }}>Easter egg: Game Jams</div>
            <div style={{ fontSize: 13, color: c.muted }}>Mind's Resonance (2023) · Spiral (2025 — premio mejor arte)</div>
          </div>
        </div>
        {eggOpen && (
          <div style={{ marginTop: 16, padding: 24, background: c.gamePurpleLight, border: '1px solid var(--color-game-purple)', borderRadius: 'var(--radius-md)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {[{ t: "Mind's Resonance", y: '2023', d: 'Juego sobre rumiación mental. Jam de 48h, 1er puesto general.' }, { t: 'Spiral', y: '2025', d: 'Juego sobre adicción al juego. Premio mejor arte.' }].map((jm, i) => (
              <div key={i} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: 20 }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: c.gamePurple, marginBottom: 6 }}>{jm.t} <span style={{ fontSize: 12, color: c.muted, fontWeight: 400 }}>{jm.y}</span></div>
                <div style={{ fontSize: 13, color: c.muted }}>{jm.d}</div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '32px 100px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-sunken)', borderTop: '1px solid var(--border-default)' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 18 }}>Uri Martín Corella</div>
        <div style={{ fontSize: 13, color: c.muted }}>urimartin@email.com · LinkedIn · GitHub</div>
        <div style={{ fontSize: 13, color: c.muted }}>© 2026</div>
      </footer>
    </div>
  );
}

Object.assign(window, { Homepage });
