export const metadata = {
  title: 'About',
  description: 'Learn more about me, my background, and my journey as a software developer.',
}

export default function Page() {
  return (
    <section className="max-w-4xl">
      <div className="mb-12 text-center">
        <h1 className="font-bold text-4xl mb-4 tracking-tight bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent">About Me</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>
      
      {/* Introduction Card */}
      <div className="mb-8 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-neutral-900 dark:to-neutral-800 border border-blue-100 dark:border-neutral-700 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-500 rounded-xl shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              Hello! I'm a 23-year-old software programmer based in Seattle, WA, working at Amazon. My technical interests include machine learning (LLMs, RAG, text-time inference, training and fine tuning models), full-stack development, designing and building scalable systems.
              Passionate towards learning by creating!
            </p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Background Card */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-500 rounded-lg">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">Background</h2>
          </div>
          
          <div className="space-y-6 text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <div className="p-4 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 rounded-xl border border-neutral-200 dark:border-neutral-600">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">🎓 Education</h3>
              <p>
                I graduated from UC Berkeley with an honors degree in Electrical Engineering and Computer Science on May 2024. I've taken numerous grad-level and upper division courses on topics including machine learning, optimization and probability, databases, operating systems, and more at my time there.
              </p>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 rounded-xl border border-neutral-200 dark:border-neutral-600">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">🔬 Research Experience</h3>
              <p>
                I also took part in research; working as a Machine Learning Researcher at Lawrence Livermore National Laboratory, in the field of quantum physics. I worked on modelling particle collision data to predict anolalistic events in future data. Worked with a GAN to solve this issue. I also worked as a Quantitative Researcher at Wheeler Labs at Berkeley, and love all aspects of computer science research! I also was a member of a couple of clubs such as DataScience@Berkeley, Robo Bears, Engineering Student Council.
              </p>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 rounded-xl border border-neutral-200 dark:border-neutral-600">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">💼 Current Role</h3>
              <p>
                Currently I am working for Amazon as a Software Development Engineer. I am heavily utilizing AWS, Java, JS, TS, Node, Python in my work.
              </p>
            </div>
          </div>
        </div>

        {/* What I Do Card */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-500 rounded-lg">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">What I Do</h2>
          </div>
          
          <div className="space-y-6 text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <div className="p-4 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 rounded-xl border border-neutral-200 dark:border-neutral-600">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">🚀 Current Project</h3>
              <p>
                I like creating simple projects for fun, and am going to share them here! I am currenlty pursuing an intelligent system to store/classify huge amounts of financial data, feed most relevant context per query (efficiently) and be able to reason/predict according to the current context, market trends. On top of this I want this model to be self-adaptive; roughly meaning be able to update its weights as it executes at inference time, and test time!
              </p>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 rounded-xl border border-neutral-200 dark:border-neutral-600">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">🎯 Project Range</h3>
              <p>
                My projects range from interactive games to dynamic web applications, to training and optimizing large language models.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Card */}
      <div className="mb-8 p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-neutral-900 dark:to-neutral-800 border border-amber-200 dark:border-neutral-700 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-amber-500 rounded-xl shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-3">Resume</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              Interested in learning more about my professional experience and technical skills?
            </p>
            <a
              href="/resources/Alp_Altug_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Resume
            </a>
          </div>
        </div>
      </div>

      {/* Connect Card */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-neutral-900 dark:to-neutral-800 border border-emerald-200 dark:border-neutral-700 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-emerald-500 rounded-xl shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">Let's Connect</h2>
        </div>
        
        <div className="space-y-6">
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-lg">
            I'm always interested in discussing new ideas, collaborating on projects, 
            or simply connecting with fellow developers.
          </p>
          
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Feel free to explore my projects and reach out if you'd like to connect!
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 rounded-xl border border-neutral-200 dark:border-neutral-600">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2 flex items-center gap-2">
                <span>📧</span> Personal Email
              </h3>
              <a href="mailto:alpaltug@berkeley.edu" className="text-blue-600 dark:text-blue-400 hover:underline">
                alpaltug@berkeley.edu
              </a>
            </div>
            
            <div className="p-4 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 rounded-xl border border-neutral-200 dark:border-neutral-600">
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2 flex items-center gap-2">
                <span>💼</span> Work Email
              </h3>
              <a href="mailto:alpaltug@amazon.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                alpaltug@amazon.com
              </a>
            </div>
          </div>
          
          <p className="text-neutral-600 dark:text-neutral-400 text-center">
            I am also on <span className="font-semibold">LinkedIn</span> and <span className="font-semibold">GitHub</span>.
          </p>
        </div>
      </div>
    </section>
  )
} 