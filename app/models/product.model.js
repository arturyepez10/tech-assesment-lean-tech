const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        // Here we connect the relation declared in 'Sale' and 'Purchase' models
        static associate(models) {
            this.hasMany(models['Sale'], { onDelete: 'cascade' });
            this.hasMany(models['Purchase'], { onDelete: 'cascade' });
        }
    }

    // Initialization of the Model
    Product.init({
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, unique: true, allowNull: false },
    }, {
        tableName: "products",
        sequelize,
        modelName: "Product"
    })
  
    return Product;
};