const db = require("../../models");
const Orders = db.sales;

// Retrieves one sale order by its ID
exports.findOne = (req, res) => {
    if (!req.params || !req.params.id) {
        res.status(400).send({ message: "To retrieve the sale order, you need the ID." });
        return;
    }
    const id = req.params.id;

    // Finds the Sale Order
    Orders.findByPk(id)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || "Error while retrieving the Sale Order." }));
};