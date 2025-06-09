import { PostDetail } from "@/components/post-detail";
import { fetchPostFromApi } from "@/lib/api-service";
import { getCurrentProjectDomain } from "@/lib/domain-mapper";
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postId = Number.parseInt(id);

  if (isNaN(postId) || postId < 0) {
    notFound();
  }

  try {
    // 현재 프로젝트의 도메인 자동 감지
    const communityUrl = "https://urbanlyric.com"; // 하드코딩된 도메인 (pbn-domains.json 기반)

    // API에서 게시물 데이터 가져오기
    const post = await fetchPostFromApi(communityUrl, postId);

    return (
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10 blur-sm"
          style={{ backgroundImage: "url('/images/background.png')" }}
        />
        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <PostDetail post={post} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("게시물 로드 실패:", error);
    notFound();
  }
}
