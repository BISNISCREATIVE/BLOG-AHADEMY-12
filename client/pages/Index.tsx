import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PostCard } from "@/components/post/PostCard";
import { useRecommendedPosts, useMostLikedPosts } from "@/hooks/use-posts";
import { useAuth } from "@/hooks/use-auth";
import { TrendingUp, Star, Loader2, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const { isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState("recommended");

  const {
    data: recommendedPosts,
    isLoading: loadingRecommended,
    error: errorRecommended,
    refetch: refetchRecommended,
  } = useRecommendedPosts(1, 10);

  const {
    data: mostLikedPosts,
    isLoading: loadingMostLiked,
    error: errorMostLiked,
    refetch: refetchMostLiked,
  } = useMostLikedPosts(1, 10);

  const isLoading =
    activeTab === "recommended" ? loadingRecommended : loadingMostLiked;
  const error = activeTab === "recommended" ? errorRecommended : errorMostLiked;
  const posts =
    activeTab === "recommended" ? recommendedPosts?.data : mostLikedPosts?.data;

  const handleRefresh = () => {
    if (activeTab === "recommended") {
      refetchRecommended();
    } else {
      refetchMostLiked();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Share Your <span className="text-primary">Ideas</span> with the
              World
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover amazing stories, connect with fellow writers, and share
              your thoughts with a community that values great content.
            </p>
            {isAuthenticated ? (
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/write">Start Writing</Link>
              </Button>
            ) : (
              <div className="flex gap-4 justify-center">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/register">Get Started</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8"
                >
                  <Link to="/login">Sign In</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Posts Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Explore Articles</h2>
            <Button
              variant="outline"
              size="sm"
              onClick={handleRefresh}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <RefreshCw className="h-4 w-4" />
              )}
              Refresh
            </Button>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 max-w-md">
              <TabsTrigger
                value="recommended"
                className="flex items-center gap-2"
              >
                <Star className="h-4 w-4" />
                Recommended
              </TabsTrigger>
              <TabsTrigger value="trending" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Most Liked
              </TabsTrigger>
            </TabsList>

            <TabsContent value="recommended" className="mt-8">
              <div className="space-y-6">
                {isLoading ? (
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-96 bg-muted animate-pulse rounded-lg"
                      />
                    ))}
                  </div>
                ) : error ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">
                      Failed to load recommended posts
                    </p>
                    <Button onClick={handleRefresh} variant="outline">
                      Try Again
                    </Button>
                  </div>
                ) : posts && posts.length > 0 ? (
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                      <PostCard key={post.id} post={post} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No posts available</p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="trending" className="mt-8">
              <div className="space-y-6">
                {isLoading ? (
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-96 bg-muted animate-pulse rounded-lg"
                      />
                    ))}
                  </div>
                ) : error ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">
                      Failed to load most liked posts
                    </p>
                    <Button onClick={handleRefresh} variant="outline">
                      Try Again
                    </Button>
                  </div>
                ) : posts && posts.length > 0 ? (
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                      <PostCard key={post.id} post={post} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No posts available</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>

          {/* Load More Button */}
          {posts && posts.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      {!isAuthenticated && (
        <section className="border-t bg-muted/30">
          <div className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h3 className="text-3xl font-bold">Ready to Share Your Story?</h3>
              <p className="text-lg text-muted-foreground">
                Join our community of writers and readers. Start your blogging
                journey today.
              </p>
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/register">Join Now</Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
