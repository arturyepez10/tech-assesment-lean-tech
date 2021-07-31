const dbConfig = require("../../config/db.config.js");
const Sequelize = require("sequelize");

// Create the specific pool of connection
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: dbConfig.pool
});

// DB object to interact in the project
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Objects with the data from the Database
db.products = require("./product.model.js")(sequelize, Sequelize);
db.purchases = require("./purchase.model.js")(sequelize, Sequelize);
db.sales = require("./sale.model.js")(sequelize, Sequelize);

module.exports = db;