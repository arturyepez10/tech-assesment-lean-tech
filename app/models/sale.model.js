const { Model } = require('sequelize')
/* 
    DB MODEL: Sale
    Description: The Sequelize model for the sale orders associated to a product. This includes the Dates of the
    sale orders and the qty in the order. With that data, the qty of products can be calculated within the last 30
    days.
*/
module.exports = (sequelize, DataTypes) => {
    class Sale extends Model {
        // We relationate this model/table to the products
        static associate(models) {
            this.belongsToMany(models['Product'], { foreignKey: 'idProduct' });
        }
    }

    // Initialization of the Model
    Sale.init({
        id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false },
        idProduct: { type: DataTypes.INTEGER, references: { model: 'products', key: 'id' }},
        date: { type: DataTypes.DATEONLY, allowNull: false },
        qty: { type: DataTypes.INTEGER, defaultValue: 0 }
    }, {
        tableName: "sales",
        sequelize,
        modelName: "Sale"
    });
  
    return Sale;
};