'use client'

import React from 'react'
import * as Collapsible from '@radix-ui/react-collapsible'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@radix-ui/react-icons'

interface CollapsibleSectionProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
  level?: 2 | 3 | 4 // for h2, h3, h4
}

export function CollapsibleSection({ 
  title, 
  children, 
  defaultOpen = false,
  level = 3 
}: CollapsibleSectionProps) {
  const [open, setOpen] = React.useState(defaultOpen)
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements
  
  return (
    <Collapsible.Root 
      open={open} 
      onOpenChange={setOpen}
      className="w-full"
    >
      <Collapsible.Trigger asChild>
        <button className="group flex w-full items-center justify-between text-left hover:bg-neutral-50 dark:hover:bg-neutral-900 rounded-lg p-2 -m-2 transition-colors">
          <HeadingTag className="text-xl font-medium tracking-tight mt-6 mb-2">
            {title}
          </HeadingTag>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDownIcon className="h-5 w-5 text-neutral-500" />
          </motion.div>
        </button>
      </Collapsible.Trigger>
      
      <AnimatePresence>
        {open && (
          <Collapsible.Content forceMount asChild>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <div className="pb-4">
                {children}
              </div>
            </motion.div>
          </Collapsible.Content>
        )}
      </AnimatePresence>
    </Collapsible.Root>
  )
}