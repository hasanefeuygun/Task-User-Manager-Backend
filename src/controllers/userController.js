const UserModel = require("../models/userModel");

class UserController {
  constructor(userPath) {
    this.userModel = new UserModel(userPath);
    console.log("usercontroller instance and usermodel instance created ");
  }

  getAllUsers = (req, res) => {
    const users = this.userModel.getAll();
    if (!users.length) return res.json({ error: "There is no users!" });
    res.json(users);
  };
  getUserById = (req, res) => {
    const user = this.userModel.getById(req.params.id);
    if (!user) return res.json({ error: "There is no user with that id!" });
    res.json(user);
  };
  addNewUser = (req, res) => {
    if (!req.body.name || !req.body.surname || !req.body.email)
      return res.json({ error: "Enter valid information" });
    const user = this.userModel.addNewUser(
      req.body.name,
      req.body.surname,
      req.body.email
    );
    res.json(user);
  };
  deleteAllUsers = (req, res) => {
    this.userModel.deleteAll();
    res.json("All tasks deleted");
  };
  deleteUserById = (req, res) => {
    const deletedUser = this.userModel.deleteById(req.params.id);
    res.json(deletedUser);
  };
}

module.exports = UserController;

// module.exports = (flagPath) => {
//   const userModel = new UserModel(flagPath);
//   userModel.controlPath();

//   return {
//     getAllUsers: (req, res) => {
//       const users = userModel.getAll();
//       if (!users.length) return res.json({ error: "There is no users!" });
//       res.json(users);
//     },

//     getUserById: (req, res) => {
//       const user = userModel.getById(req.params.id);
//       if (!user) return res.json({ error: "There is no user with that id!" });
//       res.json(user);
//     },

//     addNewUser: (req, res) => {
//       if (!req.body.name || !req.body.surname || !req.body.email)
//         return res.json({ error: "Enter valid information" });
//       const user = userModel.addNewUser(
//         req.body.name,
//         req.body.surname,
//         req.body.email
//       );
//       res.json(user);
//     },

//     deleteAllUsers: (req, res) => {
//       userModel.deleteAll();
//       res.json("All tasks deleted");
//     },

//     deleteUserById: (req, res) => {
//       const deletedUser = userModel.deleteById(req.params.id);
//       res.json(deletedUser);
//     },
//   };
// };
