export default function Publications() {
  const publications = [
    {
      title: "Interpretable Routing in Disaster Response Management",
      link: "https://www.yutingyuan.net/zero-covid-policy",
      authors: "Co-author with Professor Yuan Yuting at William & Mary",
      note: "Recipient of William & Mary Faculty Research Grant 2023-2024"
    },
    {
      title: "Designing Recommendation Systems for Matching Students with Research Advisors",
      authors: "Supervised by Professor Yuan Yuting at William & Mary, with Olivia Huang, Fangzhi Li, Yile Xu"
    }
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Research</h1>
        {/* <p className="text-lg text-gray-700 dark:text-gray-300">
          I don't have any publication yet. But there are two research projects I'm currently working on, which may turn into a publication later.
        </p> */}
      </div>

      <div className="space-y-6">
        {publications.map((pub, index) => (
          <div key={index} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              {pub.link ? (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  {pub.title}
                </a>
              ) : (
                pub.title
              )}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              {pub.authors}
            </p>
            {pub.note && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                - {pub.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

