const Model = require("./Model");

class TaskModel extends Model {
  constructor(filePath = "taskData/data.json") {
    Model.count++;
    super(filePath);
    console.log("TaskModel isntance created");
  }

  addNewTask = (title, description) => {
    const tasks = this.readFile();

    const newId =
      (isFinite(Math.max(...this.getAllIdArray()))
        ? Math.max(...this.getAllIdArray())
        : 0) + 1;
    const newTask = {
      id: newId,
      title,
      description,
    };
    tasks.push(newTask);
    this.writeFile(tasks);
    return newTask;
  };
}

module.exports = TaskModel;
