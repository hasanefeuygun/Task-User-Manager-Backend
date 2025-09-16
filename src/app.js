const express = require("express"); // express kütüphanesi dahil edildi

const identifyRequest = require("./middlewares/identifyRequest"); //
const controlRequest = require("./middlewares/controlRequest");

const createTaskRoutes = require("./routes/taskRoutes");
const createUserRoutes = require("./routes/userRoutes");

const createApp = () => {
  const app = express();

  app.use(express.json());
  app.use(identifyRequest);
  app.use((req, res, next) => {
    const m = process.memoryUsage();
    console.log(
      "RSS",
      (m.rss / 1024 / 1024).toFixed(1),
      "heapUsed",
      (m.heapUsed / 1024 / 1024).toFixed(1),
      "heapTotal",
      (m.heapTotal / 1024 / 1024).toFixed(1)
    );
    next();
  });

  app.use("/tasks", createTaskRoutes());
  app.use("/users", createUserRoutes());
  app.use(controlRequest);

  return app;
};

module.exports = createApp;
