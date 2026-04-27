
// Section I — Overlays + Section J — Media

function SectionIOverlays() {
  const [modal, setModal] = React.useState(null); // null | 'sm' | 'md' | 'lg'
  const [tooltip, setTooltip] = React.useState(null);

  const Backdrop = ({ children, onClose }) => (
    <div style={{ position: 'relative', width: '100%', minHeight: 300, background: 'var(--bg-overlay)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32 }}>
      {children}
    </div>
  );

  const ModalShell = ({ size = 'md', title, children }) => {
    const widths = { sm: 360, md: 480, lg: 640 };
    return (
      <div style={{ width: widths[size], background: 'var(--bg-elevated)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)', overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid var(--border-default)' }}>
          <span style={{ fontWeight: 700, fontSize: 16 }}>{title}</span>
          <span style={{ cursor: 'pointer', fontSize: 20, color: 'var(--text-tertiary)', lineHeight: 1 }}>×</span>
        </div>
        <div style={{ padding: 24 }}>{children}</div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, padding: '12px 24px', borderTop: '1px solid var(--border-default)' }}>
          <button style={{ fontFamily: 'var(--font-body)', fontSize: 13, padding: '8px 18px', background: 'var(--bg-sunken)', color: 'var(--text-secondary)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>Cancelar</button>
          <button style={{ fontFamily: 'var(--font-body)', fontSize: 13, padding: '8px 18px', background: 'var(--color-pm-blue)', color: '#fff', border: 'none', borderRadius: 'var(--radius-md)', cursor: 'pointer', fontWeight: 600 }}>Confirmar</button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <SectionHeader id="section-i" label="SECTION I" title="Overlays" desc="Modals, drawers, popovers, tooltips, command palette, lightbox, confirm dialog." />

      <ShowcaseCard title="Modal / Dialog" desc="Tamaños sm, md, lg.">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
          {['sm', 'md', 'lg'].map(size => (
            <Variant key={size} label={size}>
              <Backdrop><ModalShell size={size} title={`Dialog ${size.toUpperCase()}`}>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>¿Estás seguro de que quieres continuar? Esta acción no se puede deshacer.</p>
              </ModalShell></Backdrop>
            </Variant>
          ))}
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Drawer / Side Panel" desc="Panel lateral deslizable.">
        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', minHeight: 300, background: 'var(--bg-overlay)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
          <div style={{ width: 340, background: 'var(--bg-elevated)', boxShadow: 'var(--shadow-xl)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid var(--border-default)' }}>
              <span style={{ fontWeight: 700, fontSize: 15 }}>Filtros</span>
              <span style={{ cursor: 'pointer', fontSize: 20, color: 'var(--text-tertiary)' }}>×</span>
            </div>
            <div style={{ padding: 24, flex: 1 }}>
              <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 16 }}>Categoría</div>
              {['Product','Data','Psychology','Game'].map(c => (
                <label key={c} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', fontSize: 14, color: 'var(--text-secondary)', cursor: 'pointer' }}>
                  <div style={{ width: 16, height: 16, borderRadius: 3, border: '1.5px solid var(--border-strong)' }}></div>
                  {c}
                </label>
              ))}
            </div>
          </div>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Popover" desc="Contenido flotante con flecha.">
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <button style={{ fontFamily: 'var(--font-body)', fontSize: 13, padding: '8px 16px', background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>Más opciones ▾</button>
          <div style={{ position: 'absolute', top: '100%', left: 0, marginTop: 8, background: 'var(--bg-elevated)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', padding: 8, minWidth: 180, zIndex: 10 }}>
            {['Editar','Duplicar','Compartir','Eliminar'].map(item => (
              <div key={item} style={{ padding: '8px 12px', fontSize: 13, color: item === 'Eliminar' ? 'var(--color-error)' : 'var(--text-secondary)', borderRadius: 'var(--radius-sm)', cursor: 'pointer' }}>{item}</div>
            ))}
          </div>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Tooltip" desc="4 posiciones.">
        <div style={{ display: 'flex', gap: 32 }}>
          {['top','right','bottom','left'].map(pos => (
            <Variant key={pos} label={pos}>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'var(--bg-sunken)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, cursor: 'pointer', border: '1px solid var(--border-default)' }}>?</div>
                <div style={{
                  position: 'absolute', background: 'var(--text-primary)', color: 'var(--text-inverse)',
                  padding: '4px 10px', borderRadius: 'var(--radius-sm)', fontSize: 12, whiteSpace: 'nowrap',
                  ...(pos === 'top' ? { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: 6 } :
                    pos === 'bottom' ? { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: 6 } :
                    pos === 'left' ? { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: 6 } :
                    { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: 6 })
                }}>Tooltip {pos}</div>
              </div>
            </Variant>
          ))}
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Command Palette (⌘K)" desc="Búsqueda rápida de acciones.">
        <Backdrop>
          <div style={{ width: 520, background: 'var(--bg-elevated)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', padding: '14px 20px', gap: 10, borderBottom: '1px solid var(--border-default)' }}>
              <span style={{ color: 'var(--text-tertiary)', fontSize: 16 }}>⌕</span>
              <span style={{ fontSize: 15, color: 'var(--text-tertiary)' }}>Buscar páginas, proyectos, acciones…</span>
            </div>
            <div style={{ padding: 8 }}>
              {[['→ Projects','Ir a la sección de proyectos'],['→ CV','Descargar currículum'],['→ TFG Pallapupas','Ver caso de estudio'],['→ Theme','Cambiar tema claro/oscuro']].map(([t,d]) => (
                <div key={t} style={{ padding: '10px 14px', borderRadius: 'var(--radius-sm)', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 13, color: 'var(--text-primary)' }}>{t}</span>
                  <span style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </Backdrop>
      </ShowcaseCard>

      <ShowcaseCard title="Confirm Dialog (Destructive)" desc="Acción destructiva con doble confirmación.">
        <Backdrop>
          <div style={{ width: 420, background: 'var(--bg-elevated)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-xl)', padding: 28, textAlign: 'center' }}>
            <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-full)', background: 'var(--color-error-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 24, color: 'var(--color-error)' }}>!</div>
            <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>¿Eliminar proyecto?</div>
            <div style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 24, lineHeight: 1.6 }}>Esta acción eliminará "TFG Pallapupas" permanentemente. No se puede deshacer.</div>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
              <button style={{ fontFamily: 'var(--font-body)', fontSize: 14, padding: '10px 24px', background: 'var(--bg-sunken)', color: 'var(--text-secondary)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>Cancelar</button>
              <button style={{ fontFamily: 'var(--font-body)', fontSize: 14, padding: '10px 24px', background: 'var(--color-error)', color: '#fff', border: 'none', borderRadius: 'var(--radius-md)', cursor: 'pointer', fontWeight: 600 }}>Eliminar</button>
            </div>
          </div>
        </Backdrop>
      </ShowcaseCard>
    </div>
  );
}

function SectionJMedia() {
  const ImgPlaceholder = ({ w = 320, h = 200, label = 'image', style: s }) => (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 'var(--radius-md)', display: 'block', ...s }}>
      <rect width={w} height={h} fill="var(--bg-sunken)" />
      {[...Array(Math.ceil(w/20))].map((_, i) => <line key={i} x1={i*20} y1="0" x2={i*20} y2={h} stroke="var(--border-subtle)" strokeWidth="1" />)}
      <text x={w/2} y={h/2} textAnchor="middle" fontFamily="monospace" fontSize="10" fill="var(--text-tertiary)">{label}</text>
    </svg>
  );

  const Avatar = ({ size = 40, initials = 'UM', status }) => (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div style={{ width: size, height: size, borderRadius: 'var(--radius-full)', background: 'var(--color-pm-blue-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-body)', fontSize: size * 0.35, fontWeight: 700, color: 'var(--color-pm-blue)' }}>{initials}</div>
      {status && <div style={{ position: 'absolute', bottom: 0, right: 0, width: size * 0.28, height: size * 0.28, borderRadius: 'var(--radius-full)', background: status === 'online' ? 'var(--color-success)' : 'var(--border-strong)', border: '2px solid var(--bg-elevated)' }}></div>}
    </div>
  );

  return (
    <div>
      <SectionHeader id="section-j" label="SECTION J" title="Media" desc="Imágenes, video, avatars, gallery, logo, iconos." />

      <ShowcaseCard title="Image" desc="Con placeholder, lazy load simulado, ratio fijo.">
        <Variant label="16:9"><ImgPlaceholder w={320} h={180} label="16:9 lazy image" /></Variant>
        <Variant label="1:1"><ImgPlaceholder w={200} h={200} label="1:1 square" /></Variant>
        <Variant label="4:3"><ImgPlaceholder w={280} h={210} label="4:3 photo" /></Variant>
      </ShowcaseCard>

      <ShowcaseCard title="Image Gallery / Masonry" desc="Grid de imágenes.">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, width: 500 }}>
          <ImgPlaceholder w={160} h={160} label="1" />
          <ImgPlaceholder w={160} h={220} label="2" style={{ gridRow: 'span 2' }} />
          <ImgPlaceholder w={160} h={100} label="3" />
          <ImgPlaceholder w={160} h={100} label="4" />
          <ImgPlaceholder w={160} h={100} label="5" />
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Video Player" desc="Controles placeholder.">
        <div style={{ width: 480, background: '#000', borderRadius: 'var(--radius-lg)', overflow: 'hidden', position: 'relative' }}>
          <ImgPlaceholder w={480} h={270} label="video content" style={{ borderRadius: 0 }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 16px', background: 'rgba(0,0,0,0.8)' }}>
            <span style={{ color: '#fff', cursor: 'pointer', fontSize: 18 }}>▶</span>
            <div style={{ flex: 1, height: 4, background: '#333', borderRadius: 2 }}><div style={{ width: '35%', height: '100%', background: '#fff', borderRadius: 2 }}></div></div>
            <span style={{ color: '#aaa', fontSize: 11, fontFamily: 'var(--font-mono)' }}>1:24 / 4:02</span>
            <span style={{ color: '#fff', cursor: 'pointer', fontSize: 14 }}>⛶</span>
          </div>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Avatar" desc="Tamaños xs–xl, con initials y status dot.">
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end' }}>
          <Variant label="xs (24)"><Avatar size={24} /></Variant>
          <Variant label="sm (32)"><Avatar size={32} /></Variant>
          <Variant label="md (40)"><Avatar size={40} status="online" /></Variant>
          <Variant label="lg (56)"><Avatar size={56} status="online" /></Variant>
          <Variant label="xl (72)"><Avatar size={72} /></Variant>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Avatar Group" desc="Stacked avatars.">
        <div style={{ display: 'flex' }}>
          {['UM','AB','CD','EF'].map((initials, i) => (
            <div key={i} style={{ marginLeft: i > 0 ? -12 : 0, zIndex: 4 - i }}>
              <Avatar size={40} initials={initials} />
            </div>
          ))}
          <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-full)', background: 'var(--bg-sunken)', border: '2px solid var(--bg-elevated)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: 'var(--text-tertiary)', fontWeight: 600, marginLeft: -12 }}>+3</div>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Logo Lockup" desc="Marca del portfolio.">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 36, height: 36, background: 'var(--color-pm-blue)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: 20, color: '#fff' }}>U</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 18, letterSpacing: '-0.3px' }}>Uri MC</div>
            <div style={{ fontSize: 11, color: 'var(--text-tertiary)', letterSpacing: '0.05em' }}>Product Manager</div>
          </div>
        </div>
      </ShowcaseCard>

      <ShowcaseCard title="Icon Set" desc="Iconos que se usan en el portfolio (Unicode + text placeholders).">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {[['→','arrow-right'],['←','arrow-left'],['↗','external'],['↑','up'],['↓','download'],['⌕','search'],['×','close'],['☰','menu'],['▶','play'],['★','star'],['✓','check'],['⚠','warning'],['ℹ','info'],['⌘','cmd'],['🎮','game'],['📊','chart'],['🧠','brain'],['📭','empty']].map(([icon, label]) => (
            <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, width: 56 }}>
              <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: 'var(--bg-sunken)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>{icon}</div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--text-tertiary)' }}>{label}</span>
            </div>
          ))}
        </div>
      </ShowcaseCard>
    </div>
  );
}

Object.assign(window, { SectionIOverlays, SectionJMedia });
