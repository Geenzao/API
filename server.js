const express = require('express');
//Selon chatGPT : "analyse le corps des requêtes HTTP pour extraire les données envoyées par le client".
const bodyParser = require('body-parser');
const connectDB = require('./dbConfig');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Appel à une fonction connectDB() qui se trouve dans le fichier dbConfig.js
connectDB();

//Définition des routes
const defisRoutes = require('./routes/defisRoutes');
const authRoutes = require('./routes/authRoutes');
app.use('/defis', defisRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
