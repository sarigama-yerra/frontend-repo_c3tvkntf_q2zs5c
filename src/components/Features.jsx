function Features() {
  const items = [
    {
      title: 'Issue virtual & physical cards',
      desc: 'Create branded cards with granular controls. Instant issuance and lifecycle management.',
    },
    {
      title: 'Seamless payments',
      desc: 'Accept payments globally with built-in risk tooling and clear reporting.',
    },
    {
      title: 'Developer-first',
      desc: 'Modern APIs, webhook tooling and clean docs to launch faster and maintain easily.',
    },
  ]

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Everything you need</h2>
          <p className="mt-3 text-slate-700">A calm, minimalist toolkit designed to scale from idea to enterprise.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-200 via-sky-200 to-emerald-200 mb-4"></div>
              <h3 className="font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-slate-700">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
