import { useState } from "react";
import { posts } from "../lib/constants";

const NewsList = () => {
  const [news, setNews] = useState(posts);
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  function deletePost() {
    setNews(news.slice(1));
  }

  function addPost() {
    setNews([
      ...news,
      {
        category: "Чай",
        id: Date.now(),
        title: value,
      },
    ]);

    setValue("");
  }

  return (
    <div>
      <div>
        <input
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        <button onClick={addPost}>Добавить пост</button>
      </div>

      <select
        value={category}
        onChange={(event) => {
          // setCategory ... posts and update news
        }}
      >
        <option value={"Чай"}>Чай</option>
        <option value={"Кофе"}>Кофе</option>
      </select>

      <button onClick={deletePost}>Удалить пост</button>
      {news.map((post) => (
        <article className="article">
          <h2 className="article__title">{post.title}</h2>
        </article>
      ))}

      {news.length === 0 && <div>Простите но постов нет :(</div>}
    </div>
  );
};

export default NewsList;
