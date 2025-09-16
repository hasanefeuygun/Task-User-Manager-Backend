const fs = require("fs/promises");
const path = require("path");
const os = require("os");

const expandTilde = (p) => {
  if (!p) return p;
  return p.replace(/^\~(?=$|\/|\\)/, os.homedir());
};

const toAbsoluteClean = (input, base = process.cwd()) => {
  const expanded = expandTilde(String(input).trim());
  const abs = path.isAbsolute(expanded)
    ? expanded
    : path.resolve(base, expanded);
  return path.normalize(abs);
};

function resolveUserTaskFiles({ baseDir, userPath, taskPath }) {
  const baseAbs = baseDir ? toAbsoluteClean(baseDir) : null;
  const userFile = userPath
    ? toAbsoluteClean(userPath, baseAbs ?? process.cwd())
    : path.join(baseAbs ?? toAbsoluteClean("./data"), "users.json");

  const taskFile = taskPath
    ? toAbsoluteClean(taskPath, baseAbs ?? process.cwd())
    : path.join(baseAbs ?? toAbsoluteClean("./data"), "tasks.json");

  return {
    baseDir: baseAbs ?? toAbsoluteClean("./data"),
    userPath: userFile,
    taskPath: taskFile,
  };
}

module.exports = resolveUserTaskFiles;
