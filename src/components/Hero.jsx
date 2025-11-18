import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="max-w-2xl bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-[0_10px_40px_rgba(15,23,42,0.12)]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-slate-200 text-slate-700 mb-4 pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Now accepting early access signups
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900">
            Modern fintech infrastructure in soft pastels
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            Cards, payments and compliance in a polished, minimalist experience. Ship your financial product faster with a delightful UI.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="px-5 py-3 rounded-xl bg-slate-900 text-white shadow hover:opacity-90 text-center">View pricing</a>
            <a href="#auth" className="px-5 py-3 rounded-xl bg-white/80 border border-slate-200 text-slate-800 backdrop-blur-sm text-center">Start free</a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/50 to-white pointer-events-none"></div>
    </section>
  )
}

export default Hero
