import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Github, Linkedin, Instagram, Mail } from 'lucide-react'
import { contact, hero, featured, work, experience, education, research, award, photoStrip } from '../data/profile'
import { useLang, useT, ui } from '../lib/i18n'
import { useScrollToRequestedSection } from '../lib/useSectionNav'
import { thumb } from '../lib/thumb'

export default function Home() {
  useScrollToRequestedSection()

  return (
    <>
      <Hero />
      <Work />
      <Experience />
      <Research />
      <Photography />
    </>
  )
}

function Hero() {
  const t = useT()
  const { lang } = useLang()
  const socials = [
    { href: contact.github, label: 'GitHub', Icon: Github },
    { href: contact.linkedin, label: 'LinkedIn', Icon: Linkedin },
    { href: contact.instagram, label: 'Instagram', Icon: Instagram },
    { href: `mailto:${contact.email}`, label: 'Email', Icon: Mail },
  ]

  return (
    <section className="bg-green text-cream">
      <div className="wrap grid items-center gap-12 pb-16 pt-28 sm:pt-32 lg:grid-cols-12 lg:gap-8 lg:pb-24">
        <div className="lg:col-span-7">
          <h1
            className={`rise font-serif font-semibold leading-none ${
              lang === 'zh' ? 'text-[40px] sm:text-6xl lg:text-[64px]' : 'text-[56px] tracking-[-0.02em] sm:text-7xl lg:text-[88px]'
            }`}
          >
            {t(hero.title)}
          </h1>
          <p className="rise mt-7 max-w-lg text-lg leading-relaxed text-cream/80 sm:text-[19px]" style={{ animationDelay: '80ms' }}>
            {t(hero.intro)}
          </p>

          <div className="rise mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: '160ms' }}>
            <a
              href={t(contact.resume)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cream px-5 py-3 font-medium text-green-deep transition-colors hover:bg-white"
            >
              {t(ui.resume)} <ArrowUpRight size={17} />
            </a>
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-cream/25 text-cream/80 transition-colors hover:border-cream/60 hover:text-cream"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="rise lg:col-span-5" style={{ animationDelay: '80ms' }}>
          <figure className="mx-auto max-w-[280px] sm:max-w-[340px] lg:ml-auto lg:mr-0">
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[28px] border border-gold/70" aria-hidden />
              <img
                src="/assets/img/portrait.webp"
                alt="Portrait of Colin Tang"
                width="720"
                height="836"
                fetchpriority="high"
                className="relative aspect-[1120/1300] w-full rounded-[28px] object-cover shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]"
              />
            </div>
            <figcaption className="mt-8 flex items-center gap-2 text-sm text-cream/70">
              <span className="h-2 w-2 rounded-full bg-gold" />
              {t(hero.status)}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

function SectionTitle({ children }) {
  return <h2 className="font-serif text-4xl font-semibold tracking-[-0.015em] sm:text-5xl">{children}</h2>
}

function ExternalLink({ href, children, onDark }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 font-medium underline-offset-4 hover:underline ${
        onDark ? 'text-cream' : 'text-green-text'
      }`}
    >
      {children} <ArrowUpRight size={16} />
    </a>
  )
}

function Work() {
  const t = useT()
  return (
    <section className="wrap scroll-mt-16 py-20 sm:py-28" id="work">
      <SectionTitle>{t(ui.work)}</SectionTitle>

      <article className="mt-10 grid overflow-hidden rounded-[24px] border border-line lg:grid-cols-12">
        <a
          href={featured.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden bg-paper-2 lg:col-span-7"
          aria-label={`${featured.name} — ${featured.linkLabel}`}
        >
          <img
            src={featured.image}
            srcSet={`${thumb(featured.image)} 800w, ${featured.image} 1424w`}
            sizes="(min-width: 1024px) 640px, 100vw"
            alt="Favly homepage"
            width="1424"
            height="801"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </a>
        <div className="flex flex-col justify-center gap-4 bg-green p-8 text-cream sm:p-10 lg:col-span-5">
          <p className="text-sm text-cream/60">{t(featured.kind)}</p>
          <h3 className="font-serif text-4xl font-semibold tracking-tight">{featured.name}</h3>
          <p className="text-[17px] leading-relaxed text-cream/85">{t(featured.summary)}</p>
          <p className="text-[15px] text-cream/60">{t(featured.note)}</p>
          <div className="pt-2">
            <ExternalLink href={featured.href} onDark>
              {featured.linkLabel}
            </ExternalLink>
          </div>
        </div>
      </article>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {work.map((p) => (
          <article key={p.href} className="flex flex-col overflow-hidden rounded-[24px] border border-line">
            <img
              src={thumb(p.image)}
              alt={`${t(p.name)} homepage`}
              width="800"
              height="450"
              loading="lazy"
              decoding="async"
              className="aspect-[16/9] w-full border-b border-line object-cover object-top"
            />
            <div className="flex flex-1 flex-col gap-3 p-7 sm:p-8">
              <p className="text-sm text-ink-3">{t(p.kind)}</p>
              <h3 className="font-serif text-[28px] font-semibold leading-tight tracking-tight">{t(p.name)}</h3>
              <p className="text-[16px] leading-relaxed text-ink-2">{t(p.summary)}</p>
              <div className="mt-auto pt-2">
                <ExternalLink href={p.href}>{p.linkLabel}</ExternalLink>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  const t = useT()
  return (
    <section className="border-t border-line">
      <div className="wrap scroll-mt-16 py-20 sm:py-28" id="experience">
        <SectionTitle>{t(ui.experience)}</SectionTitle>
        <ol className="mt-10">
          {experience.map((job) => (
            <li key={job.href} className="grid gap-1 border-t border-line py-6 md:grid-cols-12 md:gap-8">
              <p className="text-sm text-ink-3 md:col-span-3 md:pt-1.5">{t(job.date)}</p>
              <div className="md:col-span-9">
                <h3 className="font-serif text-[22px] font-semibold tracking-tight">
                  <a href={job.href} target="_blank" rel="noopener noreferrer" className="hover:text-green-text">
                    {t(job.org)}
                  </a>
                  <span className="font-normal text-ink-2"> · {t(job.role)}</span>
                </h3>
                {job.note && <p className="mt-1 text-[16px] text-ink-2">{t(job.note)}</p>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Research() {
  const t = useT()
  const block = (title, items) => (
    <div>
      <p className="eyebrow">{title}</p>
      <ul className="mt-5">
        {items.map((it) => (
          <li key={it.title + it.sub} className="border-t border-line py-5">
            <h3 className="font-serif text-xl font-semibold leading-snug">
              {it.href ? (
                <a href={it.href} target="_blank" rel="noopener noreferrer" className="hover:text-green-text">
                  {it.title}
                  <ArrowUpRight size={16} className="ml-1 inline align-baseline text-ink-3" />
                </a>
              ) : (
                it.title
              )}
            </h3>
            <p className="mt-1 text-ink-2">{it.sub}</p>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <section className="border-t border-line">
      <div className="wrap grid scroll-mt-16 gap-14 py-20 sm:py-28 lg:grid-cols-2" id="research">
        {block(
          t(ui.education),
          education.map((e) => ({ title: t(e.school), sub: `${t(e.degree)} · ${e.date}` })),
        )}
        {block(
          t(ui.research),
          research.map((r) => ({ title: t(r.title), href: r.href, sub: t(r.who) })),
        )}
      </div>
    </section>
  )
}

function Photography() {
  const t = useT()
  return (
    <section className="bg-paper-2">
      <div className="wrap py-20 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle>{t(ui.photography)}</SectionTitle>
          <a
            href={award.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] text-ink-2 hover:text-green-text"
          >
            <span className="text-gold">★</span> {t(award.label)}
          </a>
        </div>

        <div className="-mx-4 mt-10 flex snap-x gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-5 sm:overflow-visible sm:px-0">
          {photoStrip.map((p) => (
            <Link
              key={p.src}
              to={p.to}
              className="group block w-[62%] flex-none snap-start overflow-hidden rounded-2xl bg-line sm:w-auto"
            >
              <img
                src={thumb(p.src)}
                alt={p.alt}
                width="800"
                height="1067"
                loading="lazy"
                decoding="async"
                className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
          <Link to="/photography" className="link-arrow">
            {t(ui.seeAll)} <ArrowRight size={16} />
          </Link>
          <ExternalLink href={contact.instagram}>@ctphotography77</ExternalLink>
        </div>
      </div>
    </section>
  )
}
