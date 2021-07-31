const db = require("../../models");
const Products = db.products;

// Updates a Product
exports.update = (req, res) => {
    if (!req.params || !req.params.id) {
        res.status(400).send({ message: "To update the product, you need the ID." });
        return;
    }
    if (!req.body) {
        res.status(400).send({ message: "To update the product, you need to provide the fields to update." });
        return;
    }
    const id = req.params.id;

    // Creates the Product
    Products.update(req.body, { where: { id }})
        .then(code => code == 1 
            ? res.send({ message: "Product updated successfully." }) 
            : res.status(404).send({ message: "Product couldn't be updated. " })
        )
        .catch(err => res.status(500).send({ message: err.message || "Error while retrieving the Product." }));
};