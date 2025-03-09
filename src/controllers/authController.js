const authService = require("../services/authService");

const registerController = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    await authService.register(name, email, password);
    res.status(201).json({ msg: "Usuário registrado com sucesso!" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await authService.login(email, password);
    return res.json({ token });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

module.exports = { registerController, loginController };
