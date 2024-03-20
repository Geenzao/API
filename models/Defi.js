const mongoose = require('mongoose');

const defiSchema = new mongoose.Schema({
    titre: String,
    description: String
});

module.exports = mongoose.model('Defi', defiSchema);
