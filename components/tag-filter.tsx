"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface TagFilterProps {
  tags: string[]
}

export function TagFilter({ tags }: TagFilterProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null)
    } else {
      setSelectedTag(tag)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap gap-2 justify-center mb-8"
    >
      <Badge
        variant={selectedTag === null ? "default" : "outline"}
        className="cursor-pointer text-sm px-3 py-1"
        onClick={() => setSelectedTag(null)}
      >
        전체
      </Badge>
      {tags.map((tag, index) => (
        <Badge
          key={index}
          variant={selectedTag === tag ? "default" : "outline"}
          className="cursor-pointer text-sm px-3 py-1"
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </Badge>
      ))}
    </motion.div>
  )
}
