import express from 'express'
import { createProductController, deleteProductByIdController, getAllProductsController, getProductByIdController } from '../controllers/products.controller.js'

const productsRouter = express.Router()

productsRouter.get('/', getAllProductsController)
productsRouter.get('/:product_id', getProductByIdController )
productsRouter.post('/', createProductController)
productsRouter.delete('/:product_id', deleteProductByIdController)
export default productsRouter