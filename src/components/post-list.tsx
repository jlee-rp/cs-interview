"use client";

import { useLayoutEffect, useRef } from "react";
import posts from "../../public/posts.json";
import { PostCard } from "./cards/post-card";
import { Button } from "./ui/button";

//TODO consider virtualizing this list
export function PostList() {
  return (
    <div className="flex flex-col space-y-4">
      {posts.slice(0, 10).map((post) => (
        <PostCard
            key={post.id}
            {...post}
        />
      ))}
      <Button>Load More Posts...</Button>
    </div>
  );
}
