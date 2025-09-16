const { Command } = require("commander");
const resolveUserTaskFiles = require("../utils/paths");
const path = require("path");
const fs = require("fs");

const program = new Command();

program
  .option("-P, --path <path>", "Folder path for both users and tasks")
  .option(
    "--userPath <path>",
    "Users JSON file (defaults to <baseDir>/users.json)"
  )
  .option(
    "--taskPath <path>",
    "Tasks JSON file (defaults to <baseDir>/tasks.json)"
  );

program.parse(process.argv);

const options = program.opts();

const { baseDir, userPath, taskPath } = resolveUserTaskFiles({
  baseDir: options.path,
  userPath: options.userPath,
  taskPath: options.taskPath,
});

// const createFileFolder = ({ baseDir, userPath, taskPath }) => {
//   const dir = path.dirname(baseDir);
//   if (!fs.existsSync(dir)) {
//     console.error(`${dir} folder does not exist so I created it`);
//     fs.mkdir(dir, { recursive: true });
//   }
//   if (fs.existsSync(userPath)) {
//     console.log(`${userPath} path does exist`);
//   } else {
//     fs.writeFileSync(userPath, "[]", "utf-8");
//     console.error(`${userPath} path does not exist so I created it`);
//   }
//   if (fs.existsSync(taskPath)) {
//     console.log(`${taskPath} path does exist`);
//   } else {
//     fs.writeFileSync(taskPath);
//     console.error(`${taskPath} path does not exist so I created it`);
//   }
// };

module.exports = { baseDir, userPath, taskPath };
