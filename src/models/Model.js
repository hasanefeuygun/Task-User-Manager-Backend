const fs = require("fs");
const path = require("path");

class Model {
  count = 0;
  constructor(filePath) {
    if (!path.isAbsolute(filePath))
      throw new Error("Model requires an absolute file path!");
    this.filePath = path.normalize(filePath);
    this.createFileFolder();
  }

  createFileFolder = () => {
    const dir = path.dirname(this.filePath);

    if (!fs.existsSync(dir)) {
      console.error(`${dir} folder does not exist.So I created.`);
      fs.mkdirSync(dir, { recursive: true });
    }

    if (fs.existsSync(this.filePath)) {
      console.log(`${this.filePath} path does exist`);
    } else {
      fs.writeFileSync(this.filePath, "[]", "utf8");
      console.error(`${this.filePath} path does not exist.So I created it.`);
    }
  };

  readFile = () => JSON.parse(fs.readFileSync(this.filePath, "utf8"));
  writeFile = (elements) =>
    fs.writeFileSync(this.filePath, JSON.stringify(elements, null, 2));

  getAll = () => {
    const elements = this.readFile();
    return elements;
  };

  getAllIdArray = () => {
    const elements = this.readFile();
    return elements.map((element) => element.id);
  };

  getById = (idGetFromController) => {
    const elements = this.readFile();
    return elements.find((t) => t.id == idGetFromController);
  };

  isFileEmpty = () => {
    if (!this.getAllIdArray()) return false;
    return true;
  };

  deleteAll = () => {
    let elements = this.readFile();
    elements = [];

    this.writeFile(elements);
  };

  deleteById = (id) => {
    const elements = this.readFile();
    const indexOfelement = elements.findIndex((e) => e.id == id);
    if (indexOfelement === -1) return false;

    const deletedElement = elements.find((e) => e.id == id);

    elements.splice(indexOfelement, 1);
    this.writeFile(elements);
    return deletedElement;
  };
}

module.exports = Model;
