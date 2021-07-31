const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        // Here we connect the relation declared in 'Sale' and 'Purchase' models
        static associate(models) {
            this.hasMany(models['Sale'], { as: 'saleOrders', foreignKey: 'idProduct' });
            this.hasMany(models['Purchase'], { as: 'purchaseOrders', foreignKey: 'idProduct' });
        }
    }

    // Initialization of the Model
    Product.init({
        name: { type: DataTypes.STRING, unique: true, allowNull: false },
    }, {
        tableName: "products",
        sequelize,
        modelName: "Product"
    })
  
    return Product;
};