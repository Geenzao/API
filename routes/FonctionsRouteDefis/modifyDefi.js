const Defi = require('../../models/Defi');

exports.modifyDefi = async (req, res) => {
    try {
        const id = req.params.id;
        const { titre, description } = req.body;

        // Vérifier si le défi existe
        const defi = await Defi.findById(id);
        if (!defi) {
            return res.status(404).json({ message: 'Défi non trouvé' });
        }

        // Mettre à jour les données du défi
        defi.titre = titre;
        defi.description = description;
        await defi.save();

        res.status(200).json({ message: 'Défi modifié avec succès' });
    } catch (error) {
        res.status(500).json({ message: 'Defis non modifié' });
    }
};
