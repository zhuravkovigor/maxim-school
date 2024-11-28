const btn = document.querySelector("#btn");
const body = document.querySelector("body");

if (localStorage.getItem("theme")) {
  const theme = localStorage.getItem("theme");
  console.log(theme);
  if (theme === "dark") {
    body.classList.add("dark-theme");
  } else {
    body.classList.remove("dark-theme");
  }
}

btn.addEventListener("click", () => {
  const theme = localStorage.getItem("theme") || "light";

  if (theme === "dark") {
    body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
  } else {
    body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
  }
});
