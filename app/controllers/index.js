// Products Controllers
const createProduct = require('./products/create.controller');
const deleteProduct = require('./products/delete.controller');
const findAllProduct = require('./products/findAll.controller');
const findProduct = require('./products/findOne.controller');
const updateProduct = require('./products/update.controller');

// Purchases Order Controllers
const createPurchaseOrder = require('./purchases/create.controller');
const deletePurchaseOrder = require('./purchases/delete.controller');
const findAllPurchaseOrder = require('./purchases/findAll.controller');
const findPurchase = require('./purchases/findOne.controller');
const updatePurchase = require('./purchases/update.controller');

// Sales Order Controllers
const createSaleOrder = require('./sales/create.controller');
const deleteSaleOrder = require('./sales/delete.controller');
const findAllSaleOrder = require('./sales/findAll.controller');
const findSale = require('./sales/findOne.controller');
const updateSale = require('./sales/update.controller');

// Exports
module.exports = {
    products: {
        create: createProduct.create,
        delete: deleteProduct.delete,
        findAll: findAllProduct.findAll,
        find: findProduct.findOne,
        update: updateProduct.update
    },
    purchases: {
        create: createPurchaseOrder.create,
        delete: deletePurchaseOrder.delete,
        findAll: findAllPurchaseOrder.findAll,
        find: findPurchase.findOne,
        update: updatePurchase.update
    },
    sales: {
        create: createSaleOrder.create,
        delete: deleteSaleOrder.delete,
        findAll: findAllSaleOrder.findAll,
        find: findSale.findOne,
        update: updateSale.update
    }
}