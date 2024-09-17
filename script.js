//^ script.js
import TaskManager from "./TaskManager.js";

let description = document.querySelector("#description");
let activeTasks = document.querySelector("#activeTasks");
let completedTasks = document.querySelector("#completedTasks");

let manager = new TaskManager();

console.log(manager);

function showTask() {
  activeTasks.innerHTML = "";
  completedTasks.innerHTML = "";

  manager.tasks.forEach((task) => {

    // <li class="list-group-item d-inline-block w-50 m-0"><p class="m-0">${task.description}</p></li> 
    const taskHTML = `
      <div class="d-flex justify-content-center m-3 p-2 bg-warning rounded box-shadow">
        <li class="list-group-item d-inline-block w-50 mx-2 rounded box-shadow"><p class="m-0">${task.description}</p></li> 
        <button class="btn btn-success me-1" onclick="completeTask(${task.id})" ${task.completed ? "disabled" : ""}> <i class="fa-solid fa-check"></i></button>
        <button class="btn btn-primary me-1" onclick="updateTaskDescription(${task.id})" ${task.completed ? "disabled" : ""}><i class="text-light fa-sharp fa-solid fa-pencil"></i></button>
        <button class="btn btn-danger me-1" onclick="deleteTask(${task.id})"><i class="fa-solid fa-trash"></i></button>
      </div>
    `;

    if (task.completed) {
      completedTasks.innerHTML += taskHTML;
    } else {
      activeTasks.innerHTML += taskHTML;
    }

  });

}

showTask();

window.addNewTask = function addNewTask() {
  manager.addTask(description.value);
  showTask();
};

window.completeTask = function completedTask(id) {
  manager.completeTask(id);
  showTask();
};

window.updateTaskDescription = function updateTaskDescription(id) {
  let newDescription = prompt("Add new description!");
  manager.updateTaskDescription(id, newDescription);
  showTask();
};

window.deleteTask = function deleteTask(id) {
  manager.deleteTask(id);
  showTask();
};



