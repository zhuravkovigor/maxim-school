type PostProps = {
  posts: {
    id: number;
    body: string;
    likes: number;
  }[];

  onClickLike: (id: number) => void;
};

const PostList = (props: PostProps) => {
  const { posts, onClickLike } = props;

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <div>{post.body}</div>

          <button onClick={() => onClickLike(post.id)}>
            Like {post.likes}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
