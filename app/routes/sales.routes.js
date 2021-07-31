// Here we declare the routes of sale orders
module.exports = app => {
    const controllers = require("../controllers").sales;

    // Router to declare the new routes
    const router = require("express").Router();

    // Create a sale order
    router.post("/registrar-venta", controllers.create);

    // Retrieves all sale orders
    router.get("/ventas", controllers.findAll);

    // Retrieve a single sale order
    router.get("/ventas/:id", controllers.find);

    // Update a sales order
    router.put("/ventas/:id", controllers.update);

    // Deletes a sale order
    router.delete("/ventas/:id", controllers.delete);

    app.use('/', router);
}