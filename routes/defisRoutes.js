const express = require('express');
const router = express.Router();
const Defi = require('../models/Defi');
const authenticateToken = require('../auth');

const addDefi = require('../routes/FonctionsRouteDefis/addDefi');
const randomDefi = require('../routes/FonctionsRouteDefis/randomDefi');
const multipleDefi = require('../routes/FonctionsRouteDefis/multipleDefi');
const modifyDefi = require('../routes/FonctionsRouteDefis/modifyDefi');
const deleteDefi = require('../routes/FonctionsRouteDefis/deleteDefi');

router.get('/random', authenticateToken, randomDefi.randomDefi);

// Récupération de plusieurs défis aléatoires
router.get('/multiple', authenticateToken, multipleDefi.multipleDefi);

// Route pour modifier un défi spécifique
router.put('/modify/:id', authenticateToken, modifyDefi.modifyDefi);

// Route pour supprimer un défi spécifique
router.delete('/delete/:id', authenticateToken, deleteDefi.deleteDefi);

router.post('/add', authenticateToken, addDefi.addDefi);

module.exports = router;
