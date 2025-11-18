import { useEffect, useState } from 'react'

function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/blog`)
        const data = await res.json()
        setPosts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-sky-50/40 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">From the blog</h2>
          <p className="mt-3 text-slate-700">Insights on fintech, cards and building in public.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {loading ? (
            <p className="text-slate-600">Loading...</p>
          ) : posts.length === 0 ? (
            <div className="md:col-span-3 p-8 rounded-2xl bg-white border border-slate-200 text-slate-700">
              No posts yet. Be the first to publish via the API.
            </div>
          ) : (
            posts.map((p) => (
              <article key={p.id} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
                <div className="w-full h-36 rounded-xl bg-gradient-to-br from-pink-200 via-sky-200 to-emerald-200 mb-4" />
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-slate-700 line-clamp-3">{p.excerpt}</p>
                <a href={`#blog-${p.slug}`} className="mt-3 inline-block text-slate-900 font-medium">Read more →</a>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default Blog
