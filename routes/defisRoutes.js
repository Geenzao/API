const express = require('express');
const router = express.Router();
const Defi = require('../models/Defi');
const authenticateToken = require('../auth');

// Récupération d'un défi aléatoire
router.get('/random', async (req, res) => {
    try {
        const count = await Defi.countDocuments();
        const random = Math.floor(Math.random() * count);
        const defi = await Defi.findOne().skip(random);
        res.json(defi);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Récupération de plusieurs défis aléatoires
router.get('/multiple', async (req, res) => {
    try {
        const defis = await Defi.aggregate([{ $sample: { size: 100 } }]);
        res.json(defis);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
