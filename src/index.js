const express = require('express');
const sequelize = require('./config/database');
const Routes = require('./routes/index.routes');

const app = express();

sequelize
  .sync()
  .then(() => console.log('Banco de dados conectado com sucesso :)'));

app.use(express.json());

app.use('/api/products', Routes);

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000 = D ');
});
