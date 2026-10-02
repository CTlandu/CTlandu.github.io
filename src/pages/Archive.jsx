import { ArrowUpRight } from 'lucide-react'
import { archive } from '../data/profile'
import { thumb } from '../lib/thumb'
import { useT, ui } from '../lib/i18n'

export default function Archive() {
  const t = useT()

  return (
    <div className="wrap pb-24 pt-28 sm:pt-32">
      <h1 className="font-serif text-5xl font-semibold tracking-[-0.02em] sm:text-6xl">{t(ui.archive)}</h1>
      <p className="mt-4 text-lg text-ink-2">{t(ui.archiveIntro)}</p>

      <div className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {archive.map((v) => (
          <a key={v.slug} href={v.href} className="group block">
            <div className="overflow-hidden rounded-2xl border border-line bg-paper-2">
              <img
                src={thumb(v.cover)}
                alt={`${v.slug} version of the site`}
                width="800"
                height="450"
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <p className="mt-5 text-sm text-ink-3">{t(v.period)}</p>
            <h2 className="mt-1 flex items-baseline gap-3 font-serif text-2xl font-semibold tracking-tight group-hover:text-green-text">
              <span className="text-gold">{v.slug}</span>
              {t(v.title)}
            </h2>
            <p className="mt-2 text-[16px] leading-relaxed text-ink-2">{t(v.summary)}</p>
            <span className="link-arrow mt-3">
              {t(ui.open)} <ArrowUpRight size={16} />
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
