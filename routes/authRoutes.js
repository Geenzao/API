const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;


// Simulation de base de données d'utilisateurs (remplacez cela par votre propre logique de vérification des informations d'identification)
const users = [
    { id: 1, username: 'quentin', password: 'password123' }
];

// Génération de token JWT pour l'authentification
router.post('/login', (req, res) => {
    // Vérification des informations d'identification
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Identifiants invalides' });
    }

    console.log('JWT_SECRET:', jwtSecret);

    // Génération du token JWT
    const token = jwt.sign({ id: user.id, username: user.username }, jwtSecret);
    res.json({ token: token });
});

module.exports = router;
