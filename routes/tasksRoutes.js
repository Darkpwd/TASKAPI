const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTasks,
  getTasks,
  updateTasks,
  deleteTasks,
} = require("../controllers/tasks"); // import logic of my tasks in controllers, one by one

router.route("/").get(getAllTasks).post(createTasks);
router.route("/:id").get(getTasks).patch(updateTasks).delete(deleteTasks);

// Create a function to export the path from my app.js
module.exports = (app) => {
  app.use("/api/v1/tasks", router);
};
