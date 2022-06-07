//imports
const express = require('express');
//chama o arquivo do controller
const productController = require('../controllers/productController');
//chama o routes do express
const router = express.Router();

//quando usado essa rota, chama as funções dependente do metodo HTTP
router.route('/').get(productController.all).post(productController.create);
router
  .route('/:id')
  .get(productController.one)
  .put(productController.update)
  .delete(productController.delete);

//exporta o router
module.exports = router;
