const addImput = document.querySelector("#add-task");
const filterInput = document.querySelector("#filter-task");
const taskList = document.querySelector("#task-list");

function actionBtn() {
  const taskString = addImput.value;
  const taskParaf = document.createElement("p");
  taskParaf.textContent = taskString;
  taskParaf.classList.add("task");
  taskList.appendChild(taskParaf);
  addImput.value = "";
  addImput.focus();
}

function filterTask() {
  const filterString = filterInput.value;
  const allTasks = taskList.querySelectorAll("p");
  allTasks.forEach((task) => {
    const yep = task.textContent.includes(filterString);
    if (yep === false) {
      task.classList.add("hide-task");
    } else {
      task.classList.remove("hide-task");
    }
  });
}
