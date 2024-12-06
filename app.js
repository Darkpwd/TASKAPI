require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const notFound = require("./middlewares/not-found");
const errorHandleEMiddleware = require("./middlewares/error-handler");
const configureTasksRoutes = require("./routes/tasksRoutes");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.static("./public"));
app.use(express.json());

// Routes
configureTasksRoutes(app);

// Not Found Middleware
app.use(notFound);

// Error Handling Middleware
app.use(errorHandleEMiddleware);

// Start Server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server running on port ${port}...`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error.message);
  }
};

start();
