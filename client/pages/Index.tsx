import { useState } from "react";
import { BlogCard } from "@/components/post/BlogCard";
import { Pagination } from "@/components/ui/pagination";
import { Footer } from "@/components/layout/Footer";
import { useRecommendedPosts, useMostLikedPosts } from "@/hooks/use-posts";
import { useAuth } from "@/hooks/use-auth";

export default function Index() {
  const { isAuthenticated } = useAuth();
  const [recommendedPage, setRecommendedPage] = useState(1);
  const [mostLikedPage, setMostLikedPage] = useState(1);
  const postsPerPage = 5;

  const {
    data: recommendedPosts,
    isLoading: loadingRecommended,
    error: errorRecommended,
  } = useRecommendedPosts(recommendedPage, postsPerPage);

  const {
    data: mostLikedPosts,
    isLoading: loadingMostLiked,
    error: errorMostLiked,
  } = useMostLikedPosts(mostLikedPage, postsPerPage);

  const renderSkeletonCards = () => (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="space-y-3 animate-pulse">
          <div className="h-4 bg-muted rounded w-3/4" />
          <div className="flex gap-2">
            <div className="h-6 bg-muted rounded w-20" />
            <div className="h-6 bg-muted rounded w-16" />
            <div className="h-6 bg-muted rounded w-14" />
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-muted rounded w-full" />
            <div className="h-3 bg-muted rounded w-2/3" />
          </div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-muted rounded-full" />
            <div className="h-3 bg-muted rounded w-20" />
            <div className="h-1 w-1 bg-muted rounded-full" />
            <div className="h-3 bg-muted rounded w-16" />
          </div>
          <div className="flex gap-3">
            <div className="h-3 bg-muted rounded w-8" />
            <div className="h-3 bg-muted rounded w-8" />
            <div className="h-3 bg-muted rounded w-8" />
          </div>
        </div>
      ))}
    </div>
  );

  const renderPosts = (
    posts: any[] | undefined,
    isLoading: boolean,
    error: any,
  ) => {
    if (isLoading) return renderSkeletonCards();

    if (error) {
      return (
        <div className="text-center py-8">
          <p className="text-sm text-muted-foreground">
            Failed to load posts. Please try again.
          </p>
        </div>
      );
    }

    if (!posts || posts.length === 0) {
      return (
        <div className="text-center py-8">
          <p className="text-sm text-muted-foreground">No posts available</p>
        </div>
      );
    }

    return (
      <>
        {posts.map((post, index) => (
          <div key={post.id}>
            <BlogCard post={post} className="" />
            {/* Divider between posts */}
            {index < posts.length - 1 && (
              <div className="w-full h-px bg-[#D5D7DA] mt-6" />
            )}
          </div>
        ))}
      </>
    );
  };

  const calculateTotalPages = (totalItems: number) =>
    Math.ceil(totalItems / postsPerPage);

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="w-full max-w-sm mx-auto md:max-w-4xl lg:max-w-6xl xl:max-w-7xl">
        {isAuthenticated ? (
          /* Authenticated: Two Column Layout */
          <div className="md:grid md:grid-cols-2 md:gap-8 lg:gap-12">
            {/* Left Column - Recommend For You */}
            <section className="px-4 py-6 md:px-0 md:pl-8 lg:pl-12">
              <h1 className="text-xl font-bold text-[#181D27] leading-9 mb-6">
                Recommend For You
              </h1>

              <div className="space-y-6">
                {renderPosts(
                  recommendedPosts?.data,
                  loadingRecommended,
                  errorRecommended,
                )}
              </div>

              {/* Pagination for Recommended */}
              {recommendedPosts?.data && recommendedPosts.data.length > 0 && (
                <div className="mt-8">
                  <Pagination
                    currentPage={recommendedPage}
                    totalPages={calculateTotalPages(
                      recommendedPosts.total || recommendedPosts.data.length,
                    )}
                    onPageChange={setRecommendedPage}
                  />
                </div>
              )}
            </section>

            {/* Right Column - Most Liked */}
            <section className="px-4 py-6 md:px-0 md:pr-8 lg:pr-12 md:border-l md:border-[#D5D7DA]">
              {/* Mobile Divider - only visible on mobile */}
              <div className="w-full h-1.5 bg-[#D5D7DA] mb-6 md:hidden" />

              <h2 className="text-xl font-bold text-[#181D27] leading-9 mb-6 md:pl-8 lg:pl-12">
                Most Liked
              </h2>

              <div className="md:pl-8 lg:pl-12">
                <div className="space-y-6">
                  {renderPosts(
                    mostLikedPosts?.data,
                    loadingMostLiked,
                    errorMostLiked,
                  )}
                </div>

                {/* Pagination for Most Liked */}
                {mostLikedPosts?.data && mostLikedPosts.data.length > 0 && (
                  <div className="mt-8">
                    <Pagination
                      currentPage={mostLikedPage}
                      totalPages={calculateTotalPages(
                        mostLikedPosts.total || mostLikedPosts.data.length,
                      )}
                      onPageChange={setMostLikedPage}
                    />
                  </div>
                )}
              </div>
            </section>
          </div>
        ) : (
          /* Not authenticated: Single column layout */
          <section className="px-4 py-6 md:px-8 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column - Recommend For You (no auth needed for display) */}
              <div>
                <h1 className="text-xl font-bold text-[#181D27] leading-9 mb-6">
                  Recommend For You
                </h1>
                <div className="space-y-6">
                  {renderPosts(
                    mostLikedPosts?.data?.slice(
                      0,
                      Math.ceil((mostLikedPosts?.data?.length || 0) / 2),
                    ),
                    loadingMostLiked,
                    errorMostLiked,
                  )}
                </div>
              </div>

              {/* Right Column - Most Liked */}
              <div className="md:border-l md:border-[#D5D7DA] md:pl-8 lg:pl-12">
                {/* Mobile Divider */}
                <div className="w-full h-1.5 bg-[#D5D7DA] mb-6 md:hidden" />

                <h2 className="text-xl font-bold text-[#181D27] leading-9 mb-6">
                  Most Liked
                </h2>
                <div className="space-y-6">
                  {renderPosts(
                    mostLikedPosts?.data?.slice(
                      Math.ceil((mostLikedPosts?.data?.length || 0) / 2),
                    ),
                    loadingMostLiked,
                    errorMostLiked,
                  )}
                </div>
              </div>
            </div>

            {/* Pagination for Not Authenticated */}
            {mostLikedPosts?.data && mostLikedPosts.data.length > 0 && (
              <div className="mt-8 flex justify-center">
                <Pagination
                  currentPage={mostLikedPage}
                  totalPages={calculateTotalPages(
                    mostLikedPosts.total || mostLikedPosts.data.length,
                  )}
                  onPageChange={setMostLikedPage}
                />
              </div>
            )}
          </section>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
