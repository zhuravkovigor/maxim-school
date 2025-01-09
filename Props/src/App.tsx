import { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

type Post = {
  body: string;
  comments: string[];
  likes: number;
  id: number;
};

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  const handleAddPost = (value: string) => {
    setPosts(() => [
      ...posts,
      {
        id: Date.now(),
        body: value,
        comments: [],
        likes: 0,
      },
    ]);
  };

  const handleAddLike = (id: number) => {
    setPosts(() => {
      return posts.map((post) => {
        if (post.id === id) {
          post.likes += 1;
        }

        return post;
      });
    });
  };

  return (
    <div>
      <PostForm onSubmit={handleAddPost} />

      <PostList posts={posts} onClickLike={handleAddLike} />
    </div>
  );
}

export default App;
