import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

let db = {
  todos: [
    {
      id: 1,
      title: "Купить молоко",
      completed: false,
    },
    {
      id: 2,
      title: "Купить хлеб",
      completed: true,
    },
    {
      id: 3,
      title: "Купить кофе",
      completed: false,
    },
    {
      id: 4,
      title: "Купить чай",
      completed: false,
    },
  ],
};

app.get("/todos", (req, res) => {
  res.json(db.todos);
});

app.post("/update/:id", (req, res) => {
  const id = req.params.id;

  db.todos = db.todos.map((todo) => {
    if (todo.id === Number(id)) {
      return {
        ...todo,
        completed: !todo.completed,
      };
    }

    return todo;
  });

  res.json({
    success: true,
  });
});

app.listen(3000, () => {
  console.log("Порт запушен на 6000");
});
