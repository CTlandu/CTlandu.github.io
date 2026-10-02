import { useCallback, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, X, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import projectsData from '../data/projects.json'
import { thumb, thumbSize } from '../lib/images'
import { useT, ui } from '../lib/i18n'

export default function PhotoGallery() {
  const t = useT()
  const { projectId } = useParams()
  const project = projectsData.find((p) => p.id === projectId)
  const [open, setOpen] = useState(null)

  if (!project) {
    return (
      <div className="wrap pb-24 pt-32 text-center">
        <h1 className="font-serif text-3xl font-semibold">{t(ui.notFound)}</h1>
        <Link to="/photography" className="link-arrow mt-6">
          <ArrowLeft size={16} /> {t(ui.photography)}
        </Link>
      </div>
    )
  }

  const images = project.images

  return (
    <div className="wrap pb-24 pt-28 sm:pt-32">
      <Link to="/photography" className="inline-flex items-center gap-2 text-sm text-ink-2 hover:text-ink">
        <ArrowLeft size={16} /> {t(ui.photography)}
      </Link>
      <h1 className="mt-6 font-serif text-5xl font-semibold tracking-[-0.02em] sm:text-6xl">{t(project.title)}</h1>
      <p className="mt-3 text-lg text-ink-2">
        {t(project.description)} · {t(ui.photoCount)(images.length)}
      </p>

      {project.youtubeId && <YouTube id={project.youtubeId} title={t(project.title)} poster={thumb(project.thumbnail)} />}

      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setOpen(i)}
            className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl bg-paper-2 text-left"
          >
            <img
              src={thumb(image.src)}
              alt={image.alt || `${t(project.title)} ${i + 1}`}
              {...thumbSize(image.src)}
              loading={i < 6 ? 'eager' : 'lazy'}
              decoding="async"
              className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
            />
            {image.caption && (
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 pt-10 text-sm text-white">
                {image.caption}
              </span>
            )}
          </button>
        ))}
      </div>

      {open !== null && <Lightbox images={images} index={open} onChange={setOpen} onClose={() => setOpen(null)} />}
    </div>
  )
}

function YouTube({ id, title, poster }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="relative mt-10 aspect-video overflow-hidden rounded-2xl bg-black">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} className="group absolute inset-0" aria-label={`Play ${title}`}>
          <img src={poster} alt="" className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-95" />
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-cream/95 text-green-deep shadow-xl transition-transform group-hover:scale-105">
              <Play size={30} fill="currentColor" className="ml-1" />
            </span>
          </span>
        </button>
      )}
    </div>
  )
}

function Lightbox({ images, index, onChange, onClose }) {
  const image = images[index]
  const prev = useCallback(() => index > 0 && onChange(index - 1), [index, onChange])
  const next = useCallback(() => index < images.length - 1 && onChange(index + 1), [index, images.length, onChange])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [prev, next, onClose])

  useEffect(() => {
    const following = images[index + 1]
    if (following) new Image().src = following.src
  }, [images, index])

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-black/95 text-white" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="flex items-center justify-between p-4 text-sm text-white/70">
        <span>
          {index + 1} / {images.length}
        </span>
        <button type="button" onClick={onClose} aria-label="Close" className="grid h-10 w-10 place-items-center rounded-full hover:bg-white/10">
          <X size={22} />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-16">
        <img
          key={image.src}
          src={image.src}
          alt={image.alt || ''}
          onClick={(e) => e.stopPropagation()}
          className="max-h-full max-w-full object-contain"
          style={{ backgroundImage: `url("${thumb(image.src)}")`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
        />
        {index > 0 && (
          <button
            type="button"
            onClick={(e) => (e.stopPropagation(), prev())}
            aria-label="Previous"
            className="absolute left-2 grid h-12 w-12 place-items-center rounded-full hover:bg-white/10 sm:left-4"
          >
            <ChevronLeft size={30} />
          </button>
        )}
        {index < images.length - 1 && (
          <button
            type="button"
            onClick={(e) => (e.stopPropagation(), next())}
            aria-label="Next"
            className="absolute right-2 grid h-12 w-12 place-items-center rounded-full hover:bg-white/10 sm:right-4"
          >
            <ChevronRight size={30} />
          </button>
        )}
      </div>

      <p className="min-h-[56px] px-4 py-4 text-center text-[15px] text-white/80">{image.caption}</p>
    </div>
  )
}
