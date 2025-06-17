import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section className="max-w-4xl">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent">
          Alp Altug
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8"></div>
      </div>
      
      {/* Introduction Card */}
      <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 dark:from-neutral-900 dark:to-neutral-800 border border-slate-200 dark:border-neutral-700 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-slate-700 dark:bg-slate-600 rounded-xl shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              {`Hello there! I'm a 23-year-old software programmer currently based in Seattle, WA. 
              Feel free to navigate through my personal website; where you can find my resume,
               projects I worked on the side for fun, and more.`}
            </p>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-indigo-500 rounded-lg shadow-lg">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">Featured Posts/Projects</h2>
        </div>
        
        <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-lg p-6">
          <BlogPosts />
        </div>
      </div>
    </section>
  )
}
