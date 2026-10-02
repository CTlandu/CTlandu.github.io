import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Moon, Sun, Menu, X, Github, Linkedin, Instagram, Mail } from 'lucide-react'
import { contact } from '../data/profile'
import { useGoToSection } from '../lib/useSectionNav'
import { useLang, useT, ui } from '../lib/i18n'

const navItems = [
  { label: ui.work, section: 'work' },
  { label: ui.experience, section: 'experience' },
  { label: ui.research, section: 'research' },
  { label: ui.photography, to: '/photography' },
  { label: ui.archive, to: '/archive' },
]

function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {}
  }

  return [dark, toggle]
}

export default function Layout({ children }) {
  const { pathname, state } = useLocation()
  const goToSection = useGoToSection()
  const [dark, toggleTheme] = useTheme()
  const { lang, setLang } = useLang()
  const t = useT()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    if (!state?.scrollTo) window.scrollTo(0, 0)
  }, [pathname, state])

  const overHero = isHome && !scrolled && !menuOpen
  const navLink = `text-[15px] transition-colors ${overHero ? 'text-cream/80 hover:text-cream' : 'text-ink-2 hover:text-ink'}`

  const renderItem = (item, className) =>
    item.to ? (
      <Link key={item.label.en} to={item.to} className={className}>
        {t(item.label)}
      </Link>
    ) : (
      <button
        key={item.label.en}
        type="button"
        className={className}
        onClick={() => {
          setMenuOpen(false)
          goToSection(item.section)
        }}
      >
        {t(item.label)}
      </button>
    )

  return (
    <div className="flex min-h-screen flex-col">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
          overHero ? 'border-b border-transparent' : 'border-b border-line bg-paper/90 backdrop-blur-md'
        }`}
      >
        <div className="wrap flex h-16 items-center justify-between gap-6">
          <Link to="/" className={`flex items-baseline gap-2 ${overHero ? 'text-cream' : 'text-ink'}`}>
            <span className="font-serif text-[21px] font-semibold tracking-tight">Colin Tang</span>
            <span className={`text-[13px] ${overHero ? 'text-cream/60' : 'text-ink-3'}`}>唐济舟</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => renderItem(item, navLink))}
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              aria-label={t(ui.switchLangLabel)}
              className={`h-9 rounded-full px-3 text-sm font-medium transition-colors ${
                overHero ? 'text-cream/80 hover:bg-cream/10' : 'text-ink-2 hover:bg-ink/5'
              }`}
            >
              {t(ui.switchLang)}
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
              className={`grid h-9 w-9 place-items-center rounded-full transition-colors ${
                overHero ? 'text-cream/80 hover:bg-cream/10' : 'text-ink-2 hover:bg-ink/5'
              }`}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href={t(contact.resume)}
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-1 hidden rounded-full px-4 py-2 text-sm font-medium transition-colors sm:inline-block ${
                overHero ? 'bg-cream text-green-deep hover:bg-white' : 'bg-green text-cream hover:bg-green-deep'
              }`}
            >
              {t(ui.resume)}
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Menu"
              aria-expanded={menuOpen}
              className={`grid h-9 w-9 place-items-center rounded-full lg:hidden ${overHero ? 'text-cream' : 'text-ink'}`}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="wrap flex flex-col border-t border-line pb-4 pt-2 lg:hidden">
            {navItems.map((item) => renderItem(item, 'py-3 text-left text-lg text-ink'))}
            <a href={t(contact.resume)} target="_blank" rel="noopener noreferrer" className="py-3 text-lg text-green-text">
              {t(ui.resume)}
            </a>
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  )
}

function Footer() {
  const t = useT()
  const socials = [
    { href: `mailto:${contact.email}`, label: 'Email', Icon: Mail },
    { href: contact.linkedin, label: 'LinkedIn', Icon: Linkedin },
    { href: contact.github, label: 'GitHub', Icon: Github },
    { href: contact.instagram, label: 'Instagram', Icon: Instagram },
  ]

  return (
    <footer className="bg-green-deep text-cream">
      <div className="wrap py-14 sm:py-16">
        <h2 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">{t(ui.sayHi)}</h2>
        <a
          href={`mailto:${contact.email}`}
          className="mt-6 inline-block font-serif text-xl text-cream underline decoration-gold/60 underline-offset-[6px] hover:decoration-gold sm:text-2xl"
        >
          {contact.email}
        </a>

        <div className="mt-14 flex flex-col gap-6 border-t border-cream/15 pt-8 text-sm text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Colin (Jizhou) Tang</p>
          <div className="flex gap-2">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-cream/60 hover:text-cream"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
