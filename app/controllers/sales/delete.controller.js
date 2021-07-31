const db = require("../../models");
const Orders = db.sales;

// Deletes a Sale Order
exports.delete = (req, res) => {
    if (!req.params || !req.params.id) {
        res.status(400).send({ message: "To delete the order, you need the ID." });
        return;
    }
    const id = req.params.id;

    // Deletes the Order
    Orders.destroy({ where: { id }})
        .then(code => code == 1 
            ? res.send({ message: "Sale order deleted successfully." }) 
            : res.status(404).send({ message: "Sale order couldn't be deleted. " })
        )
        .catch(err => res.status(500).send({ message: err.message || "Error while eliminating the Sale order." }));
};