import { useState } from 'react'

function Contact() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')
    try {
      const res = await fetch(`${baseUrl}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to send')
      setStatus('Thanks for reaching out! We will get back to you soon.')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (e) {
      setStatus(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-pink-50/40 to-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Let’s talk</h2>
          <p className="mt-3 text-slate-700">Have a question about features, trials, pricing, or anything else? Our team is ready to answer.</p>
          <div className="mt-6 p-6 rounded-2xl bg-white border border-slate-200">
            <div className="flex items-center gap-2 text-slate-700"><span className="w-2 h-2 bg-emerald-400 rounded-full"></span>Response within 1 business day</div>
            <div className="flex items-center gap-2 text-slate-700 mt-2"><span className="w-2 h-2 bg-emerald-400 rounded-full"></span>Priority support on Growth & Scale</div>
          </div>
        </div>

        <form onSubmit={submit} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-700 mb-1">Name</label>
              <input value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white/80" />
            </div>
            <div>
              <label className="block text-sm text-slate-700 mb-1">Email</label>
              <input type="email" value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white/80" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-slate-700 mb-1">Subject</label>
            <input value={form.subject} onChange={(e)=>setForm({...form, subject: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white/80" />
          </div>
          <div className="mt-4">
            <label className="block text-sm text-slate-700 mb-1">Message</label>
            <textarea rows="5" value={form.message} onChange={(e)=>setForm({...form, message: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white/80"></textarea>
          </div>
          <button disabled={loading} className="mt-4 w-full px-4 py-2 rounded-xl bg-slate-900 text-white disabled:opacity-60">{loading ? 'Sending...' : 'Send message'}</button>
          {status && <p className="mt-3 text-sm text-slate-700">{status}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
