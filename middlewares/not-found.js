const notFound = (req, res) =>
  res.status(404).json({ error: "Route not exist!" });

module.exports = notFound;
