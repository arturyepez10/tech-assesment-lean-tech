const db = require("../../models");
const Products = db.products;

// Retrieves one Product by its ID
exports.findOne = (req, res) => {
    if (!req.params || !req.params.id) {
        res.status(400).send({ message: "To retrieve the product, you need the ID." });
        return;
    }
    const id = req.params.id;

    // Finds the Product
    Products.findByPk(id)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || "Error while retrieving the Product." }));
};