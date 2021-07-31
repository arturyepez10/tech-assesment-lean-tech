const db = require("../../models");
const Purchases = db.purchases;

// Updates a Purchase order
exports.update = (req, res) => {
    if (!req.params || !req.params.id) {
        res.status(400).send({ message: "To update the purchase order, you need the ID." });
        return;
    }
    if (!req.body) {
        res.status(400).send({ message: "To update the purchase order, you need to provide the fields to update." });
        return;
    }
    const id = req.params.id;

    // Updates the Purchase order
    Purchases.update(req.body, { where: { id }})
        .then(code => code == 1 
            ? res.send({ message: "Purchase order updated successfully." }) 
            : res.status(404).send({ message: "Purchase order couldn't be updated. " })
        )
        .catch(err => res.status(500).send({ message: err.message || "Error while retrieving the Purchase order." }));
};