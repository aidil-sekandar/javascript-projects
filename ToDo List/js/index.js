const inputTask = document.querySelector("#input-task");
const addBtn = document.querySelector("#add-btn");
const taskList = document.querySelector(".task-list");

addBtn.addEventListener("click", () => {
  if (inputTask.value === "") {
    alert("no input!!!!!");
  } else {
    const li = document.createElement("li");
    li.classList.add("task");
    li.innerHTML = `
      <span>${inputTask.value}</span>
      <button class="delete-btn">
        <i class="far fa-trash-alt"></i>
      </button>
    `;
    taskList.append(li);
  }
  const current_tasks = document.querySelectorAll(".delete-btn");
  for (let i = 0; i < current_tasks.length; i++) {
    current_tasks[i].onclick = function () {
      this.parentNode.remove();
    };
  }
});
