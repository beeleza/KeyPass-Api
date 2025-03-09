const express = require("express")
const { registerController, loginController } = require("../controllers/authController");
const router = express.Router();

// Rota para registrar um usuário
router.post('/register', registerController);

// Rota para fazer login
router.post('/login', loginController);

module.exports = router;
