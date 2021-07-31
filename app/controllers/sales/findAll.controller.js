const db = require("../../models");
const Orders = db.sales;

// Retrieves all sale orders of the db
exports.findAll = (req, res) => {
    // Find all the sales
    Orders.findAll()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || "Error while retrieving the Sale orders." }));
};