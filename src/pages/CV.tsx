export default function CV() {
  return (
    <div className="container-content py-12">
      <h1 className="text-4xl font-bold mb-8">CV / Resume</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-700">
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          You can download my resume in PDF format:
        </p>
        <a
          href="/assets/pdf/Colin_Tang_NG_resume_1-17-2025.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
        >
          Download Resume (PDF)
        </a>
        
        <div className="mt-8 text-sm text-gray-600 dark:text-gray-400">
          <p>
            Note: Detailed CV content from `_data/cv.yml` can be migrated to a React component
            for online viewing.
          </p>
        </div>
      </div>
    </div>
  )
}

