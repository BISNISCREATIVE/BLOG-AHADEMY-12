import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Post } from "@shared/types";
import { Heart, MessageCircle } from "lucide-react";
import { useLikePost } from "@/hooks/use-posts";
import { useAuth } from "@/hooks/use-auth";
import { formatDistanceToNow } from "date-fns";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: Post;
  className?: string;
}

export function BlogCard({ post, className }: BlogCardProps) {
  const { isAuthenticated } = useAuth();
  const likeMutation = useLikePost();

  const handleLike = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isAuthenticated) return;
    likeMutation.mutate(post.id.toString());
  };

  const handleComment = (e: React.MouseEvent) => {
    e.preventDefault();
    // Navigate to post detail with comments section
  };

  const timeAgo = formatDistanceToNow(new Date(post.createdAt), {
    addSuffix: false,
  });

  return (
    <article className={cn("flex flex-col gap-4 bg-white", className)}>
      {/* Title */}
      <Link to={`/post/${post.id}`}>
        <h2 className="text-base font-bold text-[#181D27] leading-7 line-clamp-2 hover:text-[#0093DD] transition-colors">
          {post.title}
        </h2>
      </Link>

      {/* Tags - only show if authenticated */}
      {isAuthenticated && (
        <div className="flex items-start gap-2 flex-wrap">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="h-7 px-2 text-xs font-normal border-[#D5D7DA] text-[#181D27] bg-white rounded-lg"
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}

      {/* Description */}
      <Link to={`/post/${post.id}`}>
        <p className="text-xs font-normal text-[#181D27] leading-6 line-clamp-2">
          {post.content}
        </p>
      </Link>

      {/* Author Info */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Avatar className="h-[30px] w-[30px]">
            <AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
            <AvatarFallback className="text-xs">
              {post.author.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="text-xs font-normal text-[#181D27] leading-6">
            {post.author.name}
          </span>
        </div>

        {/* Dot separator */}
        <div className="w-1 h-1 bg-[#A4A7AE] rounded-full" />

        {/* Date */}
        <span className="text-xs font-normal text-[#535862] leading-6">
          {timeAgo}
        </span>
      </div>

      {/* Interaction Bar */}
      <div className="flex items-center gap-3">
        {/* Like Button */}
        <Button
          variant="ghost"
          size="sm"
          className="h-auto p-0 hover:bg-transparent"
          onClick={handleLike}
          disabled={!isAuthenticated || likeMutation.isPending}
        >
          <div className="flex items-center gap-1.5">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#535862]"
            >
              <path
                d="M6.2334 15.2916L8.81673 17.2916C9.15006 17.6249 9.90006 17.7916 10.4001 17.7916H13.5667C14.5667 17.7916 15.6501 17.0416 15.9001 16.0416L17.9001 9.95823C18.3167 8.79156 17.5667 7.79156 16.3167 7.79156H12.9834C12.4834 7.79156 12.0667 7.37489 12.1501 6.79156L12.5667 4.12489C12.7334 3.37489 12.2334 2.54156 11.4834 2.29156C10.8167 2.04156 9.9834 2.37489 9.65006 2.87489L6.2334 7.95823"
                stroke="currentColor"
                strokeWidth="1.66667"
                strokeMiterlimit="10"
              />
              <path
                d="M1.9834 15.2915V7.12484C1.9834 5.95817 2.4834 5.5415 3.65007 5.5415H4.4834C5.65006 5.5415 6.15007 5.95817 6.15007 7.12484V15.2915C6.15007 16.4582 5.65006 16.8748 4.4834 16.8748H3.65007C2.4834 16.8748 1.9834 16.4582 1.9834 15.2915Z"
                stroke="currentColor"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xs font-normal text-[#535862] leading-6">
              {post.likes}
            </span>
          </div>
        </Button>

        {/* Comment Button */}
        <Button
          variant="ghost"
          size="sm"
          className="h-auto p-0 hover:bg-transparent"
          onClick={handleComment}
        >
          <div className="flex items-center gap-1.5">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#535862]"
            >
              <path
                d="M2.5 6.5C2.5 5.09987 2.5 4.3998 2.77248 3.86502C3.01217 3.39462 3.39462 3.01217 3.86502 2.77248C4.3998 2.5 5.09987 2.5 6.5 2.5H13.5C14.9001 2.5 15.6002 2.5 16.135 2.77248C16.6054 3.01217 16.9878 3.39462 17.2275 3.86502C17.5 4.3998 17.5 5.09987 17.5 6.5V11C17.5 12.4001 17.5 13.1002 17.2275 13.635C16.9878 14.1054 16.6054 14.4878 16.135 14.7275C15.6002 15 14.9001 15 13.5 15H11.4031C10.8831 15 10.6231 15 10.3743 15.051C10.1537 15.0963 9.94017 15.1712 9.73957 15.2737C9.51347 15.3892 9.31043 15.5517 8.90434 15.8765L6.91646 17.4668C6.56973 17.7442 6.39636 17.8829 6.25045 17.8831C6.12356 17.8832 6.00352 17.8255 5.92436 17.7263C5.83333 17.6123 5.83333 17.3903 5.83333 16.9463V15C5.05836 15 4.67087 15 4.35295 14.9148C3.49022 14.6836 2.81635 14.0098 2.58519 13.147C2.5 12.8291 2.5 12.4416 2.5 11.6667V6.5Z"
                stroke="currentColor"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-xs font-normal text-[#535862] leading-6">
              {post.comments}
            </span>
          </div>
        </Button>

        {/* Share Count (matching Figma design) */}
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-normal text-[#535862] leading-7">
            20
          </span>
        </div>
      </div>
    </article>
  );
}
