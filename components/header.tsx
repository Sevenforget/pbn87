"use client"

import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
              MyBlog
            </span>
          </Link>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-6"
        >
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isHome ? "text-primary" : "text-muted-foreground"
            }`}
          >
            홈
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            소개
          </Link>
          <ModeToggle />
        </motion.nav>
      </div>
    </header>
  )
}
