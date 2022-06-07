//importa o sequelize e cria a conexão
const Sequelize = require('sequelize');
const sequelize = new Sequelize('nodestudy', 'root', '102030', {
  host: 'localhost',
  dialect: 'mysql',
});

//exporta
module.exports = sequelize;
