import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-amber-700 py-10 px-4 bg-amber-900">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
        <p className="font-bold text-amber-100 tracking-[0.2em] text-sm">FÂ DÜ</p>
        <p className="text-amber-400/80 text-xs text-center">
          © 2026 — Valorisation du patrimoine immatériel du golfe du Bénin
        </p>
        <div className="flex gap-6">
          <Link href="/fa"       className="text-amber-200 hover:text-white transition-colors text-sm font-medium">À propos</Link>
          <Link href="/signes"   className="text-amber-200 hover:text-white transition-colors text-sm font-medium">Signes</Link>
          <Link href="/scan"     className="text-amber-200 hover:text-white transition-colors text-sm font-medium">Scanner</Link>
          <Link href="/explorer" className="text-amber-200 hover:text-white transition-colors text-sm font-medium">Carte</Link>
        </div>
      </div>
    </footer>
  );
}
