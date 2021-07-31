const db = require("../../models");
const Products = db.products;

// Deletes a Product
exports.delete = (req, res) => {
    if (!req.params || !req.params.id) {
        res.status(400).send({ message: "To delete the product, you need the ID." });
        return;
    }
    const id = req.params.id;

    // Deletes the Product
    Products.destroy({ where: { id }})
        .then(code => code == 1 
            ? res.send({ message: "Product deleted successfully." }) 
            : res.status(404).send({ message: "Product couldn't be deleted. " })
        )
        .catch(err => res.status(500).send({ message: err.message || "Error while retrieving the Product." }));
};