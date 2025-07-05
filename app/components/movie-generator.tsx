'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export function MovieGenerator() {
  const [currentTitle, setCurrentTitle] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const cleanTitle = (title: string) => {
    return title
      .replace(/\.$/, '') // Remove trailing dot
      .replace(/^['"]|['"]$/g, '') // Remove surrounding quotes
      .replace(/\\'/g, "'") // Handle escaped single quotes
      .trim()
  }

  const generateTitle = async () => {
    setIsGenerating(true)
    try {
      const response = await fetch('/resources/files/movie_generator_output.txt')
      const text = await response.text()
      
      // Parse the Python list format correctly
      const titles = text
        .replace(/^\[|\]$/g, '') // Remove outer brackets
        .split("', '") // Split on title boundaries
        .map(t => t.replace(/^'|'$/g, '').trim()) // Remove quotes and trim
        .filter(t => t && !t.includes("', '")) // Remove any entries that still contain multiple titles
      
      const randomTitle = titles[Math.floor(Math.random() * titles.length)]
      setCurrentTitle(cleanTitle(randomTitle) || 'Error: No titles found')
    } catch (error) {
      console.error('Error generating title:', error)
      setCurrentTitle('Error generating title')
    }
    setIsGenerating(false)
  }

  return (
    <div className="my-8 p-6 bg-gray-900 rounded-xl shadow-lg">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={generateTitle}
        disabled={isGenerating}
        className="w-full px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50"
      >
        {isGenerating ? 'Generating...' : 'Generate a Movie Title'}
      </motion.button>
      
      {currentTitle && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-gray-800 rounded-lg text-center"
        >
          <h3 className="text-xl font-bold text-white">{currentTitle}</h3>
        </motion.div>
      )}
    </div>
  )
} 