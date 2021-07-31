const express = require("express");
const cors = require("cors");
const productsRoutes = require('./app/routes/products.routes');
const purchasesRoutes = require('./app/routes/purchases.routes');

const app = express();

// Initialize the Database
const db = require("./app/models");
db.sequelize.sync();

// Setting up the CORS
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// use the routes for products
productsRoutes(app);

// use the routes for purchase orders
purchasesRoutes(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});