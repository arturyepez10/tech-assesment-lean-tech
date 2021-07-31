// Here we declare the routes of sale orders
module.exports = app => {
    const controllers = require("../controllers").sales;

    // Router to declare the new routes
    const router = require("express").Router();

    // Create a sale order
    router.post("/", controllers.create);

    // Retrieves all sale orders
    router.get("/", controllers.findAll);

    // Retrieve a single sale order
    router.get("/:id", controllers.find);

    // Update a sales order
    router.put("/:id", controllers.update);

    // Deletes a sale order
    router.delete("/:id", controllers.delete);

    app.use('/sales/', router);
}