const express = require("express");
const connectDB = require("./config/database");

const app = express();
connectDB();

app.use(express.json());

module.exports = app;