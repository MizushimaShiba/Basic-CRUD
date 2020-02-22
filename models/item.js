'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: {type: DataTypes.STRING, allowNull: false},
    supplier: {type: DataTypes.TEXT, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    jumlah: {type: DataTypes.INTEGER, allowNull: false}
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
  };
  return Item;
};