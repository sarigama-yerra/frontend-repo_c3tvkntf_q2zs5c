import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import Auth from './components/Auth'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Blog />
        <Auth />
        <Contact />
      </main>
      <footer className="py-10 border-t border-slate-200 bg-white/80">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-pink-300 via-sky-300 to-emerald-300"></div>
            <span className="font-medium">PastelPay</span>
          </div>
          <p className="text-slate-600 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
