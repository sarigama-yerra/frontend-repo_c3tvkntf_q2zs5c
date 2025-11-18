import { useState } from 'react'

function Auth() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [mode, setMode] = useState('login')
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      const url = mode === 'login' ? `${baseUrl}/api/auth/login` : `${baseUrl}/api/auth/register`
      const body = mode === 'login' ? { email: form.email, password: form.password } : form
      const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Request failed')
      setMessage(`${data.message} — Welcome ${data.name || ''}`)
    } catch (e) {
      setMessage(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="auth" className="py-24 bg-gradient-to-b from-white to-pink-50/40">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Join in minutes</h2>
          <p className="mt-3 text-slate-700">Create an account or sign in to access your dashboard.</p>
          <ul className="mt-6 space-y-2 text-slate-700">
            <li className="flex gap-2 items-center"><span className="w-2 h-2 rounded-full bg-emerald-400"></span>Secure hashing, no plain passwords stored.</li>
            <li className="flex gap-2 items-center"><span className="w-2 h-2 rounded-full bg-emerald-400"></span>Works instantly — no email confirmation needed here.</li>
          </ul>
        </div>

        <form onSubmit={submit} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 p-1 mb-6">
            <button type="button" onClick={() => setMode('login')} className={`px-4 py-1 rounded-full text-sm ${mode==='login'?'bg-white shadow-sm':''}`}>Sign in</button>
            <button type="button" onClick={() => setMode('register')} className={`px-4 py-1 rounded-full text-sm ${mode==='register'?'bg-white shadow-sm':''}`}>Create account</button>
          </div>

          {mode === 'register' && (
            <div className="mb-4">
              <label className="block text-sm text-slate-700 mb-1">Name</label>
              <input value={form.name} onChange={(e)=>setForm({...form, name: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white/80" placeholder="Alex Doe" />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm text-slate-700 mb-1">Email</label>
            <input type="email" value={form.email} onChange={(e)=>setForm({...form, email: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white/80" placeholder="you@company.com" />
          </div>
          <div className="mb-2">
            <label className="block text-sm text-slate-700 mb-1">Password</label>
            <input type="password" value={form.password} onChange={(e)=>setForm({...form, password: e.target.value})} className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-300 bg-white/80" placeholder="••••••••" />
          </div>
          <button disabled={loading} className="mt-4 w-full px-4 py-2 rounded-xl bg-slate-900 text-white disabled:opacity-60">{loading? 'Please wait...' : mode==='login' ? 'Sign in' : 'Create account'}</button>
          {message && <p className="mt-3 text-sm text-slate-700">{message}</p>}
        </form>
      </div>
    </section>
  )
}

export default Auth
