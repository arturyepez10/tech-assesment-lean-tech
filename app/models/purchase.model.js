const { Model } = require('sequelize');

/* 
    DB MODEL: Purchase
    Description: The Sequelize model for the purchase orders associated to a product. This includes the Dates of the
    order and the qty in the order. With that data, the qty of products can be calculated within the last 30
    days.
*/
module.exports = (sequelize, DataTypes) => {
    class Purchase extends Model {
        // We relationate this model/table to the products
        static associate(models) {
            this.belongsToMany(models['Product'], { foreignKey: 'idProduct' });
        }
    }

    // Initialization of the Model
    Purchase.init({
        date: { type: DataTypes.DATEONLY, allowNull: false },
        qty: { type: DataTypes.INTEGER, defaultValue: 0 }
    }, {
        tableName: "purchases",
        sequelize,
        modelName: "Purchases"
    })
  
    return Purchase;
};