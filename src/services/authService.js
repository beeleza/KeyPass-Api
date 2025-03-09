const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

const register = async (name, email, password) => {
  const userExists = await User.findOne({ email });

  if (userExists) {
    throw new Error("Usuário já existe!");
  }

  const user = new User({ name, email, password });
  await user.save();
  return user;
};

const login = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Credenciais inválidas");
  }

  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    throw new Error("Credenciais inválidas");
  }

  const payload = { user: { id: user.id } };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
  return token;
};

module.exports = { register, login };
