const Product = require('../models/productModel');

module.exports = {
  //achar tudo
  async all(request, response) {
    try {
      const products = await Product.findAll();
      response.status(200).json(products);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  //achar um
  async one(request, response) {
    try {
      const id = request.params.id;
      const product = await Product.findOne({ where: { id } });

      if (!product) {
        return response.status(400).json('Product not found');
      }

      response.status(200).json(product);
    } catch (error) {
      response.status(400).send(error);
    }
  },
  //criar
  async create(request, response) {
    try {
      await Product.create(request.body);
      response.status(200).json('product inserted');
    } catch (error) {
      response.status(400).send(error);
    }
  },

  //atualizar
  async update(request, response) {
    try {
      const { name, price, description, category } = request.body;
      const id = request.params.id;

      const product = await Product.findOne({ where: { id } });

      if (!product) {
        return response.status(400).json('Product not Found!');
      }

      product.name = name;
      product.price = price;
      product.description = description;
      product.category = category;

      await product.save();
      response.status(201).json('Product Updated!!');
    } catch (error) {
      response.status(400).send(error);
    }
  },
  //deletar
  async delete(request, response) {
    try {
      const id = request.params.id;
      const product = await Product.destroy({ where: { id } });

      if (!product) {
        return response.status(400).json('Product Not Found!!');
      }

      response.status(200).json('Product removed');
    } catch (error) {
      response.status(400).send(error);
    }
  },
};
