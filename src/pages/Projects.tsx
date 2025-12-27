import { ExternalLink, Github } from 'lucide-react'
import projectsData from '../data/github_projects.json'

export default function Projects() {
  return (
    <div className="container-content py-12">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
            </a>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-2"
                >
                  {project.name}
                  <ExternalLink size={16} />
                </a>
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Tech Stack:
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <Github size={16} />
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">My GitHub Contributions</h2>
        <a
          href="https://github.com/CTlandu"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src="https://ghchart.rshah.org/CTlandu"
            alt="CTlandu's GitHub Contributions"
            className="w-full"
          />
        </a>
      </div>
    </div>
  )
}

