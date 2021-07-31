// Here we declare the routes of purchase orders
module.exports = app => {
    const controllers = require("../controllers").purchases;

    // Router to declare the new routes
    const router = require("express").Router();

    // Create a purchase order
    router.post("/registrar-compra", controllers.create);

    // Retrieves all purchase orders
    router.get("/compras", controllers.findAll);

    // Retrieve a single purchase order
    router.get("/compras/:id", controllers.find);

    // Update a purchase
    router.put("/compras/:id", controllers.update);

    // Deletes a purchase order
    router.delete("/compras/:id", controllers.delete);

    app.use('/', router);
}