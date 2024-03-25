const express = require('express');
const router = express.Router();
const Defi = require('../models/Defi');
const authenticateToken = require('../auth');

const addDefi = require('../routes/FonctionsRouteDefis/addDefi');

// Récupération d'un défi aléatoire
router.get('/random', authenticateToken, async (req, res) => {
    try {
        const count = await Defi.countDocuments();
        const random = Math.floor(Math.random() * count);
        const defi = await Defi.findOne().skip(random);

        res.status(200).json({
            titre: defi.titre,
            description: defi.description,
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// Récupération de plusieurs défis aléatoires
router.get('/multiple', authenticateToken, async (req, res) => {
    try {
        const defis = await Defi.aggregate([{ $sample: { size: 100 } }]);
        res.status(200).json({
            titre: defis.titre,
            description: defis.description,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/add', addDefi.addDefi);

module.exports = router;
