class Task {
    constructor(description) {
      this.id = Math.floor(Math.random() * 1000 + 1);
      this.description = description;
      this.completed = false;
    }
  }
// new Task(id, description, completed)
export default Task;