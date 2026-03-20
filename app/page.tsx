"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function GbeMedjiSymbol({ opacity = 0.09 }: { opacity?: number }) {
  return (
    <svg width="64" height="152" viewBox="0 0 64 152" style={{ opacity }}>
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x="4"  y={i*37+4} width="13" height="28" rx="4" fill="#92400e"/>
          <rect x="47" y={i*37+4} width="13" height="28" rx="4" fill="#92400e"/>
        </g>
      ))}
    </svg>
  );
}

function FuMedjiSymbol({ opacity = 0.09 }: { opacity?: number }) {
  const vals = [2, 1, 2, 1];
  return (
    <svg width="72" height="152" viewBox="0 0 72 152" style={{ opacity }}>
      {vals.map((v, i) => (
        <g key={i}>
          {v === 1 ? (
            <rect x="4" y={i*37+4} width="13" height="28" rx="4" fill="#92400e"/>
          ) : (
            <>
              <rect x="4"  y={i*37+4} width="5.5" height="28" rx="3" fill="#92400e"/>
              <rect x="12" y={i*37+4} width="5.5" height="28" rx="3" fill="#92400e"/>
            </>
          )}
          {v === 1 ? (
            <rect x="55" y={i*37+4} width="13" height="28" rx="4" fill="#92400e"/>
          ) : (
            <>
              <rect x="51" y={i*37+4} width="5.5" height="28" rx="3" fill="#92400e"/>
              <rect x="59" y={i*37+4} width="5.5" height="28" rx="3" fill="#92400e"/>
            </>
          )}
        </g>
      ))}
    </svg>
  );
}

export default function Home() {
  useScrollReveal();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const features = [
    { num: "01", titre: "256 signes documentés", desc: "Interdits, sacrifices, devises, fétiches et feuilles liturgiques pour chaque signe et ses combinaisons.", lien: "/signes", cta: "Explorer les signes" },
    { num: "02", titre: "Cartes imprimables", desc: "Chaque signe génère une carte PDF A5 avec QR code — pour expositions, livrets pédagogiques et ateliers.", lien: "/signes", cta: "Voir un exemple" },
    { num: "03", titre: "Reconnaissance visuelle", desc: "Pointez votre appareil vers un signe dessiné ou sculpté. L'IA identifie le signe instantanément.", lien: "/scan", cta: "Scanner un signe" },
    { num: "04", titre: "Carte des lieux sacrés", desc: "Temples, forêts et sanctuaires Vodun géolocalisés au Bénin. Chacun lié à un signe du Fâ.", lien: "/explorer", cta: "Voir la carte" },
  ];

  return (
    <>
      <style>{`
        /* ── Reveal ── */
        .reveal { opacity:0; transform:translateY(28px); transition:opacity .7s cubic-bezier(.4,0,.2,1),transform .7s cubic-bezier(.4,0,.2,1); }
        .reveal.revealed { opacity:1; transform:none; }
        .reveal-delay-1{transition-delay:.1s} .reveal-delay-2{transition-delay:.2s}
        .reveal-delay-3{transition-delay:.3s} .reveal-delay-4{transition-delay:.4s}

        /* ── Navbar pill ── */
        .navbar-pill {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 100;
          transition: box-shadow .3s, background .3s, border-color .3s;
        }
        .navbar-pill.scrolled {
          box-shadow: 0 8px 32px rgba(120,53,15,0.13);
        }
        .nav-link {
          color: #78350f;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.02em;
          padding: 6px 4px;
          position: relative;
          transition: color .2s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1.5px;
          background: #d97706;
          transform: scaleX(0);
          transition: transform .25s cubic-bezier(.4,0,.2,1);
          transform-origin: left;
        }
        .nav-link:hover { color: #b45309; }
        .nav-link:hover::after { transform: scaleX(1); }

        /* ── Boutons ── */
        .btn-primary {
          background: #92400e; color: white;
          padding: 12px 26px; border-radius: 100px;
          font-weight: 600; font-size: 13.5px; letter-spacing:.04em;
          transition: background .2s, transform .2s, box-shadow .2s;
          display: inline-flex; align-items: center; gap: 7px;
        }
        .btn-primary:hover { background:#78350f; transform:translateY(-2px); box-shadow:0 8px 24px rgba(120,53,15,.25); }

        .btn-secondary {
          background: white; color: #78350f;
          padding: 11px 24px; border-radius: 100px;
          font-weight: 600; font-size: 13.5px; letter-spacing:.04em;
          border: 1.5px solid #d97706;
          transition: background .2s, transform .2s, box-shadow .2s, border-color .2s;
          display: inline-flex; align-items: center; gap: 7px;
        }
        .btn-secondary:hover { background:#fffbeb; border-color:#92400e; transform:translateY(-2px); box-shadow:0 8px 24px rgba(120,53,15,.1); }

        /* ── Feature cards ── */
        .feat-card { transition: transform .3s cubic-bezier(.4,0,.2,1), box-shadow .3s, border-color .3s; }
        .feat-card:hover { transform:translateY(-6px); box-shadow:0 20px 48px rgba(146,64,14,.13); border-color:#d97706; }
        .feat-card:hover .feat-num { color:#fbbf24; }
        .feat-card:hover .feat-arrow { transform:translateX(6px); }
        .feat-arrow { transition:transform .25s ease; display:inline-block; }

        /* ── Stat number ── */
        .stat-num { font-size:clamp(2.5rem,6vw,4.5rem); font-weight:800; line-height:1; letter-spacing:-.03em; color:#92400e; }

        /* ── Animations ── */
        @keyframes lineGrow { from{width:0} to{width:60px} }
        .line-decor { height:2px; background:linear-gradient(90deg,#d97706,#fbbf24); animation:lineGrow 1s cubic-bezier(.4,0,.2,1) .5s both; }

        @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.45;transform:scale(1.6)} }
        .pulse-dot { animation:pulse-dot 2.2s ease-in-out infinite; }

        @keyframes float-slow { 0%,100%{transform:translateY(0) rotate(0deg)} 40%{transform:translateY(-14px) rotate(.8deg)} 70%{transform:translateY(-7px) rotate(-.6deg)} }
        .float-l { animation:float-slow 10s ease-in-out infinite; }
        .float-r { animation:float-slow 12s ease-in-out infinite 2.5s; }

        /* ── Footer ── */
        .footer-link { color:#fcd34d; font-size:13px; font-weight:500; transition:color .2s; }
        .footer-link:hover { color:#fff; }
      `}</style>

      <main className="min-h-screen bg-amber-50 text-amber-900 overflow-hidden">

        {/* ════════════════════════════════
            NAVBAR — Pill centré flottant
        ════════════════════════════════ */}
        <nav className={`navbar-pill ${scrolled ? "scrolled" : ""}`}>
          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1 bg-white/90 backdrop-blur-md border border-amber-200 rounded-full px-4 py-2.5 shadow-sm">
            <Link href="/" className="font-bold text-amber-900 tracking-[0.12em] text-[13px] mr-4 pr-4 border-r border-amber-200">
              ACCUEIL
            </Link>
            <Link href="/signes"    className="nav-link px-3">Signes</Link>
            <Link href="/comprendre" className="nav-link px-3">Comprendre</Link>
            <Link href="/explorer"  className="nav-link px-3">Carte</Link>
            <Link href="/fa"        className="nav-link px-3">À propos</Link>
            <Link href="/scan" className="ml-3 btn-primary" style={{padding:'8px 18px', fontSize:'12.5px'}}>
              Scanner
            </Link>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md border border-amber-200 rounded-full px-4 py-2.5 shadow-sm">
              <Link href="/" className="font-bold text-amber-900 tracking-[0.12em] text-[13px]">FÂ DÜ</Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="ml-auto flex flex-col gap-1.5 p-1"
                aria-label="Menu"
              >
                <span className={`block w-4.5 h-0.5 bg-amber-800 transition-all origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} style={{width:'18px'}} />
                <span className={`block h-0.5 bg-amber-800 transition-all ${menuOpen ? "opacity-0 scale-x-0" : ""}`} style={{width:'18px'}} />
                <span className={`block w-4.5 h-0.5 bg-amber-800 transition-all origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{width:'18px'}} />
              </button>
            </div>
            {menuOpen && (
              <div className="mt-2 bg-white/95 backdrop-blur-md border border-amber-200 rounded-2xl px-5 py-4 flex flex-col gap-3 shadow-lg min-w-[200px]">
                {[
                  {href:"/signes",     label:"Signes"},
                  {href:"/comprendre", label:"Comprendre"},
                  {href:"/explorer",   label:"Carte"},
                  {href:"/fa",         label:"À propos"},
                ].map(l => (
                  <Link key={l.href} href={l.href} className="nav-link text-sm" onClick={() => setMenuOpen(false)}>{l.label}</Link>
                ))}
                <Link href="/scan" className="btn-primary mt-1 w-fit text-xs" style={{padding:'9px 18px', fontSize:'12.5px'}} onClick={() => setMenuOpen(false)}>
                  Scanner un signe
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* ════════════════════════════════
            HERO
        ════════════════════════════════ */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 overflow-hidden">
          {/* Fond radial */}
          <div className="absolute inset-0 pointer-events-none"
            style={{background:"radial-gradient(ellipse 80% 55% at 50% 45%, rgba(251,191,36,0.16) 0%, transparent 70%)"}} />

          {/* GBÉ-MÊDJI  */}
          <div className="absolute left-[5%] top-1/2 -translate-y-[55%] float-l pointer-events-none select-none hidden md:flex flex-col items-center gap-2">
            <span className="text-[9px] text-amber-400/60 tracking-[0.25em] uppercase font-medium">GBÉ-MÊDJI</span>
            <GbeMedjiSymbol opacity={0.50}/>
            <span className="text-[8px] text-amber-400/40 tracking-[0.15em]">01 — Vie</span>
          </div>

          {/* FU-MÊDJI  */}
          <div className="absolute right-[5%] top-1/2 -translate-y-[55%] float-r pointer-events-none select-none hidden md:flex flex-col items-center gap-2">
            <span className="text-[9px] text-amber-400/60 tracking-[0.25em] uppercase font-medium">FU-MÊDJI</span>
            <FuMedjiSymbol opacity={0.50}/>
            <span className="text-[8px] text-amber-400/40 tracking-[0.15em]">16 — Longévité</span>
          </div>

          {/* Cercles */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <div className="w-[540px] h-[540px] rounded-full border border-amber-200/50 absolute"/>
            <div className="w-[340px] h-[340px] rounded-full border border-amber-300/35 absolute"/>
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <div className="animate-fade-up-delay-1 flex items-center justify-center gap-3 mb-8">
              <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-amber-500 inline-block"/>
              <p className="text-amber-600 text-[11px] tracking-[0.4em] uppercase font-semibold">
                Patrimoine immatériel de l&apos;humanité — UNESCO 2008
              </p>
              <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" style={{animationDelay:"1.1s"}}/>
            </div>

            <h1 className="animate-fade-up-delay-2 text-7xl md:text-[9rem] font-bold tracking-tight mb-4 shimmer-text leading-none">
              FÂ DÜ
            </h1>

            <div className="animate-fade-up-delay-2 line-decor mx-auto mb-8"/>

            <p className="animate-fade-up-delay-3 text-amber-800/65 text-lg md:text-xl leading-relaxed mb-12 max-w-xl mx-auto font-light">
              Le système de divination ancestral du golfe du Bénin.
              <br/>
              <span className="text-amber-800 font-semibold">256 signes.</span> Des millénaires de sagesse.
            </p>

            <div className="animate-fade-up-delay-4 flex flex-wrap justify-center gap-3">
              <Link href="/signes" className="btn-primary">
                Explorer les 16 signes
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
              <Link href="/scan" className="btn-secondary">
                <svg width="15" height="15" fill="none" stroke="#78350f" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 9V5a2 2 0 012-2h4M3 15v4a2 2 0 002 2h4m10-16h-4a2 2 0 00-2 2v4m6 6h-4a2 2 0 01-2-2v-4"/>
                </svg>
                Scanner un signe
              </Link>
              <Link href="/fa" className="btn-secondary">En savoir plus</Link>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up-delay-5">
            <span className="text-amber-500/35 text-[10px] tracking-[0.3em] uppercase">Découvrir</span>
            <div className="w-px h-10 bg-gradient-to-b from-amber-500/35 to-transparent"/>
          </div>
        </section>

        {/* ════════════════════════════════
            CHIFFRES — clairs et non ambigus
        ════════════════════════════════ */}
        <section className="py-20 px-4 border-t border-amber-200 bg-white">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { n: '256', label: 'Signes au total', sub: '16 signes-mères + 240 vikandos' },
              { n: '16',  label: 'Signes-mères', sub: 'Les Dou-Médji, à puissance max' },
              { n: '240', label: 'Vikandos', sub: 'Combinaisons de 2 signes distincts' },
              { n: '2008',label: 'UNESCO', sub: 'Patrimoine immatériel de l\'humanité' },
            ].map((item, i) => (
              <div key={i} className={`reveal reveal-delay-${i+1} group`}>
                <div className="stat-num group-hover:text-amber-700 transition-colors duration-300">{item.n}</div>
                <p className="text-amber-900 font-bold text-sm mt-2">{item.label}</p>
                <p className="text-amber-700 text-xs mt-1 leading-snug">{item.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════
            FONCTIONNALITÉS
        ════════════════════════════════ */}
        <section className="py-24 px-4 bg-amber-50">
          <div className="max-w-5xl mx-auto">
            <div className="reveal mb-14 text-center">
              <p className="text-amber-500 text-[11px] tracking-[0.35em] uppercase font-semibold mb-3">Plateforme numérique</p>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900">Une expérience culturelle complète</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <Link key={i} href={f.lien}
                  className={`feat-card reveal reveal-delay-${(i%2)+1} group block bg-white border border-amber-200 rounded-2xl p-7 overflow-hidden relative`}
                >
                  <span className="feat-num absolute top-4 right-6 text-6xl font-black text-amber-100 select-none leading-none transition-colors duration-300">{f.num}</span>
                  <div className="relative z-10">
                    <h3 className="text-amber-900 font-bold text-lg mb-3 group-hover:text-amber-700 transition-colors">{f.titre}</h3>
                    <p className="text-amber-700/65 text-sm leading-relaxed mb-6 max-w-xs">{f.desc}</p>
                    <span className="inline-flex items-center gap-2 bg-amber-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full group-hover:bg-amber-600 transition-colors">
                      {f.cta}<span className="feat-arrow">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            CITATION
        ════════════════════════════════ */}
        <section className="py-24 px-4 bg-amber-900 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
            <svg width="100%" height="100%"><defs><pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0L0 0 0 40" fill="none" stroke="white" strokeWidth=".5"/></pattern></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>
          </div>
          <div className="reveal relative z-10 max-w-3xl mx-auto text-center">
            <p className="text-amber-400 text-[11px] tracking-[0.35em] uppercase font-semibold mb-8">Notre positionnement</p>
            <blockquote className="text-2xl md:text-3xl font-light text-amber-50 leading-relaxed mb-8 italic">
              &ldquo;Rendre accessible, de manière claire et respectueuse, la connaissance symbolique des 256 signes du Fâ.&rdquo;
            </blockquote>
            <div className="w-12 h-px bg-amber-500 mx-auto mb-6"/>
            <p className="text-amber-300/70 text-sm leading-relaxed max-w-xl mx-auto">
              FÂ DÜ n&apos;est pas un outil de consultation mystique et ne remplace pas le travail des Bokonon.
              Nous documentons, nous éduquons, nous valorisons.
            </p>
          </div>
        </section>

        {/* ════════════════════════════════
            POUR QUI
        ════════════════════════════════ */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="reveal mb-14 text-center">
              <h2 className="text-3xl font-bold text-amber-900">Pour qui ?</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label:'La diaspora africaine', desc:"Se reconnecter aux racines culturelles du golfe du Bénin avec clarté et profondeur.", icon:'◎' },
                { label:'Les institutions',      desc:"Outils pédagogiques pour musées, universités et programmes de valorisation du patrimoine.", icon:'◈' },
                { label:'Les curieux du monde',  desc:"Découvrir l'un des systèmes de pensée africains les plus riches et les moins documentés.", icon:'◇' },
              ].map((p, i) => (
                <div key={i} className={`reveal reveal-delay-${i+1} bg-amber-50 rounded-2xl p-7 border border-amber-100`}>
                  <span className="text-2xl text-amber-400 mb-4 block">{p.icon}</span>
                  <h3 className="text-amber-900 font-bold text-base mb-2">{p.label}</h3>
                  <p className="text-amber-700/65 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            CTA FINAL
        ════════════════════════════════ */}
        <section className="py-24 px-4 bg-amber-50 border-t border-amber-200">
          <div className="reveal max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Commencer l&apos;exploration</h2>
            <p className="text-amber-700/60 mb-10 text-sm">Accédez aux 256 signes, à la carte et aux outils de médiation culturelle.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/signes" className="btn-primary">
                Les 16 signes-mères
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
              <Link href="/explorer" className="btn-secondary">Carte des lieux sacrés</Link>
              <Link href="/scan" className="btn-secondary">Scanner un signe</Link>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════
            FOOTER sombre
        ════════════════════════════════ */}
        <footer className="border-t border-amber-700 py-10 px-4 bg-amber-900">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
            <p className="font-bold text-amber-100 tracking-[0.2em] text-sm">FÂ DÜ</p>
            <p className="text-amber-400/80 text-xs">© 2026 — Valorisation du patrimoine immatériel du golfe du Bénin</p>
            <div className="flex gap-6">
              <Link href="/fa"       className="footer-link">À propos</Link>
              <Link href="/signes"   className="footer-link">Signes</Link>
              <Link href="/scan"     className="footer-link">Scanner</Link>
              <Link href="/explorer" className="footer-link">Carte</Link>
            </div>
          </div>
        </footer>

      </main>
    </>
  );
}
