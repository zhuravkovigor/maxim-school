import EventComponent from "./components/Event";
import { EventProps } from "./lib/types";

let tasks: EventProps[] = [];

const unDoneContainer = document.getElementById("js-not-done-container");
const doneContainer = document.getElementById("js-done-container");
const input = document.querySelector<HTMLInputElement>("#js-input");
const btn = document.getElementById("js-add");

btn?.addEventListener("click", function () {
  if (input?.value) {
    tasks.push({
      done: false,
      id: Date.now(),
      title: input.value,
    });
    render();
    input.value = "";
  }
});

function render() {
  if (unDoneContainer && doneContainer) {
    unDoneContainer.innerHTML = "";
    doneContainer.innerHTML = "";

    tasks.forEach((task) => {
      if (task.done) {
        doneContainer.innerHTML += EventComponent(task);
      } else {
        unDoneContainer.innerHTML += EventComponent(task);
      }
    });

    const components = document.querySelectorAll(".event-component");

    components.forEach((component) => {
      component.querySelector("button")?.addEventListener("click", function () {
        const doneId = component.getAttribute("data-id");

        tasks = tasks.map((task) => {
          if (task.id === Number(doneId)) {
            return { ...task, done: true };
          }

          return task;
        });

        render();
      });
    });
  }
}
