import express from 'express'
import { getAllProductsController, getProductByIdController } from '../controllers/products.controller.js'

const productsRouter = express.Router()

productsRouter.get('/', getAllProductsController)
productsRouter.get('/:product_id', getProductByIdController )

export default productsRouter