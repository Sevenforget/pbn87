"use client"

import type { Post } from "@/lib/posts"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

interface PostCardProps {
  post: Post
  index: number
}

export function PostCard({ post, index }: PostCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // 카드 배경 색상 랜덤 선택 (파스텔 톤)
  const gradients = [
    "from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30",
    "from-blue-100 to-teal-100 dark:from-blue-900/30 dark:to-teal-900/30",
    "from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30",
    "from-emerald-100 to-cyan-100 dark:from-emerald-900/30 dark:to-cyan-900/30",
    "from-rose-100 to-fuchsia-100 dark:from-rose-900/30 dark:to-fuchsia-900/30",
  ]

  const gradient = gradients[index % gradients.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/posts/${index}`}>
        <Card
          className={`h-full overflow-hidden transition-all duration-300 bg-gradient-to-br ${gradient} hover:shadow-lg border-transparent`}
        >
          <CardHeader className="pb-2">
            <h3 className="text-xl font-bold tracking-tight">{post.title}</h3>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground line-clamp-3">
              {post.content.substring(0, 150)}
              {post.content.length > 150 ? "..." : ""}
            </p>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-2">
            <div className="flex flex-wrap gap-2">
              {post.tags?.map((tag, i) => (
                <Badge key={i} variant="outline" className="bg-background/50 backdrop-blur-sm">
                  {tag}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">작성자: {post.author || "관리자"}</p>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  )
}
