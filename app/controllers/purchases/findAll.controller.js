const db = require("../../models");
const Orders = db.purchases;

// Retrieves all purchases orders of the db
exports.findAll = (req, res) => {
    // Find the purchases
    Orders.findAll()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || "Error while retrieving the Purchase order." }));
};