const express = require('express');
const ProductsService = require('../services/products.service')
const validatorHandler = require('../middlewares/validator.handler')
const { createProductSchema, updateProductSchema, getProductSchema} = require('../schemas/product.schema')


const router = express.Router();
const service = new ProductsService();
//  products endpoint
router.get('/', async (req, res) => {
  try {
    const products = await service.find()
    res.json(products);
  } catch (error) {
    res.status(400).json({message: error})
  }
});

// products filter endpoint
router.get('/filter', (req, res) => {
  try {
    res.send('im a filter')

  } catch (error) {
    res.status(400).json({message: error})
  }
})

// ProductsId endpoint
router.get('/:id',
validatorHandler(getProductSchema, 'params'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id)
    res.json(product)
  } catch (error) {
      next(error)  }
});
// products post
router.post('/',
validatorHandler(createProductSchema, 'body'),
async (req, res) => {
  try {
    const body = req.body
    const newProduct = await service.create(body)
    res.status(201).json(newProduct)

  } catch (error) {
    res.status(400).json({message: error})
  }
})
// products patch
router.patch('/:id',
validatorHandler(getProductSchema, 'params'),
validatorHandler(updateProductSchema, 'body'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body
    const product = await service.update(id, body)
    res.json(product)
  } catch (error) {
    next(error)
  }
})

// products delete
router.delete('/:id', async(req, res) => {
  try {
    const { id } = req.params;
    const resp = await service.delete(id)
    res.json(resp)
  } catch (error) {
    res.status(404).json({message: error})
  }
})

module.exports = router;