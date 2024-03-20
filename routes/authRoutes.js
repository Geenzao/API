const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const authenticateToken = require('../auth');

// Génération de token JWT pour l'authentification
router.post('/login', (req, res) => {
    // Ici, vous pouvez implémenter la logique de vérification des informations d'identification de l'utilisateur
    // Si les informations d'identification sont valides, générez un token JWT et renvoyez-le à l'utilisateur
    const username = req.body.username;
    const user = { username: username };
    const token = jwt.sign(user, process.env.JWT_SECRET);
    res.json({ token: token });
});

module.exports = router;
