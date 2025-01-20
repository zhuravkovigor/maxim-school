import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Post } from "./index";

const Post = () => {
  const { id } = useParams();

  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getPost = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const result = (await response.json()) as Post;

    setPost(result);
    setIsLoading(false);
  };

  useEffect(() => {
    getPost();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </div>
  );
};

export default Post;
