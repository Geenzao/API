const Defi = require ('../../models/Defi');

//Todo : la route doit être authentifiée.
exports.addDefi = async (req, res) => {
    try {
        const { titre, description } = req.body;
        // Vérifier si les champs requis sont fournis
        if (!titre || !description) {
            return res.status(400).json({ message: "Titre et description sont requis" });
        }
        // Créer un nouveau défi
        const nouveauDefi = new Defi({
            titre,
            description
        });
        // Enregistrer le nouveau défi dans la base de données
        await nouveauDefi.save();
        res.status(201).json({ message: "Défi ajouté avec succès", defi: nouveauDefi });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};