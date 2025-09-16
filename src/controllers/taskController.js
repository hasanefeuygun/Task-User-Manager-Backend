const TaskModel = require("../models/taskModel");

class TaskController {
  constructor(taskPath) {
    this.taskModel = new TaskModel(taskPath);
    console.log("task controller and task model instance created");
  }

  getAllTasks = (req, res) => {
    const tasks = this.taskModel.getAll();
    if (!tasks.length) return res.json({ error: "There is no tasks to show!" });
    res.json(tasks);

    // res.on("finish", () => {
    //   setImmediate(() => {
    //     this.taskModel = null;
    //     // if (global.gc) global.gc();
    //     // const m = process.memoryUsage();
    //     // console.log(
    //     //   `[after-GC ${req.method} ${req.originalUrl}]`,
    //     //   "heapUsedMB=",
    //     //   (m.heapUsed / 1024 / 1024).toFixed(2),
    //     //   "heapTotalMB=",
    //     //   (m.heapTotal / 1024 / 1024).toFixed(2),
    //     //   "rssMB=",
    //     //   (m.rss / 1024 / 1024).toFixed(2),
    //     //   "externalMB=",
    //     //   (m.external / 1024 / 1024).toFixed(2),
    //     //   "arrayBuffersMB=",
    //     //   (m.arrayBuffers / 1024 / 1024).toFixed(2)
    //     // );
    //   });
    // });
  };
  getTaskById = (req, res) => {
    const task = this.taskModel.getById(req.params.id);
    if (!task) return res.json({ error: "There is no task with that id!" });
    res.json(task);
  };
  addNewTask = (req, res) => {
    if (!req.body.title || !req.body.description)
      return res.json({ error: "Enter valid title or description" });
    const task = this.taskModel.addNewTask(
      req.body.title,
      req.body.description
    );
    res.json(task);
  };
  deleteAllTasks = (req, res) => {
    this.taskModel.deleteAll();
    res.json({ mesage: "All tasks deleted!" });
  };
  deleteTaskById = (req, res) => {
    const deletedTask = this.taskModel.deleteById(req.params.id) || {
      error: "Wrong id!",
    };
    res.json(deletedTask);
  };
}

module.exports = TaskController;

// module.exports = (flagPath) => {
//   // statik sınıf
//   const taskModel = new TaskModel(flagPath);
//   taskModel.controlPath();

//   return {
//     getAllTasks: (req, res) => {
//       const tasks = taskModel.getAll();
//       if (!tasks.length)
//         return res.json({ error: "There is no tasks to show!" });
//       res.json(tasks);
//     },

//     getTaskById: (req, res) => {
//       const task = taskModel.getById(req.params.id);
//       if (!task) return res.json({ error: "There is no task with that id!" });
//       res.json(task);
//     },

//     addNewTask: (req, res) => {
//       if (!req.body.title || !req.body.description)
//         return res.json({ error: "Enter valid title or description" });
//       const task = taskModel.addNewTask(req.body.title, req.body.description);
//       res.json(task);
//     },

//     deleteAllTasks: (req, res) => {
//       taskModel.deleteAll();
//       res.json({ mesage: "All tasks deleted!" });
//     },

//     deleteTaskById: (req, res) => {
//       const deletedTask = taskModel.deleteById(req.params.id) || {
//         error: "Wrong id!",
//       };
//       res.json(deletedTask);
//     },
//   };
// };

// exports.getAllTasks = (req, res) => {
//   const tasks = taskModel.getAll();
//   if (!tasks.length) res.json({ error: "There is no tasks to show!" });
//   res.json(tasks);
// };

// exports.getTaskById = (req, res) => {
//   const task = taskModel.getTaskById(req.params.id);
//   if (!task) res.json({ error: "There is no tasks to show!" });
//   res.json(task);
// };

// exports.addNewTask = (req, res) => {
//   const task = taskModel.addNewTask(req.body.title, req.body.description);
//   res.json(task);
// };

// exports.deleteAll = (req, res) => {
//   taskModel.deleteAllTasks();
//   res.json("All tasks deleted");
// };

// exports.deleteTask = (req, res) => {
//   const deletedTask = taskModel.deleteTaskById(req.params.id) || {
//     error: "Wrong id!",
//   };
//   res.json(deletedTask);
// };

// exports.getAllTasks = (req, res) => {
//   const tasks = taskModel.getAll();
//   res.json(tasks);
// };
