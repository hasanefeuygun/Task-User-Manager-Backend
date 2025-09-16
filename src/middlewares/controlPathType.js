module.exports = (req, res, next) => {
  res.status(404).json({ message: "Enter valid path type!" });
  // console.error("Enter valid path type!");
};
