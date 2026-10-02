import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Play } from 'lucide-react'
import projectsData from '../data/projects.json'
import { thumb } from '../lib/images'
import { useT, ui } from '../lib/i18n'
import { award } from '../data/profile'

const categories = [
  { key: 'All', label: ui.all },
  { key: 'Photography', label: ui.photos },
  { key: 'Videos', label: ui.videos },
]

export default function Photography() {
  const t = useT()
  const [category, setCategory] = useState('All')
  const projects = category === 'All' ? projectsData : projectsData.filter((p) => p.category === category)

  return (
    <div className="wrap pb-24 pt-28 sm:pt-32">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h1 className="font-serif text-5xl font-semibold tracking-[-0.02em] sm:text-6xl">{t(ui.photography)}</h1>
        <div>
          <a
            href={award.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-gold/60 py-2 pl-2 pr-4"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gold/15 text-gold">★</span>
            <span className="text-[15px] group-hover:text-green-text">{t(award.label)}</span>
            <ArrowUpRight size={15} className="text-ink-3" />
          </a>
        </div>
      </div>

      <div className="mt-12 flex gap-2" role="tablist">
        {categories.map((c) => (
          <button
            key={c.key}
            type="button"
            role="tab"
            aria-selected={category === c.key}
            onClick={() => setCategory(c.key)}
            className={`rounded-full px-4 py-2 text-sm transition-colors ${
              category === c.key ? 'bg-ink text-paper' : 'bg-paper-2 text-ink-2 hover:text-ink'
            }`}
          >
            {t(c.label)}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Link key={p.id} to={`/photography/${encodeURIComponent(p.id)}`} className="group block">
            <div className="relative overflow-hidden rounded-2xl bg-paper-2">
              <img
                src={thumb(p.thumbnail)}
                alt={t(p.title)}
                width="800"
                height="600"
                loading={i < 3 ? 'eager' : 'lazy'}
                decoding="async"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              {p.youtubeId && (
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-3 py-1 text-xs text-white backdrop-blur">
                  <Play size={12} fill="currentColor" /> {t(ui.film)}
                </span>
              )}
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <h2 className="font-serif text-2xl font-semibold tracking-tight group-hover:text-green-text">{t(p.title)}</h2>
              <span className="flex-none text-sm text-ink-3">{t(ui.photoCount)(p.images.length)}</span>
            </div>
            <p className="mt-1 text-[15px] text-ink-2">{t(p.description)}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
