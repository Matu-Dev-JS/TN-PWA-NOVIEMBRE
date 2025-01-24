import filesystem from 'fs'
import { isValidId } from '../utils/validations.util.js';
import { ServerError } from '../utils/error.util.js';
import { createProduct, deleteProductById, getProductById, getProducts } from '../repository/products.repository.js';
import { getAndIncrementCounter } from '../repository/counter.repository.js';

export const getAllProductsController = async (req, res) =>{
    try {
        const products = await getProducts()

        res.send({
            ok: true,
            status: 200,
            message: "Productos obtenidos",
            payload: {
                products
            }
        });
    } catch (error) {
        console.error("Error al obtener los productos", error);
        res.send({
            ok: false,
            message: "Internal server error",
            status: 500,
        });
    }
}

export const getProductByIdController = async (req, res) =>{
    try {
        const { product_id } = req.params //{product_id: "1"}
        if (!isValidId(product_id)) {

            throw new ServerError('product_id is not a valid id', 400)
        }
        
        const product_found = await getProductById(product_id)
        if (!product_found) {

            throw new ServerError(`Product with product_id: ${product_id} not found`, 404 )

        } else {
            return res.send({
                message: `Product with product_id: ${product_id} found`,
                ok: true,
                status: 200,
                payload: {
                    product: product_found
                }
            })
        }
        
    } catch (error) {
      
        if (error.status) {
            return res.send({
                ok: false,
                message: error.message,
                status: error.status
            })
        }
        console.log('Error al obtener producto por id', error)
        return res.send({
            status: 500,
            message: "Internal server error",
            ok: false
        })
    }
}


export const createProductController = async (req, res) => {
    try{
        const products = await getProducts()
        const { title, description, price, stock } = req.body

        if (!title || !description || !price || !stock) {
            throw new ServerError("Alguno/s de los campos esta vacio", 400);
        }

        const new_product = {
            title: title,
            description: description,
            price: price,
            stock: stock,
        }
        const product_created = await createProduct(new_product)
        return res.send({
            message: `Producto creado`,
            ok: true,
            status: 201,
            payload: {
                product: product_created ,
            },
        })
    }catch(error){
        if (error.status) {
            return res.send({
                ok: false,
                message: error.message,
                status: error.status
            })
        }
        console.log('Error al obtener producto por id', error)
        return res.send({
            status: 500,
            message: "Internal server error",
            ok: false
        })
    }
}


export const deleteProductByIdController = async (req, res) => {
    const { product_id } = req.params;

    try {        
        const product = await deleteProductById(product_id);

        res.send(
            {
                ok: true,   
                message: "Product deleted",
                status: 200,
                payload: {
                    product
                }

            }
        );
    } catch (error) {
        if (error.status) {
            return res.send({
                ok: false,
                message: error.message,
                status: error.status
            })
        }
        console.log('Error al obtener producto por id', error)
        return res.send({
            status: 500,
            message: "Internal server error",
            ok: false
        })
    }
};