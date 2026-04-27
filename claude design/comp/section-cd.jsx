
// Section C — Buttons & Actions + Section D — Forms & Inputs

function SectionCButtons() {
  const [loading, setLoading] = React.useState(false);
  const [toggled, setToggled] = React.useState(false);
  const [segIdx, setSegIdx] = React.useState(0);

  const Spinner = ({ size = 16, color = '#fff' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ animation: 'spin 0.8s linear infinite' }}>
      <circle cx="12" cy="12" r="10" fill="none" stroke={color} strokeWidth="3" strokeDasharray="32 32" strokeLinecap="round" />
    </svg>
  );

  const btnBase = {
    fontFamily: 'var(--font-body)', fontWeight: 600, borderRadius: 'var(--radius-md)',
    cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    gap: 8, border: 'none', transition: 'all var(--duration-fast) var(--ease-in-out)',
    textDecoration: 'none', whiteSpace: 'nowrap',
  };
  const sizes = {
    xs: { fontSize: 12, padding: '5px 10px' },
    sm: { fontSize: 13, padding: '7px 14px' },
    md: { fontSize: 14, padding: '10px 20px' },
    lg: { fontSize: 16, padding: '14px 28px' },
  };
  const variants = {
    primary: { background: 'var(--color-pm-blue)', color: '#fff' },
    secondary: { background: 'var(--bg-sunken)', color: 'var(--text-primary)', border: '1px solid var(--border-default)' },
    ghost: { background: 'transparent', color: 'var(--text-secondary)' },
    outline: { background: 'transparent', color: 'var(--color-pm-blue)', border: '1.5px solid var(--color-pm-blue)' },
    destructive: { background: 'var(--color-error)', color: '#fff' },
    link: { background: 'transparent', color: 'var(--color-pm-blue)', padding: 0, textDecoration: 'underline' },
  };

  const Btn = ({ variant = 'primary', size = 'md', disabled, children, style: s }) => (
    <button disabled={disabled} style={{ ...btnBase, ...sizes[size], ...variants[variant], opacity: disabled ? 0.45 : 1, ...s }}>{children}</button>
  );

  return (
    <div>
      <SectionHeader id="section-c" label="SECTION C" title="Buttons & Actions" desc="Variantes, tamaños, estados, iconos, agrupaciones." />
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>

      <ShowcaseCard title="Variants" desc="Primary, secondary, ghost, outline, destructive, link.">
        {Object.keys(variants).map(v => <Variant key={v} label={v}><Btn variant={v}>Button</Btn></Variant>)}
      </ShowcaseCard>

      <ShowcaseCard title="Sizes" desc="xs → lg across all variants.">
        {['xs','sm','md','lg'].map(s => <Variant key={s} label={s}><Btn size={s}>Button</Btn></Variant>)}
      </ShowcaseCard>

      <ShowcaseCard title="States" desc="Default, hover, focus, disabled, loading.">
        <Variant label="default"><Btn>Default</Btn></Variant>
        <Variant label="hover (simulated)"><Btn style={{ filter: 'brightness(1.1)', boxShadow: 'var(--shadow-sm)' }}>Hover</Btn></Variant>
        <Variant label="focus"><Btn style={{ outline: '2px solid var(--focus-ring)', outlineOffset: 2 }}>Focus</Btn></Variant>
        <Variant label="disabled"><Btn disabled>Disabled</Btn></Variant>
        <Variant label="loading"><Btn><Spinner size={14} /> Loading…</Btn></Variant>
      </ShowcaseCard>

      <ShowcaseCard title="With Icons" desc="Left, right, icon-only.">
        <Variant label="icon left"><Btn>↓ Download CV</Btn></Variant>
        <Variant label="icon right"><Btn>Projects →</Btn></Variant>
        <Variant label="icon only"><Btn style={{ padding: '10px 10px', borderRadius: 'var(--radius-md)' }}>↗</Btn></Variant>
        <Variant label="with badge"><Btn>Notifications <span style={{ background: '#fff3', padding: '1px 7px', borderRadius: 99, fontSize: 11, marginLeft: 4 }}>3</span></Btn></Variant>
      </ShowcaseCard>

      <ShowcaseCard title="Button Group / Segmented Control" desc="Agrupación de botones para opciones mutuamente excluyentes.">
        <div style={{ display: 'inline-flex', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-default)' }}>
          {['Product','Data','Psychology'].map((label, i) => (
            <button key={i} onClick={() => setSegIdx(i)} style={{
              ...btnBase, fontSize: 13, padding: '8px 18px', borderRadius: 0,
              background: segIdx === i ? 'var(--color-pm-blue)' : 'var(--bg-elevated)',
              color: segIdx === i ? '#fff' : 'var(--text-secondary)',
              borderRight: i < 2 ? '1px solid var(--border-default)' : 'none',
            }}>{label}</button>
          ))}
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Toggle Button" desc="On/off state.">
        <button onClick={() => setToggled(!toggled)} style={{
          ...btnBase, ...sizes.md,
          background: toggled ? 'var(--color-pm-blue)' : 'var(--bg-elevated)',
          color: toggled ? '#fff' : 'var(--text-secondary)',
          border: `1.5px solid ${toggled ? 'var(--color-pm-blue)' : 'var(--border-default)'}`,
        }}>
          {toggled ? '★' : '☆'} Favorito
        </button>
      </ShowcaseCard>

      <ShowcaseCard title="Floating Action Button" desc="Para acciones principales flotantes.">
        <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-full)', background: 'var(--color-pm-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-lg)', cursor: 'pointer', fontSize: 24, color: '#fff' }}>+</div>
      </ShowcaseCard>

      <ShowcaseCard title="Hero CTA" desc="El botón grande del hero de la homepage.">
        <div style={{ display: 'flex', gap: 12 }}>
          <a href="#" style={{ ...btnBase, ...sizes.lg, ...variants.primary, borderRadius: 'var(--radius-md)' }}>Ver CV →</a>
          <a href="#" style={{ ...btnBase, ...sizes.lg, ...variants.secondary, borderRadius: 'var(--radius-md)' }}>Proyectos</a>
        </div>
      </ShowcaseCard>
    </div>
  );
}

function SectionDForms() {
  const [val, setVal] = React.useState('');
  const [checked, setChecked] = React.useState([false, true, false]);
  const [radio, setRadio] = React.useState(0);
  const [switched, setSwitched] = React.useState(true);
  const [slider, setSlider] = React.useState(60);
  const [textArea, setTextArea] = React.useState('');

  const fieldBase = {
    fontFamily: 'var(--font-body)', fontSize: 14, padding: '10px 14px',
    borderRadius: 'var(--radius-md)', border: '1px solid var(--border-default)',
    background: 'var(--bg-elevated)', color: 'var(--text-primary)', width: '100%',
    outline: 'none', transition: 'border-color var(--duration-fast) var(--ease-in-out)',
  };

  const FieldWrapper = ({ label, help, error, children }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: 320 }}>
      {label && <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>{label}</label>}
      {children}
      {help && !error && <div style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>{help}</div>}
      {error && <div style={{ fontSize: 12, color: 'var(--color-error)' }}>⚠ {error}</div>}
    </div>
  );

  return (
    <div>
      <SectionHeader id="section-d" label="SECTION D" title="Forms & Inputs" desc="Campos, controles y patrones de formulario." />

      <ShowcaseCard title="Text Input" desc="Default, focus, error, disabled, with icon.">
        <FieldWrapper label="Nombre" help="Tu nombre completo.">
          <input type="text" placeholder="Uri Martín Corella" style={fieldBase} />
        </FieldWrapper>
        <FieldWrapper label="Email" error="Introduce un email válido.">
          <input type="email" value="uri@invalid" style={{ ...fieldBase, borderColor: 'var(--color-error)' }} readOnly />
        </FieldWrapper>
        <FieldWrapper label="Disabled">
          <input type="text" value="No editable" disabled style={{ ...fieldBase, opacity: 0.5, cursor: 'not-allowed' }} />
        </FieldWrapper>
        <FieldWrapper label="With prefix">
          <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            <span style={{ padding: '10px 12px', background: 'var(--bg-sunken)', fontSize: 13, color: 'var(--text-tertiary)', borderRight: '1px solid var(--border-default)' }}>https://</span>
            <input type="text" placeholder="urimartin.com" style={{ ...fieldBase, border: 'none', borderRadius: 0 }} />
          </div>
        </FieldWrapper>
      </ShowcaseCard>

      <ShowcaseCard title="Textarea" desc="Con contador de caracteres.">
        <FieldWrapper label="Bio" help={`${textArea.length}/200 caracteres`}>
          <textarea value={textArea} onChange={e => setTextArea(e.target.value.slice(0,200))} placeholder="Escribe una breve bio..." rows={4} style={{ ...fieldBase, resize: 'vertical', fontFamily: 'var(--font-body)' }} />
        </FieldWrapper>
      </ShowcaseCard>

      <ShowcaseCard title="Select / Dropdown" desc="Nativo con estilo.">
        <FieldWrapper label="Categoría">
          <select style={{ ...fieldBase, appearance: 'none', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath d=\'M3 5l3 3 3-3\' fill=\'none\' stroke=\'%236B6558\' stroke-width=\'1.5\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', paddingRight: 36 }}>
            <option>Product</option><option>Data</option><option>Psychology</option><option>Game & Tech</option>
          </select>
        </FieldWrapper>
      </ShowcaseCard>

      <ShowcaseCard title="Checkbox" desc="Single, group, indeterminate.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {['User Research', 'A/B Testing', 'Roadmapping'].map((label, i) => (
            <label key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontSize: 14, color: 'var(--text-secondary)' }}>
              <div onClick={() => { const c = [...checked]; c[i] = !c[i]; setChecked(c); }} style={{
                width: 18, height: 18, borderRadius: 'var(--radius-sm)', border: '1.5px solid var(--border-strong)',
                background: checked[i] ? 'var(--color-pm-blue)' : 'var(--bg-elevated)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                transition: 'all var(--duration-fast) var(--ease-in-out)',
              }}>
                {checked[i] && <span style={{ color: '#fff', fontSize: 12, lineHeight: 1 }}>✓</span>}
              </div>
              {label}
            </label>
          ))}
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Radio Group" desc="Selección única.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {['Sí', 'No', 'Tal vez'].map((label, i) => (
            <label key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', fontSize: 14, color: 'var(--text-secondary)' }} onClick={() => setRadio(i)}>
              <div style={{
                width: 18, height: 18, borderRadius: 'var(--radius-full)', border: '1.5px solid var(--border-strong)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {radio === i && <div style={{ width: 10, height: 10, borderRadius: 'var(--radius-full)', background: 'var(--color-pm-blue)' }}></div>}
              </div>
              {label}
            </label>
          ))}
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Switch / Toggle" desc="On/off toggle.">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div onClick={() => setSwitched(!switched)} style={{
            width: 44, height: 24, borderRadius: 'var(--radius-full)', cursor: 'pointer',
            background: switched ? 'var(--color-pm-blue)' : 'var(--border-strong)',
            position: 'relative', transition: 'background var(--duration-fast) var(--ease-in-out)',
          }}>
            <div style={{
              width: 20, height: 20, borderRadius: 'var(--radius-full)', background: '#fff',
              position: 'absolute', top: 2, left: switched ? 22 : 2,
              transition: 'left var(--duration-fast) var(--ease-spring)', boxShadow: 'var(--shadow-xs)',
            }}></div>
          </div>
          <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{switched ? 'Enabled' : 'Disabled'}</span>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Slider" desc="Single range.">
        <FieldWrapper label={`Confidence: ${slider}%`}>
          <input type="range" min="0" max="100" value={slider} onChange={e => setSlider(e.target.value)}
            style={{ width: '100%', accentColor: 'var(--color-pm-blue)' }} />
        </FieldWrapper>
      </ShowcaseCard>

      <ShowcaseCard title="File Upload / Dropzone" desc="Zona de arrastre.">
        <div style={{
          border: '2px dashed var(--border-default)', borderRadius: 'var(--radius-lg)',
          padding: '40px 32px', textAlign: 'center', color: 'var(--text-tertiary)',
          background: 'var(--bg-sunken)', width: 400, cursor: 'pointer',
        }}>
          <div style={{ fontSize: 28, marginBottom: 8 }}>↑</div>
          <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-secondary)' }}>Arrastra archivos aquí</div>
          <div style={{ fontSize: 12, marginTop: 4 }}>o haz clic para seleccionar (PNG, JPG, PDF)</div>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Search Bar" desc="Con placeholder y lupa.">
        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', overflow: 'hidden', width: 360, background: 'var(--bg-elevated)' }}>
          <span style={{ padding: '10px 12px', color: 'var(--text-tertiary)', fontSize: 16 }}>⌕</span>
          <input type="text" placeholder="Buscar proyectos, skills…" style={{ ...fieldBase, border: 'none', borderRadius: 0, paddingLeft: 0 }} />
          <kbd style={{ marginRight: 10, fontSize: 11, padding: '2px 6px' }}>⌘K</kbd>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Contact Form Example" desc="Formulario completo.">
        <form style={{ display: 'flex', flexDirection: 'column', gap: 20, width: 400 }} onSubmit={e => e.preventDefault()}>
          <FieldWrapper label="Nombre"><input type="text" placeholder="Tu nombre" style={fieldBase} /></FieldWrapper>
          <FieldWrapper label="Email"><input type="email" placeholder="tu@email.com" style={fieldBase} /></FieldWrapper>
          <FieldWrapper label="Mensaje"><textarea rows={4} placeholder="¿En qué puedo ayudarte?" style={{ ...fieldBase, resize: 'vertical', fontFamily: 'var(--font-body)' }} /></FieldWrapper>
          <button style={{
            fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, padding: '12px 24px',
            background: 'var(--color-pm-blue)', color: '#fff', border: 'none',
            borderRadius: 'var(--radius-md)', cursor: 'pointer',
          }}>Enviar mensaje →</button>
        </form>
      </ShowcaseCard>
    </div>
  );
}

Object.assign(window, { SectionCButtons, SectionDForms });
