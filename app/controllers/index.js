// Products Controllers
const createProduct = require('./products/create.controller');
const deleteProduct = require('./products/delete.controller');
const findAllProduct = require('./products/findAll.controller');
const findProduct = require('./products/findOne.controller');
const updateProduct = require('./products/update.controller');

// Exports
module.exports = {
    products: {
        create: createProduct.create,
        delete: deleteProduct.delete,
        findAll: findAllProduct.findAll,
        find: findProduct.findOne,
        update: updateProduct.update
    }
}