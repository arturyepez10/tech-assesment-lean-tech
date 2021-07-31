// Products Controllers
const createProduct = require('./products/create.controller');
const deleteProduct = require('./products/delete.controller');
const findAllProduct = require('./products/findAll.controller');
const findProduct = require('./products/findOne.controller');
const updateProduct = require('./products/update.controller');

// Exports
module.exports = {
    products: {
        create: createProduct,
        delete: deleteProduct,
        findAll: findAllProduct,
        find: findProduct,
        update: updateProduct
    }
}