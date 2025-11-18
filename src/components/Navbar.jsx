import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md/80 bg-white/60 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-pink-300 via-sky-300 to-emerald-300 shadow-inner"></div>
          <span className="font-semibold text-slate-800">PastelPay</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-slate-700">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
          <a href="#blog" className="hover:text-slate-900 transition-colors">Blog</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#auth" className="px-4 py-2 rounded-lg text-slate-700 hover:bg-white/70 border border-slate-200 transition">Sign in</a>
          <a href="#auth" className="px-4 py-2 rounded-lg bg-slate-900 text-white shadow-sm hover:opacity-90 transition">Get started</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg border border-slate-300 bg-white/80">
          <span className="sr-only">Menu</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-700">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/80 backdrop-blur-lg">
          <div className="px-4 py-3 space-y-2">
            <a href="#features" className="block py-2">Features</a>
            <a href="#pricing" className="block py-2">Pricing</a>
            <a href="#blog" className="block py-2">Blog</a>
            <a href="#contact" className="block py-2">Contact</a>
            <a href="#auth" className="block py-2 font-medium">Get started</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
