import { useEffect, useState } from "react";
import { Link } from "react-router";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = (await response.json()) as Post[];

    setPosts(result);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <main>
      <h2>Hello, It's me homepage</h2>

      <ul className="grid grid-cols-5 gap-[20px]">
        {posts.map((post) => (
          <li className="p-[20px] bg-zinc-800" key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
