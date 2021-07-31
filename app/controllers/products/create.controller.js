const db = require("../../models");
const Products = db.products;

// Creates and save a Product
exports.create = (req, res) => {
    if (!req.body || !req.body.name) {
        res.status(400).send({ message: "The product needs a name." });
        return;
    }

    // Creates the Product
    Products.create({ name: req.body })
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || "Error while creating the Product." }));
};