const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./router");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan(process.env.NODE_ENV === "production" ? "tiny" : "dev"));
app.use(router);

// Error handler
app.use((err, req, res, next) => {
  // Log error message in our server's console
  console.error(process.env.NODE_ENV === "production" ? err.message : err);

  // If err has no specified error code, send status 500 'Internal Server Error'
  const statusCode = err.statusCode ? err.statusCode : 500;

  res.status(statusCode).json({ message: err.message });
  next();
});

module.exports = app;
