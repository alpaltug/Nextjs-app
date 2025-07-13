import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

const FEATURED_POSTS = ['welcome-message', 'auto-grad', 'movie-name-generator', 'tokenizer-training', 'generating-shakespeare']

export function FeaturedPosts() {
  let allProjects = getBlogPosts()
  let featuredProjects = allProjects.filter(project => FEATURED_POSTS.includes(project.slug))

  return (
    <div className="space-y-6">
      {featuredProjects
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((project) => (
          <Link
            key={project.slug}
            className="block group"
            href={`/blog/${project.slug}`}
          >
            <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-2">
                      {project.metadata.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
                      {project.metadata.summary}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-500 dark:text-neutral-500">
                    {formatDate(project.metadata.publishedAt, false)}
                  </span>
                  
                  <div className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-200">
                    <span className="mr-2">View Project</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}

export function BlogPosts() {
  let allProjects = getBlogPosts()

  return (
    <div className="space-y-6">
      {allProjects
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((project) => (
          <Link
            key={project.slug}
            className="block group"
            href={`/blog/${project.slug}`}
          >
            <div className="p-6 rounded-xl bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-2">
                      {project.metadata.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">
                      {project.metadata.summary}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-500 dark:text-neutral-500">
                    {formatDate(project.metadata.publishedAt, false)}
                  </span>
                  
                  <div className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-200">
                    <span className="mr-2">View Project</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}
