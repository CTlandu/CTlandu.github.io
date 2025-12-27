export default function Photography() {
  return (
    <div className="container-content py-12">
      <h1 className="text-4xl font-bold mb-8">Photography</h1>
      
      <div className="mb-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
        <p className="text-lg">
          🎉 Recent photography award:{' '}
          <a
            href="https://www.instagram.com/p/C_twhg3oUM2/?igsh=MWt5MjVlMmJlbmZuNA=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 dark:text-primary-400 hover:underline font-semibold"
          >
            Winner of AAP Magazine 41 B&W
          </a>
        </p>
      </div>

      <div className="text-center py-12 text-gray-600 dark:text-gray-400">
        <p className="text-lg mb-4">
          Photography gallery is being migrated. Please check out my{' '}
          <a
            href="https://www.instagram.com/ctphotography77/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 dark:text-primary-400 hover:underline"
          >
            Instagram
          </a>{' '}
          for now.
        </p>
        <p className="text-sm">
          Note: The photography projects from the original Jekyll site can be migrated by converting
          the Markdown files in `_projects/` to React components.
        </p>
      </div>
    </div>
  )
}

