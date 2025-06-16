import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Projects',
  description: 'Explore my creative projects and development journey.',
}

export default function Page() {
  return (
    <section className="max-w-4xl">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="font-bold text-4xl mb-4 tracking-tight bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent">My Projects</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
      </div>
      
      {/* Description Card */}
      <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-neutral-900 dark:to-neutral-800 border border-purple-100 dark:border-neutral-700 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-purple-500 rounded-xl shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              Welcome to my project showcase! Here you'll find the creative projects I've been working on, 
              from interactive games to dynamic web applications.
            </p>
          </div>
        </div>
      </div>
      
      {/* Projects Grid */}
      <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-lg p-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-indigo-500 rounded-lg shadow-lg">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">All Projects</h2>
        </div>
        <BlogPosts />
      </div>
    </section>
  )
}
