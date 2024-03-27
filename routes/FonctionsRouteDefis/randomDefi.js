const Defi = require('../../models/Defi');

exports.randomDefi = async (req, res) => {
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
};
