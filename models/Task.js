const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  // 1 - First propriety
  name: {
    type: String,
    required: [true, "Must provide a name!"],
    trim: true,
    maxLength: [30, "Name cannot be more than 20 characters."],
  },
  // 2 - Second propriety
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", TaskSchema);
