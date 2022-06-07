//imports
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

//cria uma classe e inicia ela com as informações do modelo da tabela
class Product extends Model {}

Product.init(
  {
    name: {
      type: DataTypes.STRING,
      //allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL,
    },
    description: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,//nome do banco
    modelName: 'table_product',//nome do banco
    timestamps: false,//adiciona ou não na tabela, quando criado ( createdAt )
    //ou quando atualizado ( updateAt )
  }
);

//exports
module.exports = Product;
