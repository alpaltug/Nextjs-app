'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ExternalLinkIcon, PlayIcon, CodeIcon } from '@radix-ui/react-icons'

interface ActionButtonProps {
  href: string
  icon?: 'play' | 'code' | 'external'
  children: React.ReactNode
  isExternal?: boolean
}

const icons = {
  play: PlayIcon,
  code: CodeIcon,
  external: ExternalLinkIcon,
}

export function ActionButton({ 
  href, 
  icon = 'external',
  children,
  isExternal = true 
}: ActionButtonProps) {
  const IconComponent = icons[icon]
  const ButtonWrapper = isExternal ? 'a' : Link
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <ButtonWrapper
        href={href}
        className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-lg font-medium text-neutral-900 dark:text-neutral-100 transition-colors"
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        <IconComponent className="h-4 w-4" />
      </ButtonWrapper>
    </motion.div>
  )
} 