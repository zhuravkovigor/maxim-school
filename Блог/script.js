const postsCount = document.querySelector("#posts-count");
const posts = document.querySelector("#posts");
const filterCount = document.querySelector("#count");

filterCount.addEventListener("input", (event) => {
  const value = event.target.value;
  posts.innerHTML = "";

  getPosts(value);
});

function Post(title) {
  const article = document.createElement("article");
  const articleTitle = document.createElement("h2");

  article.className = "post";
  articleTitle.className = "post__title";
  article.style.color = "red";

  article.addEventListener("click", (event) => {
    event.target.style.background = "green";
  });

  articleTitle.innerText = title;

  article.appendChild(articleTitle);

  posts.appendChild(article);
}

function getPosts(length = 5) {
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=" + length)
    .then((res) => res.json())

    .then((posts) => {
      postsCount.innerHTML = posts.length;

      posts.forEach((post) => {
        Post(post.title);
      });
    });
}

getPosts();
