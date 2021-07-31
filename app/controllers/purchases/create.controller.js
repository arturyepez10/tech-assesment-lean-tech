const moment = require('moment');
const db = require("../../models");
const Products = db.products;
const Orders = db.purchases;
const Op = db.Sequelize.Op;

// Creates and save a purchases Order
exports.create = async (req, res) => {
    if (!req.body || !req.body.id  || !req.body.fecha || !req.body.cantidad || !req.body.idProducto || !req.body.nombreProducto) {
        res.status(400).send({ message: "The purchase order needs a date, quantity, the id and name of the product." });
        return;
    }

    try {
        // Check if the product `idProducto` is link to a product
        const product = await Products.findAll({ where: {
            id: { [Op.like]: req.body.idProducto },
            name: req.body.nombreProducto
        }});

        if (!product) {
            res.status(404).send({ message: "The product ID you passed, can't retrieve any product."})
            return;
        }

        // Check if there is more than 30 products order in the last 30 days
        const oldOrders = await Orders.findAll({
            where: { 
                date: { 
                    [Op.gt]: moment(req.body.fecha).date(0).format("YYYY-MM-DD"),  
                    [Op.lte]: moment(req.body.fecha).format("YYYY-MM-DD")
                },
                idProduct: { [Op.like]: req.body.idProducto }
            }
        });
        const qty = oldOrders.reduce((acc, cv) => acc + cv.qty , 0);
        
        if (qty + req.body.cantidad > 30) {
            res.status(422).send({ message: "You can't make orders when there is more than 30 products in the last 30 days."})
            return;
        }

        // Creates the order
        const order = await Orders.create({ 
            date: req.body.fecha,
            qty: req.body.cantidad,
            idProduct: req.body.idProducto,
            nameProduct: req.body.nombreProducto,
            id: req.body.id
        });
        res.send(order);
    } catch(e) {
        return res.status(500).send({ message: e.message || "Error while creating the purchase order." })
    }
};