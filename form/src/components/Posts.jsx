import React, { useEffect } from "react";
import { useState } from "react";
export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  });
  return (
    <div>
      <ul className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-5 p-3.5">
        {posts.map((post) => (
          <li key={post.id} className="border p-2.5">
            <p className="font-bold text-[20px]">
              <span>{post.id}.</span>
              {post.title}
            </p>
            <p className="italic text-[18px]">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
