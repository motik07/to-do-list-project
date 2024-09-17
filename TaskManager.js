import Task from "./Task.js";

class TaskManager {
    constructor(){
        this.tasks = [];
    }

    addTask(description){
        this.tasks.push(new Task(description));
    }

    deleteTask(id) {
        this.tasks = this.tasks.filter((obj)=> obj.id != id);// obj.id != id תחזיר את כל האובייקטים השונים ממה שהזנת
    }

    updateTaskDescription(id, newDescription){
        let index = this.tasks.findIndex((obj)=> obj.id == id);
        this.tasks[index].description = newDescription;
    }

    completeTask(id) {
        let index = this.tasks.findIndex((obj)=> obj.id == id);
        this.tasks[index].completed = true;
    }
}

export default TaskManager;