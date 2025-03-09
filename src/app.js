const express = require("express");
const connectDB = require("./config/database");
const authRoutes = require("./routes/authRoutes")
const privateRoutes = require("./routes/privateRoutes")

const app = express();
connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes)
app.use('/api/user', privateRoutes);

module.exports = app;