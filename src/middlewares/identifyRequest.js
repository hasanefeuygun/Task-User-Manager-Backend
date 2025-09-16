const Model = require("../models/Model");

module.exports = (req, res, next) => {
  console.log(`[${req.method}]  ${req.url}`);
  next();
};
