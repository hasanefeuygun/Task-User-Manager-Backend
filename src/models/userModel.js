const Model = require("./Model");

class UserModel extends Model {
  constructor(filePath = "userData/data.json") {
    Model.count++;
    super(filePath);
  }

  addNewUser = (name, surname, email) => {
    const users = this.getAll();

    const newId =
      (isFinite(Math.max(...this.getAllIdArray()))
        ? Math.max(...this.getAllIdArray())
        : 0) + 1;
    const newUser = {
      id: newId,
      name,
      surname,
      email,
    };
    users.push(newUser);
    this.writeFile(users);
    return newUser;
  };

  static showInstanceCount = () => {
    console.log(this.count);
  };
}

module.exports = UserModel;
