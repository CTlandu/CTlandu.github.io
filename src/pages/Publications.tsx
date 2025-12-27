export default function Publications() {
  return (
    <div className="container-content py-12">
      <h1 className="text-4xl font-bold mb-8">Publications</h1>
      
      <div className="text-center py-12 text-gray-600 dark:text-gray-400">
        <p className="text-lg mb-4">
          Publications section is being migrated.
        </p>
        <p className="text-sm">
          Note: The BibTeX bibliography from `_bibliography/papers.bib` can be processed and
          displayed using a React component. You may want to use a library like{' '}
          <a
            href="https://github.com/larsgw/citation.js"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 dark:text-primary-400 hover:underline"
          >
            Citation.js
          </a>{' '}
          to parse and render BibTeX entries.
        </p>
      </div>
    </div>
  )
}

