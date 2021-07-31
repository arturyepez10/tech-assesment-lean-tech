const db = require("../../models");
const Products = db.products;
const Op = db.Sequelize.Op;

// Retrieves all products of the db with an optional condition
exports.findAll = (req, res) => {
    const condition = req.query && req.query.name ? { name: { [Op.like]: `%${req.query.name}%` } } : null;

    // Find the Products
    Products.findAll({ where: condition })
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || "Error while retrieving the Products." }));
};