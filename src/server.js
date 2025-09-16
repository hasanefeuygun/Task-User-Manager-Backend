const createApp = require("./app"); // appi aldı
const { baseDir, userPath, taskPath } = require("./config/flag"); // flagden gelen verileri aldı

const port = process.env.PORT || 3000;
const app = createApp();

app.listen(port, () => {
  console.log(
    `Listening on port ${port}//Folder path = ${baseDir}//User Path = ${userPath}//Task Path = ${taskPath}`
  );
});
