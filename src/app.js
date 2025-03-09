const express = require("express");
const connectDB = require("./config/database");
const authRoutes = require("./routes/authRoutes")

const app = express();
connectDB();

app.use(express.json());
app.use('/api/auth', authRoutes)

module.exports = app;