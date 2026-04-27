
// Section K — Portfolio-specific + Section L — Motion + Section M — Accessibility

function SectionKPortfolio() {
  const c = { blue: 'var(--color-pm-blue)', green: 'var(--color-data-green)', ochre: 'var(--color-ochre)', purple: 'var(--color-game-purple)' };

  return (
    <div>
      <SectionHeader id="section-k" label="SECTION K" title="Portfolio Specifics" desc="Componentes PM-flavored: case study layout, hypothesis cards, metrics blocks, annotations, footnotes." />

      <ShowcaseCard title="Case Study Hero" desc="Hero de un caso de estudio con problema, role, timeline, métricas de impacto.">
        <div style={{ background: 'var(--bg-sunken)', borderRadius: 'var(--radius-xl)', padding: 40, width: '100%' }}>
          <div style={{ display: 'inline-block', padding: '4px 12px', background: 'var(--color-pm-blue-light)', color: c.blue, fontSize: 12, fontWeight: 700, borderRadius: 'var(--radius-sm)', marginBottom: 16 }}>Serious Game · Research</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 36, fontWeight: 400, letterSpacing: '-1px', margin: '0 0 16px' }}>TFG Pallapupas</h2>
          <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 600, marginBottom: 24 }}>Videojuego terapéutico para reducir la ansiedad preoperatoria en pacientes pediátricos.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {[['Role','Game Designer & Researcher'],['Timeline','Sep 2024 – Jun 2025'],['Team','Solo + ONG Pallapupas'],['Impact','p<0.05 anxiety reduction']].map(([l,v]) => (
              <div key={l}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-tertiary)', letterSpacing: '0.1em', marginBottom: 4 }}>{l.toUpperCase()}</div>
                <div style={{ fontSize: 14, color: 'var(--text-primary)', fontWeight: 500 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Case Study Sections" desc="Problem → Research → Hypothesis → Design → Outcome → Learnings.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, width: '100%' }}>
          {[
            { label: 'PROBLEM', color: 'var(--color-error)', text: 'La ansiedad preoperatoria en pacientes pediátricos (4–12 años) deteriora la cooperación, aumenta la percepción de dolor y alarga la recuperación.' },
            { label: 'RESEARCH', color: c.ochre, text: 'Revisión de literatura sobre serious games en salud mental pediátrica + entrevistas con equipo Pallapupas. Análisis de 14 intervenciones existentes.' },
            { label: 'HYPOTHESIS', color: c.blue, text: 'Si implementamos un videojuego con mecánicas de respiración guiada adaptadas a niños, entonces reduciremos la ansiedad preoperatoria medida con la escala mYPAS.' },
            { label: 'OUTCOME', color: c.green, text: 'Reducción significativa de ansiedad: grupo control 32% vs tratamiento 58% (p=0.03). 92% de satisfacción entre personal sanitario.' },
          ].map((s, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 20, padding: '16px 0', borderBottom: '1px solid var(--border-subtle)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: s.color, letterSpacing: '0.1em', fontWeight: 700 }}>{s.label}</div>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Hypothesis Card" desc='Formato "If X then Y because Z" — guiño científico-PM.'>
        <div style={{ background: 'var(--color-pm-blue-light)', borderLeft: '3px solid var(--color-pm-blue)', borderRadius: '0 var(--radius-lg) var(--radius-lg) 0', padding: 28, maxWidth: 560 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: c.blue, letterSpacing: '0.15em', marginBottom: 12 }}>HYPOTHESIS</div>
          <div style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--text-primary)' }}>
            <strong style={{ color: c.blue }}>If</strong> we implement a breathing-based game for pediatric patients,{' '}
            <strong style={{ color: c.blue }}>then</strong> pre-operative anxiety will decrease by ≥20%,{' '}
            <strong style={{ color: c.blue }}>because</strong> guided breathing activates the parasympathetic nervous system and gamification sustains engagement.
          </div>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Metrics-Impact Block" desc="Antes/después con delta.">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 20, alignItems: 'center', width: 480 }}>
          <div style={{ textAlign: 'center', padding: 20, background: 'var(--bg-sunken)', borderRadius: 'var(--radius-lg)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-tertiary)', letterSpacing: '0.1em', marginBottom: 8 }}>BEFORE</div>
            <div style={{ fontSize: 36, fontWeight: 800, color: 'var(--text-tertiary)' }}>32%</div>
            <div style={{ fontSize: 12, color: 'var(--text-tertiary)', marginTop: 4 }}>anxiety reduction</div>
          </div>
          <div style={{ fontSize: 24, color: c.green, fontWeight: 800 }}>→</div>
          <div style={{ textAlign: 'center', padding: 20, background: 'var(--color-data-green-light)', borderRadius: 'var(--radius-lg)', border: '2px solid var(--color-data-green)' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: c.green, letterSpacing: '0.1em', marginBottom: 8 }}>AFTER</div>
            <div style={{ fontSize: 36, fontWeight: 800, color: c.green }}>58%</div>
            <div style={{ fontSize: 12, color: c.green, marginTop: 4 }}>▲ +26pp uplift</div>
          </div>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Tech Stack Chips" desc="Grupo de tecnologías usadas.">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {['Unity','C#','A/B Testing','mYPAS Scale','Looker','Python','Figma','Git'].map(t => (
            <span key={t} style={{ padding: '5px 14px', background: 'var(--bg-sunken)', border: '1px solid var(--border-default)', fontSize: 13, color: 'var(--text-secondary)', borderRadius: 'var(--radius-md)' }}>{t}</span>
          ))}
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Award / Honor Badge" desc="Matrícula de honor, premio game jam.">
        <div style={{ display: 'flex', gap: 12 }}>
          {[['Premio Extraordinario',c.ochre,'var(--color-ochre-light)'],['8.8 GPA',c.blue,'var(--color-pm-blue-light)'],['🏆 Best Art',c.purple,'var(--color-game-purple-light)'],['Matrícula Honor',c.green,'var(--color-data-green-light)']].map(([l,color,bg]) => (
            <span key={l} style={{ padding: '5px 14px', background: bg, color, fontSize: 12, fontWeight: 700, borderRadius: 'var(--radius-full)', border: `1px solid ${color}22` }}>{l}</span>
          ))}
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Handwritten Annotation" desc="Nota a mano alzada sobre cualquier elemento.">
        <div style={{ position: 'relative', padding: 32, background: 'var(--bg-sunken)', borderRadius: 'var(--radius-lg)' }}>
          <div style={{ fontSize: 16, fontWeight: 600 }}>Therapeutic App</div>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginTop: 8 }}>App de relajación con ASMR y dashboard.</p>
          <div style={{ position: 'absolute', top: -8, right: 16, fontFamily: 'var(--font-annotation)', fontSize: 18, color: 'var(--color-ochre)', transform: 'rotate(-3deg)' }}>
            ← mi proyecto favorito ♥
          </div>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Footnote / Research Note" desc="Clickable footnote estilo académico.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
          <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            La reducción de ansiedad fue medida con la escala mYPAS<sup style={{ color: 'var(--color-pm-blue)', cursor: 'pointer', fontWeight: 700 }}>[1]</sup>, validada internacionalmente para pacientes pediátricos preoperatorios.
          </p>
          <div style={{ padding: '12px 16px', background: 'var(--color-ochre-light)', borderLeft: '3px solid var(--color-ochre)', borderRadius: '0 var(--radius-sm) var(--radius-sm) 0', fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            <strong>[1]</strong> Modified Yale Preoperative Anxiety Scale. Kain et al., 1997. Validación española: López-Roig et al., 2009.
          </div>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Research Note Callout" desc="Nota de investigación destacada.">
        <div style={{ display: 'flex', gap: 16, padding: 20, background: 'var(--color-ochre-light)', borderRadius: 'var(--radius-lg)', maxWidth: 520 }}>
          <div style={{ fontSize: 24, flexShrink: 0 }}>📋</div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--color-ochre)', letterSpacing: '0.12em', marginBottom: 6 }}>RESEARCH NOTE</div>
            <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>Las entrevistas con el equipo de Pallapupas revelaron que la principal barrera no era la ansiedad en sí, sino la falta de herramientas adaptadas a la edad del paciente.</div>
          </div>
        </div>
      </ShowcaseCard>
    </div>
  );
}

function SectionLMotion() {
  return (
    <div>
      <SectionHeader id="section-l" label="SECTION L" title="Motion & Microinteractions" desc="Hover states, transitions, scroll reveals, easter eggs, theme toggle." />

      <ShowcaseCard title="Hover States" desc="Lift, glow, underline animado, color shift.">
        <style>{`
          .hover-lift { transition: transform var(--duration-fast) var(--ease-spring), box-shadow var(--duration-fast) var(--ease-in-out); }
          .hover-lift:hover { transform: translateY(-4px); box-shadow: var(--shadow-lg); }
          .hover-glow { transition: box-shadow var(--duration-base) var(--ease-in-out); }
          .hover-glow:hover { box-shadow: 0 0 20px var(--color-pm-blue), var(--shadow-md); }
          .hover-underline { position: relative; }
          .hover-underline::after { content:''; position:absolute; bottom:-2px; left:0; width:0; height:2px; background:var(--color-pm-blue); transition: width var(--duration-base) var(--ease-out); }
          .hover-underline:hover::after { width: 100%; }
          .hover-color { transition: color var(--duration-fast) var(--ease-in-out), background var(--duration-fast) var(--ease-in-out); }
          .hover-color:hover { color: var(--color-pm-blue); background: var(--color-pm-blue-light); }
        `}</style>
        <Variant label="Lift">
          <div className="hover-lift" style={{ width: 120, height: 80, background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 13, color: 'var(--text-secondary)' }}>Hover me</div>
        </Variant>
        <Variant label="Glow">
          <div className="hover-glow" style={{ width: 120, height: 80, background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: 13, color: 'var(--text-secondary)' }}>Hover me</div>
        </Variant>
        <Variant label="Underline">
          <a href="#" className="hover-underline" style={{ fontSize: 16, color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 500 }}>Animated underline</a>
        </Variant>
        <Variant label="Color shift">
          <div className="hover-color" style={{ padding: '10px 20px', borderRadius: 'var(--radius-md)', cursor: 'pointer', fontSize: 14 }}>Hover me</div>
        </Variant>
      </ShowcaseCard>

      <ShowcaseCard title="Section Reveal (CSS)" desc="Fade-up + stagger on scroll usando CSS animation.">
        <style>{`
          @keyframes fadeUp { from { opacity:0; transform:translateY(20px) } to { opacity:1; transform:translateY(0) } }
          .reveal-item { animation: fadeUp var(--duration-slow) var(--ease-out) both; }
        `}</style>
        <div style={{ display: 'flex', gap: 12 }}>
          {[0,1,2].map(i => (
            <div key={i} className="reveal-item" style={{ animationDelay: `${i * 100}ms`, width: 120, height: 80, background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: 'var(--text-secondary)' }}>Card {i + 1}</div>
          ))}
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Easter Egg: Game Jam" desc="🎮 Dashed card que revela contenido oculto.">
        <div style={{ padding: '16px 20px', background: 'var(--color-game-purple-light)', border: '1px dashed var(--color-game-purple)', borderRadius: 'var(--radius-md)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12, maxWidth: 480 }}>
          <span style={{ fontSize: 20 }}>🎮</span>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-game-purple)' }}>Easter egg: Game Jams</div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Click to reveal hidden content</div>
          </div>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Theme Toggle Animation" desc="Smooth transition between light and dark.">
        <div style={{ display: 'flex', gap: 12 }}>
          <Variant label="Light state">
            <div style={{ width: 52, height: 28, borderRadius: 'var(--radius-full)', background: 'var(--border-strong)', position: 'relative', cursor: 'pointer' }}>
              <div style={{ width: 24, height: 24, borderRadius: 'var(--radius-full)', background: '#fff', position: 'absolute', top: 2, left: 2, boxShadow: 'var(--shadow-xs)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>☀️</div>
            </div>
          </Variant>
          <Variant label="Dark state">
            <div style={{ width: 52, height: 28, borderRadius: 'var(--radius-full)', background: 'var(--color-pm-blue)', position: 'relative', cursor: 'pointer' }}>
              <div style={{ width: 24, height: 24, borderRadius: 'var(--radius-full)', background: '#fff', position: 'absolute', top: 2, left: 26, boxShadow: 'var(--shadow-xs)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>🌙</div>
            </div>
          </Variant>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Animation Tokens Reference" desc="Duraciones y easings del sistema.">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, width: '100%' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-tertiary)', marginBottom: 8 }}>DURATIONS</div>
            {[['fast','150ms'],['base','250ms'],['slow','400ms'],['slower','600ms']].map(([n,v]) => (
              <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '6px 0' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-pm-blue)', width: 60 }}>{n}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-secondary)' }}>{v}</span>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-tertiary)', marginBottom: 8 }}>EASINGS</div>
            {[['ease-in','cubic-bezier(0.4,0,1,1)'],['ease-out','cubic-bezier(0,0,0.2,1)'],['ease-in-out','cubic-bezier(0.4,0,0.2,1)'],['spring','cubic-bezier(0.34,1.56,0.64,1)']].map(([n,v]) => (
              <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '6px 0' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-pm-blue)', width: 80 }}>{n}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-tertiary)' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </ShowcaseCard>
    </div>
  );
}

function SectionMAccessibility() {
  return (
    <div>
      <SectionHeader id="section-m" label="SECTION M" title="Accessibility" desc="Focus rings, contraste AA, reduced-motion, tap targets." />

      <ShowcaseCard title="Focus Ring" desc="Visible y consistente en todos los elementos interactivos.">
        <div style={{ display: 'flex', gap: 16 }}>
          {['Button', 'Input', 'Link', 'Card'].map(el => (
            <div key={el} style={{
              padding: '10px 20px', background: 'var(--bg-elevated)', border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-md)', outline: '2px solid var(--focus-ring)', outlineOffset: 2,
              fontSize: 13, color: 'var(--text-secondary)',
            }}>{el}</div>
          ))}
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Contrast Check (AA)" desc="Todos los colores de texto pasan WCAG AA sobre sus fondos.">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, width: '100%' }}>
          {[
            ['text-primary on bg-base','var(--text-primary)','var(--bg-base)','AAA ✓'],
            ['text-secondary on bg-base','var(--text-secondary)','var(--bg-base)','AA ✓'],
            ['pm-blue on white','var(--color-pm-blue)','#fff','AA ✓'],
            ['ochre on ochre-light','var(--color-ochre)','var(--color-ochre-light)','AA ✓'],
            ['data-green on green-light','var(--color-data-green)','var(--color-data-green-light)','AA ✓'],
            ['game-purple on purple-light','var(--color-game-purple)','var(--color-game-purple-light)','AA ✓'],
          ].map(([desc, fg, bg, rating]) => (
            <div key={desc} style={{ background: bg, padding: 16, borderRadius: 'var(--radius-md)', border: '1px solid var(--border-default)' }}>
              <div style={{ color: fg, fontSize: 14, fontWeight: 600, marginBottom: 6 }}>Sample Text</div>
              <div style={{ fontSize: 11, color: fg, opacity: 0.7 }}>{desc}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-data-green)', marginTop: 8 }}>{rating}</div>
            </div>
          ))}
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Reduced Motion" desc="@media (prefers-reduced-motion: reduce) desactiva animaciones.">
        <div style={{ padding: 20, background: 'var(--bg-sunken)', borderRadius: 'var(--radius-lg)', maxWidth: 520 }}>
          <pre style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
{`@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}`}
          </pre>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Minimum Tap Targets" desc="44px mínimo para todos los elementos interactivos.">
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <div style={{ width: 44, height: 44, border: '2px dashed var(--color-pm-blue)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--color-pm-blue)' }}>44px</div>
          <div style={{ fontSize: 13, color: 'var(--text-secondary)', maxWidth: 300 }}>Todos los botones, links, checkboxes y controles interactivos tienen un área mínima de clic/toque de 44×44px.</div>
        </div>
      </ShowcaseCard>
    </div>
  );
}

Object.assign(window, { SectionKPortfolio, SectionLMotion, SectionMAccessibility });
