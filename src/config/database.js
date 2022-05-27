const Sequelize = require('sequelize');
const sequelize = new Sequelize('nodestudy', 'root', '102030', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
