const Defi = require('../../models/Defi');

exports.deleteDefi = async (req, res) => {
    try {
        const id = req.params.id;

        // Vérifier si le défi existe
        const defi = await Defi.findById(id);
        if (!defi) {
            return res.status(404).json({ message: 'Défi non trouvé' });
        }

        // Supprimer le défi de la base de données
        await defi.remove();

        res.status(200).json({ message: 'Défi supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
