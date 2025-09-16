module.exports = (req, res, next) => {
  res.status(404).json({ message: "This endpoint is not valid" });
};
