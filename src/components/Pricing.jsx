function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: 'Free',
      cta: 'Start for free',
      features: ['Up to 100 cards', 'Sandbox access', 'Email support'],
      highlighted: false,
    },
    {
      name: 'Growth',
      price: '$49/mo',
      cta: 'Choose Growth',
      features: ['Up to 10k cards', 'Live environment', 'Priority support'],
      highlighted: true,
    },
    {
      name: 'Scale',
      price: 'Custom',
      cta: 'Contact sales',
      features: ['Unlimited cards', 'Dedicated infra', 'SLA & compliance help'],
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-emerald-50/30 to-sky-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Simple pricing</h2>
          <p className="mt-3 text-slate-700">Transparent plans that grow with you.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`p-6 rounded-2xl border shadow-sm bg-white ${t.highlighted ? 'ring-2 ring-slate-900' : 'border-slate-200'}`}>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-200 via-sky-200 to-emerald-200 mb-4 mx-auto"></div>
              <h3 className="text-xl font-semibold text-slate-900 text-center">{t.name}</h3>
              <p className="mt-2 text-3xl font-bold text-slate-900 text-center">{t.price}</p>
              <ul className="mt-4 space-y-2 text-slate-700">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><span className="w-2 h-2 bg-emerald-400 rounded-full"></span>{f}</li>
                ))}
              </ul>
              <a href="#auth" className={`mt-6 block w-full text-center px-4 py-2 rounded-xl ${t.highlighted ? 'bg-slate-900 text-white' : 'bg-white border border-slate-300 text-slate-800'}`}>{t.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
