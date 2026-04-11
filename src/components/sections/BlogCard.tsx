import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="rounded-2xl bg-white border border-gray-100 shadow-md overflow-hidden card-hover h-full flex flex-col">
      {/* Placeholder Image */}
      <div className="h-48 bg-gradient-to-br from-purple-600 to-violet-700 flex items-center justify-center">
        <div className="text-center px-6">
          <div className="text-white/60 text-xs uppercase tracking-wider mb-2">{post.category}</div>
          <div className="text-white font-bold text-lg leading-tight line-clamp-3">{post.title}</div>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
          <span className="flex items-center gap-1">
            <Tag className="h-3.5 w-3.5" />
            {post.category}
          </span>
        </div>

        <h2 className="text-base font-bold text-gray-900 mb-3 line-clamp-2 flex-1">
          {post.title}
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold text-sm transition-colors"
        >
          Read More <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
