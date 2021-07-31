const db = require("../../models");
const Purchases = db.purchases;

// Retrieves one purchase order by its ID
exports.findOne = (req, res) => {
    if (!req.params || !req.params.id) {
        res.status(400).send({ message: "To retrieve the purchase, you need the ID." });
        return;
    }
    const id = req.params.id;

    // Finds the Purchase Order
    Purchases.findByPk(id)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || "Error while retrieving the Purchase." }));
};