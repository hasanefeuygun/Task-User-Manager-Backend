const express = require("express");
const TaskController = require("../controllers/taskController");
const { taskPath } = require("../config/flag");

const registry = new FinalizationRegistry((log) => {
  console.log(log);
});

module.exports = () => {
  const router = express.Router();
  router.get("/", (req, res) => {
    const taskController = new TaskController(taskPath);
    taskController.getAllTasks(req, res);
    registry.register(taskController, "taskController instance deleted");
  });
  router.get("/:id", (req, res) => {
    const taskController = new TaskController(taskPath);
    taskController.getTaskById(req, res);
  });
  router.post("/", (req, res) => {
    const taskController = new TaskController(taskPath);
    taskController.addNewTask(req, res);
  });
  router.delete("/", (req, res) => {
    const taskController = new TaskController(taskPath);
    taskController.deleteAllTasks(req, res);
  });
  router.delete("/:id", (req, res) => {
    const taskController = new TaskController(taskPath);
    taskController.deleteTaskById(req, res);
  });

  return router;
};
