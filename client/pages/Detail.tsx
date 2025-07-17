import { useParams, useNavigate, Link } from "react-router-dom";
import { usePost, useDeletePost } from "@/hooks/use-posts";
import { useAuth } from "@/hooks/use-auth";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowLeft,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Edit,
  Trash2,
  Loader2,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";

export default function Detail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const { data: post, isLoading, error } = usePost(id!);
  const deleteMutation = useDeletePost();

  const handleDelete = async () => {
    if (!id) return;

    try {
      await deleteMutation.mutateAsync(id);
      toast({
        title: "Success",
        description: "Post deleted successfully!",
      });
      navigate("/");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete post",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span>Loading post...</span>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Post Not Found</h2>
          <p className="text-muted-foreground mb-4">
            The post you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate("/")}>Go Back Home</Button>
        </div>
      </div>
    );
  }

  const isOwner = user?.id === post.author.id;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-[#D5D7DA] bg-white px-4 py-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#535862] hover:text-[#181D27]"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="hidden md:inline">Back</span>
          </button>

          {isOwner && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to={`/edit/${post.id}`} className="flex items-center">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Post
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <DropdownMenuItem
                      onSelect={(e) => e.preventDefault()}
                      className="text-red-600 focus:text-red-600"
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete Post
                    </DropdownMenuItem>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your post and remove it from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={handleDelete}
                        disabled={deleteMutation.isPending}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        {deleteMutation.isPending ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Deleting...
                          </>
                        ) : (
                          "Delete"
                        )}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 md:px-8 lg:px-12">
        {/* Post Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#181D27] mb-4">
            {post.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-[#F8F9FA] text-[#535862] border border-[#D5D7DA]"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Author Info */}
          <div className="flex items-center gap-3 mb-6">
            <Avatar className="h-12 w-12">
              <AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
              <AvatarFallback>
                {post.author.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-[#181D27]">
                {post.author.name}
              </h3>
              <p className="text-sm text-[#535862]">
                {formatDistanceToNow(new Date(post.createdAt), {
                  addSuffix: true,
                })}
              </p>
            </div>
          </div>

          {/* Cover Image */}
          {post.imageUrl && (
            <div className="mb-8">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Post Content */}
        <div className="prose prose-lg max-w-none mb-8">
          <div
            className="text-[#181D27] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Post Stats & Actions */}
        <div className="flex items-center gap-6 py-6 border-t border-[#D5D7DA]">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-[#535862]" />
            <span className="text-[#535862]">{post.likes} likes</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-[#535862]" />
            <span className="text-[#535862]">{post.comments} comments</span>
          </div>
        </div>

        {/* Comments Section Placeholder */}
        <div className="mt-8 p-6 bg-[#F8F9FA] rounded-lg border border-[#D5D7DA]">
          <h3 className="text-lg font-semibold text-[#181D27] mb-2">
            Comments
          </h3>
          <p className="text-[#535862]">
            Comments feature is coming soon! Stay tuned for updates.
          </p>
        </div>
      </div>
    </div>
  );
}
