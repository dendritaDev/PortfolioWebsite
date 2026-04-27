
// Section G — Data Viz + Section H — Feedback & States

function SectionGDataViz() {
  const c = { blue: 'var(--color-pm-blue)', green: 'var(--color-data-green)', ochre: 'var(--color-ochre)', purple: 'var(--color-game-purple)' };

  const Sparkline = ({ vals, color = c.blue, w = 100, h = 32 }) => {
    const max = Math.max(...vals), min = Math.min(...vals);
    const pts = vals.map((v, i) => `${(i/(vals.length-1))*w},${h-4-((v-min)/(max-min||1))*(h-8)}`).join(' ');
    return (
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <polyline points={pts} fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx={(w)} cy={parseFloat(pts.split(' ').pop().split(',')[1])} r="2.5" fill={color} />
      </svg>
    );
  };

  const BarChart = ({ data, color = c.blue, big }) => {
    const max = Math.max(...data.map(d => d.v));
    const h = big ? 160 : 60;
    return (
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: big ? 12 : 5, height: h }}>
        {data.map((d, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            {big && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-tertiary)' }}>{d.v}</span>}
            <div style={{ width: big ? 32 : 16, background: color, height: `${(d.v/max)*(h-20)}px`, borderRadius: '3px 3px 0 0', opacity: 0.85 }}></div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: big ? 11 : 9, color: 'var(--text-tertiary)' }}>{d.l}</span>
          </div>
        ))}
      </div>
    );
  };

  const LineChart = ({ color = c.blue, w = 300, h = 120 }) => {
    const vals = [20,35,28,52,45,60,55,72,68,80];
    const max = Math.max(...vals), min = Math.min(...vals);
    const pts = vals.map((v,i) => `${(i/(vals.length-1))*w},${h-16-((v-min)/(max-min))*(h-32)}`);
    return (
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ background: 'var(--bg-sunken)', borderRadius: 'var(--radius-md)', padding: 8 }}>
        <defs><linearGradient id="areaG" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={color} stopOpacity="0.2"/><stop offset="100%" stopColor={color} stopOpacity="0"/></linearGradient></defs>
        <polygon points={`0,${h-16} ${pts.join(' ')} ${w},${h-16}`} fill="url(#areaG)" />
        <polyline points={pts.join(' ')} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      </svg>
    );
  };

  const DonutChart = ({ segments, size = 100 }) => {
    const r = 36, cx = 50, cy = 50, C = 2 * Math.PI * r;
    let offset = 0;
    return (
      <svg width={size} height={size} viewBox="0 0 100 100">
        {segments.map((s, i) => {
          const dash = (s.pct / 100) * C;
          const el = <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={s.color} strokeWidth="12"
            strokeDasharray={`${dash} ${C - dash}`} strokeDashoffset={-offset} transform="rotate(-90 50 50)" />;
          offset += dash;
          return el;
        })}
        <text x="50" y="54" textAnchor="middle" fontFamily="var(--font-body)" fontSize="14" fontWeight="800" fill="var(--text-primary)">100%</text>
      </svg>
    );
  };

  return (
    <div>
      <SectionHeader id="section-g" label="SECTION G" title="Data Viz" desc="Sparklines, charts, heatmaps, funnels, A/B blocks, timelines — la firma del concepto Hybrid." />

      <ShowcaseCard title="Sparkline" desc="Inline micro-chart.">
        <Variant label="Sessions"><Sparkline vals={[3,5,4,7,6,8,10,9,12]} color={c.blue} /></Variant>
        <Variant label="GPA trend"><Sparkline vals={[7,7.5,8,7.8,8.2,8.8]} color={c.green} /></Variant>
        <Variant label="Game jams"><Sparkline vals={[0,0,1,1,1,2]} color={c.purple} /></Variant>
      </ShowcaseCard>

      <ShowcaseCard title="Bar Chart" desc="Pequeño y grande.">
        <Variant label="Small">
          <BarChart data={[{l:'Psych',v:95},{l:'Data',v:80},{l:'Game',v:88},{l:'PM',v:82}]} color={c.blue} />
        </Variant>
        <Variant label="Large">
          <BarChart data={[{l:'Q1',v:45},{l:'Q2',v:62},{l:'Q3',v:58},{l:'Q4',v:78},{l:'Q5',v:85}]} color={c.green} big />
        </Variant>
      </ShowcaseCard>

      <ShowcaseCard title="Line Chart with Area" desc="Tendencia con relleno.">
        <LineChart color="var(--color-pm-blue)" />
      </ShowcaseCard>

      <ShowcaseCard title="Donut / Pie" desc="Distribución de skills.">
        <DonutChart segments={[
          {pct:30,color:'var(--color-pm-blue)'},{pct:25,color:'var(--color-data-green)'},
          {pct:25,color:'var(--color-ochre)'},{pct:20,color:'var(--color-game-purple)'},
        ]} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[['Product','pm-blue'],['Data','data-green'],['Psychology','ochre'],['Game','game-purple']].map(([l,c]) => (
            <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 10, height: 10, borderRadius: 2, background: `var(--color-${c})` }}></div>
              <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{l}</span>
            </div>
          ))}
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Funnel Chart" desc="Típico PM — conversion funnel.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: 400 }}>
          {[['Visitors',100,'100%'],['Engaged',68,'68%'],['Signed Up',34,'34%'],['Activated',22,'22%'],['Retained',14,'14%']].map(([l,w,p]) => (
            <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 90, fontSize: 12, color: 'var(--text-secondary)', textAlign: 'right' }}>{l}</div>
              <div style={{ height: 24, width: `${w*2.5}px`, background: 'var(--color-pm-blue)', borderRadius: 4, opacity: 0.7 + (w/400) }}></div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-tertiary)' }}>{p}</span>
            </div>
          ))}
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="A/B Test Result Block" desc="Variant A vs B con uplift e intervalo de confianza.">
        <div style={{ background: 'var(--bg-sunken)', borderRadius: 'var(--radius-lg)', padding: 24, width: 480 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-tertiary)', letterSpacing: '0.1em', marginBottom: 16 }}>A/B TEST · ANXIETY REDUCTION</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div style={{ background: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)', padding: 16, border: '1px solid var(--border-default)' }}>
              <div style={{ fontSize: 12, color: 'var(--text-tertiary)', marginBottom: 8 }}>Control (A)</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--text-secondary)' }}>32%</div>
              <div style={{ fontSize: 11, color: 'var(--text-tertiary)', marginTop: 4 }}>N=24 · CI [24%, 41%]</div>
            </div>
            <div style={{ background: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)', padding: 16, border: '2px solid var(--color-data-green)' }}>
              <div style={{ fontSize: 12, color: 'var(--color-data-green)', marginBottom: 8 }}>Treatment (B) ★</div>
              <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--color-data-green)' }}>58%</div>
              <div style={{ fontSize: 11, color: 'var(--text-tertiary)', marginTop: 4 }}>N=24 · CI [48%, 68%]</div>
            </div>
          </div>
          <div style={{ marginTop: 16, padding: '10px 14px', background: 'var(--color-data-green-light)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-data-green)' }}>
            ▲ +26pp uplift · p=0.03 · Significant at α=0.05
          </div>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Timeline" desc="Horizontal y vertical.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%' }}>
          <Variant label="Vertical timeline">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, paddingLeft: 20, borderLeft: '2px solid var(--border-default)' }}>
              {[['2019','Inicio Psicología UAB','ochre'],['2021','Inicio Game Dev UPC','game-purple'],['2023','Graduado Psicología · Premio Extraordinario','ochre'],['2023','Inicio Data Science UOC','data-green'],['2025','Graduado Game Dev · TFG Pallapupas','game-purple']].map(([y,e,col],i) => (
                <div key={i} style={{ position: 'relative', paddingBottom: 20, paddingLeft: 20 }}>
                  <div style={{ position: 'absolute', left: -27, top: 2, width: 12, height: 12, borderRadius: 'var(--radius-full)', background: `var(--color-${col})`, border: '2px solid var(--bg-elevated)' }}></div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: `var(--color-${col})`, marginBottom: 4 }}>{y}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{e}</div>
                </div>
              ))}
            </div>
          </Variant>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Inline Data Callout" desc="La firma Hybrid: el dato dentro del texto narrativo.">
        <p style={{ fontSize: 15, lineHeight: 1.9, color: 'var(--text-secondary)', maxWidth: 600 }}>
          El videojuego fue evaluado con{' '}
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, padding: '2px 8px', background: 'var(--color-data-green-light)', color: 'var(--color-data-green)', borderRadius: 3, fontWeight: 600 }}>N=48</span>
          {' '}pacientes y demostró una reducción significativa de ansiedad (
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, padding: '2px 8px', background: 'var(--color-data-green-light)', color: 'var(--color-data-green)', borderRadius: 3, fontWeight: 600 }}>p&lt;0.05</span>
          ) en el grupo experimental frente al control.
        </p>
      </ShowcaseCard>
    </div>
  );
}

function SectionHFeedback() {
  const [showToast, setShowToast] = React.useState(null);

  const Spinner = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ animation: 'spin 0.8s linear infinite' }}>
      <circle cx="12" cy="12" r="10" fill="none" stroke="var(--color-pm-blue)" strokeWidth="2.5" strokeDasharray="32 32" strokeLinecap="round" />
    </svg>
  );

  const SkeletonBlock = ({ w = '100%', h = 16, r = 4 }) => (
    <div style={{ width: w, height: h, borderRadius: r, background: 'var(--border-default)', animation: 'pulse 1.5s ease-in-out infinite' }}></div>
  );

  const ProgressBar = ({ pct = 60, color = 'var(--color-pm-blue)', label, segmented }) => (
    <div style={{ width: 280 }}>
      {label && <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{label}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color }}>{pct}%</span>
      </div>}
      <div style={{ height: 8, background: 'var(--border-default)', borderRadius: 'var(--radius-full)', overflow: 'hidden', display: segmented ? 'flex' : 'block', gap: 2 }}>
        {segmented ? (
          [...Array(5)].map((_, i) => <div key={i} style={{ flex: 1, background: i < Math.round(pct/20) ? color : 'var(--border-default)', borderRadius: 2 }}></div>)
        ) : (
          <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: 'var(--radius-full)', transition: 'width var(--duration-slow) var(--ease-in-out)' }}></div>
        )}
      </div>
    </div>
  );

  const Toast = ({ type, msg }) => {
    const cfg = { success: ['var(--color-success)','var(--color-success-light)','✓'], error: ['var(--color-error)','var(--color-error-light)','✕'], warning: ['var(--color-warning)','var(--color-warning-light)','⚠'], info: ['var(--color-info)','var(--color-info-light)','ℹ'] };
    const [c,bg,icon] = cfg[type];
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 20px', background: bg, border: `1px solid ${c}`, borderRadius: 'var(--radius-md)', minWidth: 300 }}>
        <span style={{ color: c, fontSize: 16, fontWeight: 700 }}>{icon}</span>
        <span style={{ fontSize: 13, color: 'var(--text-primary)', flex: 1 }}>{msg}</span>
        <span style={{ color: 'var(--text-tertiary)', cursor: 'pointer', fontSize: 16 }}>×</span>
      </div>
    );
  };

  return (
    <div>
      <SectionHeader id="section-h" label="SECTION H" title="Feedback & States" desc="Loading, skeletons, progress, toasts, banners, empty/error states." />
      <style>{`@keyframes pulse { 0%,100% { opacity: 1 } 50% { opacity: 0.4 } } @keyframes spin { to { transform: rotate(360deg) } }`}</style>

      <ShowcaseCard title="Loading Spinners" desc="3 tamaños.">
        <Variant label="sm"><Spinner size={16} /></Variant>
        <Variant label="md"><Spinner size={24} /></Variant>
        <Variant label="lg"><Spinner size={40} /></Variant>
      </ShowcaseCard>

      <ShowcaseCard title="Skeleton Loaders" desc="Card, párrafo, avatar, dashboard tile.">
        <div style={{ display: 'flex', gap: 24 }}>
          <Variant label="Card skeleton" style={{ width: 240 }}>
            <div style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <SkeletonBlock h={120} r={8} /><SkeletonBlock w="60%" /><SkeletonBlock /><SkeletonBlock w="40%" />
            </div>
          </Variant>
          <Variant label="Text skeleton">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 200 }}>
              <SkeletonBlock /><SkeletonBlock /><SkeletonBlock w="70%" />
            </div>
          </Variant>
          <Variant label="Avatar">
            <SkeletonBlock w={48} h={48} r={999} />
          </Variant>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Progress Bars" desc="Linear, segmented, with label.">
        <Variant label="Default"><ProgressBar pct={60} label="Completion" /></Variant>
        <Variant label="Segmented"><ProgressBar pct={60} segmented label="Level" color="var(--color-data-green)" /></Variant>
      </ShowcaseCard>

      <ShowcaseCard title="Toast / Notification" desc="Success, error, warning, info.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Toast type="success" msg="Proyecto guardado correctamente." />
          <Toast type="error" msg="Error al cargar los datos." />
          <Toast type="warning" msg="Tu sesión expira en 5 minutos." />
          <Toast type="info" msg="Nueva versión disponible." />
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Banner / Alert" desc="Dismissible.">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 20px', background: 'var(--color-info-light)', border: '1px solid var(--color-info)', borderRadius: 'var(--radius-md)', width: 480 }}>
          <span style={{ color: 'var(--color-info)', fontSize: 16 }}>ℹ</span>
          <span style={{ fontSize: 13, color: 'var(--text-primary)', flex: 1 }}>Este portfolio está en construcción. Algunas secciones pueden estar incompletas.</span>
          <span style={{ color: 'var(--text-tertiary)', cursor: 'pointer', fontSize: 16 }}>×</span>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="404 / Error State" desc="Página no encontrada.">
        <div style={{ textAlign: 'center', padding: '48px 32px', width: 400 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 72, color: 'var(--border-default)', lineHeight: 1 }}>404</div>
          <div style={{ fontSize: 18, fontWeight: 600, marginTop: 12 }}>Página no encontrada</div>
          <div style={{ fontSize: 13, color: 'var(--text-tertiary)', marginTop: 8, marginBottom: 24 }}>La página que buscas no existe o ha sido movida.</div>
          <a href="#" style={{ padding: '10px 20px', background: 'var(--color-pm-blue)', color: '#fff', fontSize: 14, fontWeight: 600, borderRadius: 'var(--radius-md)', textDecoration: 'none' }}>← Volver al inicio</a>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Reading Progress Bar" desc="Sticky top, indica scroll del artículo.">
        <div style={{ width: '100%', height: 3, background: 'var(--border-default)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
          <div style={{ width: '45%', height: '100%', background: 'var(--color-pm-blue)' }}></div>
        </div>
      </ShowcaseCard>
    </div>
  );
}

Object.assign(window, { SectionGDataViz, SectionHFeedback });
