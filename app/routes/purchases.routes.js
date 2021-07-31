// Here we declare the routes of purchase orders
module.exports = app => {
    const controllers = require("../controllers").purchases;

    // Router to declare the new routes
    const router = require("express").Router();

    // Create a purchase order
    router.post("/", controllers.create);

    // Retrieves all purchase orders
    router.get("/", controllers.findAll);

    // Retrieve a single purchase order
    router.get("/:id", controllers.find);

    // Update a purchase
    router.put("/:id", controllers.update);

    // Deletes a purchase order
    router.delete("/:id", controllers.delete);

    app.use('/purchases/', router);
}