//imports
const express = require('express');
const sequelize = require('./config/database');
const Routes = require('./routes/index.routes');

//chama o express
const app = express();

//ve se o banco conecta
sequelize
  .sync()
  .then(() => console.log('Banco de dados conectado com sucesso :)'));

//aceita apenas json
app.use(express.json());

//usa essa rota para usar o Routes
app.use('/api/products', Routes);

//escuta na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000 = D ');
});
