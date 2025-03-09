const jwt = require('jsonwebtoken');
require('dotenv').config();

const protect = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if(!token) {
        return res.status(401).json({ msg: 'Não autorizado, token faltando' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded.user;

        next();
    } catch (error) {
        return res.status(401).json({ msg: 'Token inválido' });
    }
}

module.exports = protect;
