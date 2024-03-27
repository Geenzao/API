const Defi = require('../../models/Defi');

exports.multipleDefi = async (req, res) => {
    try {
        const defis = await Defi.aggregate([{ $sample: { size: 100 } }]);
        
        // Créer une nouvelle liste contenant uniquement les titres et les descriptions des défis
        const defisFormatted = defis.map(defi => ({
            titre: defi.titre,
            description: defi.description
        }));

        res.status(200).json(defisFormatted);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
