import { PostCard } from "@/components/post-card"
import { getPosts } from "@/lib/posts"
import { TagFilter } from "@/components/tag-filter"

export default function Home() {
  const posts = getPosts()
  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags || [])))

  return (
    <main className="min-h-screen">
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-20 blur-sm"
          style={{ backgroundImage: "url('/images/background.png')" }}
        />
        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
                나의 생각 저장소
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                일상의 순간들과 생각들을 기록하는 공간입니다. 여기서 나의 이야기를 함께 나눠보세요.
              </p>
            </div>

            <TagFilter tags={allTags} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {posts.map((post, index) => (
                <PostCard key={index} post={post} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
