const express = require("express");

const UserController = require("../controllers/userController");
const { userPath } = require("../config/flag");

module.exports = () => {
  const router = express.Router();

  router.get("/", (req, res) => {
    const userController = new UserController(userPath);
    userController.getAllUsers(req, res);
  });
  router.get("/:id", (req, res) => {
    const userController = new UserController(userPath);
    userController.getUserById(req, res);
  });
  router.post("/", (req, res) => {
    const userController = new UserController(userPath);
    userController.addNewUser(req, res);
  });
  router.delete("/", (req, res) => {
    const userController = new UserController(userPath);
    userController.deleteAllUsers(req, res);
  });
  router.delete("/:id", (req, res) => {
    const userController = new UserController(userPath);
    userController.deleteUserById(req, res);
  });

  return router;
};
