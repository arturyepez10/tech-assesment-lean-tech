// Here we declare the routes of products
module.exports = app => {
    const controllers = require("../controllers").products;

    // Router to declare the new routes
    const router = require("express").Router();

    // Create a product
    router.post("/", controllers.create);

    // Retrieves all Tutorials
    router.get("/", controllers.findAll);

    // Retrieve a single product
    router.get("/:id", controllers.find);

    // Update a product
    router.put("/:id", controllers.update);

    // Deletes a product
    router.delete("/:id", controllers.delete);

    app.use('/productos/', router);
}