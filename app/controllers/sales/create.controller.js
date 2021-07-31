const moment = require('moment');
const db = require("../../models");
const Products = db.products;
const Purchases = db.sales;
const Orders = db.sales;
const Op = db.Sequelize.Op;

// Creates and save a sales Order
exports.create = async (req, res) => {
    if (!req.body || !req.body.id  || !req.body.fecha || !req.body.cantidad || !req.body.idProducto || !req.body.nombreProducto) {
        res.status(400).send({ message: "The sale order needs a date, quantity, the id and name of the product." });
        return;
    }

    try {
        // Check if the product `idProducto` is link to a product
        const product = await Products.findAll({ where: {
            idProduct: { [Op.like]: req.body.idProducto },
            nameProduct: req.body.nombreProducto
        }});

        if (!product) {
            res.status(404).send({ message: "The product ID you passed, can't retrieve any product."})
            return;
        }

        /* 
            Checks if there is stock to make the sale.

            In order to do that, we get the purchases in the last month (since there is a max. qty. in that time)
            and we also get the sales in the previous month. 

            We subtract both quantities and if the remainder is greater than or equal to the quantity of the sale order, 
            then the sale can be performed
        */
        // Purchases
        const oldPurchases = await Purchases.findAll({
            where: { 
                date: { [Op.gt]: moment(req.body.fecha).date(0).format("YYYY-MM-DD") },
                idProduct: { [Op.like]: req.body.idProducto }
            }
        });
        const qtyPurchases = oldPurchases.reduce((acc, cv) => acc + cv.qty , 0);

        // Sales
        const oldSales = await Sales.findAll({
            where: { 
                date: { [Op.gt]: moment(req.body.fecha).date(0).format("YYYY-MM-DD") },
                idProduct: { [Op.like]: req.body.idProducto }
            }
        });
        const qtySales = oldSales.reduce((acc, cv) => acc + cv.qty , 0);
        
        if (qtyPurchases - qtySales < req.body.qty) {
            res.status(422).send({ message: "You can't make orders because there is not enough stock."})
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
        return res.status(500).send({ message: e.message || "Error while creating the sale order." })
    }
};