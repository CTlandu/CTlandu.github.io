import { useState } from 'react'
import { Link } from 'react-router-dom'
import projectsData from '../data/projects.json'

export default function Photography() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', 'Photography', 'Videos']

  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Photography</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          A collection of some of my photography & video works
        </p>
        
        <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg mb-8">
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">🎉 Recent photography award:</span>{' '}
            <a 
              href="https://www.instagram.com/p/C_twhg3oUM2/?igsh=MWt5MjVlMmJlbmZuNA==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              Winner of AAP Magazine 41 B&W
            </a>
          </p>
        </div>
      </div>

      {/* 分类筛选 */}
      <div className="flex gap-2 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === category
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 项目网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            to={`/photography/${project.id}`}
            className="group block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-200 dark:border-gray-700 cursor-pointer"
          >
            <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
              <img
                src={project.thumbnail || project.img}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {project.category}
              </p>
              {project.description && (
                <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-2">
                  {project.description}
                </p>
              )}
              {project.images && project.images.length > 0 && (
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  {project.images.length} {project.images.length === 1 ? 'photo' : 'photos'}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

