"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/signes",     label: "Signes" },
    { href: "/comprendre", label: "Comprendre" },
    { href: "/explorer",   label: "Carte" },
    { href: "/fa",         label: "À propos" },
  ];

  return (
    <>
      <style>{`
        .navbar-pill {
          position: fixed; top: 20px; left: 50%;
          transform: translateX(-50%); z-index: 100;
          transition: box-shadow .3s;
        }
        .navbar-pill.scrolled { box-shadow: 0 8px 32px rgba(120,53,15,0.14); }
        .nav-lnk {
          font-size: 13px; font-weight: 500; letter-spacing: .02em;
          padding: 5px 4px; position: relative;
          transition: color .2s; color: #78350f;
        }
        .nav-lnk::after {
          content:''; position:absolute; bottom:0; left:0; right:0;
          height:1.5px; background:#d97706;
          transform:scaleX(0); transition:transform .25s cubic-bezier(.4,0,.2,1);
          transform-origin:left;
        }
        .nav-lnk:hover, .nav-lnk.active { color: #b45309; }
        .nav-lnk:hover::after, .nav-lnk.active::after { transform: scaleX(1); }
        .nav-btn {
          background:#92400e; color:white; padding:7px 16px;
          border-radius:100px; font-weight:600; font-size:12.5px;
          letter-spacing:.04em; transition:background .2s, transform .2s;
          display:inline-flex; align-items:center; gap:6px;
        }
        .nav-btn:hover { background:#78350f; transform:translateY(-1px); }
      `}</style>

      <nav className={`navbar-pill ${scrolled ? "scrolled" : ""}`}>
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1 bg-white/92 backdrop-blur-md border border-amber-200 rounded-full px-4 py-2.5">
          <Link href="/" className="font-bold text-amber-900 tracking-[0.12em] text-[13px] mr-3 pr-3 border-r border-amber-200">
            ACCUEIL
          </Link>
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className={`nav-lnk px-3 ${pathname === l.href ? "active" : ""}`}>
              {l.label}
            </Link>
          ))}
          <Link href="/scan" className="nav-btn ml-2">
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 9V5a2 2 0 012-2h4M3 15v4a2 2 0 002 2h4m10-16h-4a2 2 0 00-2 2v4m6 6h-4a2 2 0 01-2-2v-4"/>
            </svg>
            Scanner
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <div className="flex items-center gap-3 bg-white/92 backdrop-blur-md border border-amber-200 rounded-full px-4 py-2.5">
            <Link href="/" className="font-bold text-amber-900 tracking-[0.12em] text-[13px]">FÂ DÜ</Link>
            <button onClick={() => setMenuOpen(!menuOpen)} className="ml-auto p-1" aria-label="Menu">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect className={`transition-all origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
                  x="1" y="4" width="16" height="1.5" rx="1" fill="#92400e"
                  style={{transformBox:'fill-box', transition:'transform .25s'}}/>
                <rect className={`transition-all ${menuOpen ? "opacity-0" : ""}`}
                  x="1" y="8.25" width="16" height="1.5" rx="1" fill="#92400e"/>
                <rect className={`transition-all origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
                  x="1" y="12.5" width="16" height="1.5" rx="1" fill="#92400e"
                  style={{transformBox:'fill-box', transition:'transform .25s'}}/>
              </svg>
            </button>
          </div>
          {menuOpen && (
            <div className="mt-2 bg-white/95 backdrop-blur-md border border-amber-200 rounded-2xl px-5 py-4 flex flex-col gap-3 shadow-lg">
              {links.map(l => (
                <Link key={l.href} href={l.href}
                  className={`nav-lnk text-sm ${pathname === l.href ? "active" : ""}`}
                  onClick={() => setMenuOpen(false)}>
                  {l.label}
                </Link>
              ))}
              <Link href="/scan" className="nav-btn mt-1 w-fit" onClick={() => setMenuOpen(false)}>
                Scanner un signe
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
