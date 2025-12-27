import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import projectsData from '../data/projects.json'

export default function PhotoGallery() {
  const { projectId } = useParams()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  // 查找项目数据
  const project = projectsData.find(p => p.id === projectId)

  if (!project) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <Link to="/photography" className="text-primary-600 dark:text-primary-400 hover:underline">
          ← Back to Photography
        </Link>
      </div>
    )
  }

  const images = project.images || []
  const currentImage = images[currentImageIndex] || images[0]

  // 如果没有图片，显示提示
  if (images.length === 0) {
    return (
      <div className="space-y-6">
        <Link
          to="/photography"
          className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Photography</span>
        </Link>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">No images available</h2>
          <p className="text-gray-600 dark:text-gray-400">This project doesn't have any images yet.</p>
        </div>
      </div>
    )
  }

  // 键盘导航
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (isFullscreen) {
        if (e.key === 'ArrowLeft' && currentImageIndex > 0) {
          setCurrentImageIndex(currentImageIndex - 1)
        } else if (e.key === 'ArrowRight' && currentImageIndex < images.length - 1) {
          setCurrentImageIndex(currentImageIndex + 1)
        } else if (e.key === 'Escape') {
          setIsFullscreen(false)
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [currentImageIndex, images.length, isFullscreen])

  const nextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
    }
  }

  return (
    <div className="space-y-6">
      {/* 返回按钮 */}
      <Link
        to="/photography"
        className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Back to Photography</span>
      </Link>

      {/* 项目标题 */}
      <div>
        <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
        {project.description && (
          <p className="text-lg text-gray-600 dark:text-gray-400">{project.description}</p>
        )}
      </div>

      {/* YouTube 视频（如果是视频项目） */}
      {project.youtubeId && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Video</h2>
          <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${project.youtubeId}`}
              title={`${project.title} - YouTube video player`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}

      {/* 照片网格 */}
      {!isFullscreen && (
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Click on any image to view in fullscreen. Use arrow keys to navigate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 cursor-pointer border border-gray-200 dark:border-gray-700"
                onClick={() => {
                  setCurrentImageIndex(index)
                  setIsFullscreen(true)
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt || `${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = '<div class="flex items-center justify-center h-full text-gray-400">Image not found</div>'
                  }}
                />
                {image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-3 text-sm">
                    {image.caption}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 全屏查看模式 */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          {/* 关闭按钮 */}
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 p-2"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          {/* 上一张按钮 */}
          {currentImageIndex > 0 && (
            <button
              onClick={prevImage}
              className="absolute left-4 text-white hover:text-gray-300 p-2"
              aria-label="Previous"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {/* 图片 */}
          <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
            <img
              src={currentImage?.src}
              alt={currentImage?.alt || `${project.title} - Image ${currentImageIndex + 1}`}
              className="max-h-[85vh] max-w-full object-contain rounded-lg"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentElement.innerHTML = '<div class="text-white text-xl">Image not found</div>'
              }}
            />
            {currentImage?.caption && (
              <div className="mt-4 text-center text-white max-w-3xl">
                <p className="text-lg font-medium">{currentImage.caption}</p>
              </div>
            )}
          </div>

          {/* 下一张按钮 */}
          {currentImageIndex < images.length - 1 && (
            <button
              onClick={nextImage}
              className="absolute right-4 text-white hover:text-gray-300 p-2"
              aria-label="Next"
            >
              <ChevronRight size={32} />
            </button>
          )}

          {/* 图片计数器 */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  )
}

