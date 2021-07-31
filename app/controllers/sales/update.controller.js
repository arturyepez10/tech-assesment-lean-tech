const db = require("../../models");
const Orders = db.purchases;

// Updates a Sales order
exports.update = (req, res) => {
    if (!req.params || !req.params.id) {
        res.status(400).send({ message: "To update the sale order, you need the ID." });
        return;
    }
    if (!req.body) {
        res.status(400).send({ message: "To update the sale order, you need to provide the fields to update." });
        return;
    }
    const id = req.params.id;

    // Updates the Sale order
    Orders.update(req.body, { where: { id }})
        .then(code => code == 1 
            ? res.send({ message: "Sale order updated successfully." }) 
            : res.status(404).send({ message: "Sale order couldn't be updated. " })
        )
        .catch(err => res.status(500).send({ message: err.message || "Error while retrieving the Sale order." }));
};