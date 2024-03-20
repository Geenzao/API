const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./dbConfig');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connexion à la base de données MongoDB
connectDB();

// Définition des routes
const defisRoutes = require('./routes/defisRoutes');
const authRoutes = require('./routes/authRoutes');

app.use('/defis', defisRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
