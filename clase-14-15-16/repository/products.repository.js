import filesystem from 'fs'
import { getAndIncrementCounter } from './counter.repository.js';
import { ServerError } from '../utils/error.util.js';
export const getProducts = async () =>{
    const data = await filesystem.promises.readFile("./database/products.json");
    const products = JSON.parse(data);
    return products
}

export const getProductById = async (product_id) =>{
    const products = await getProducts()
    const product_found = products.find((product) => product.id === Number(product_id) )
    return product_found || null
}

export const createProduct = async (product) => {
    const products = await getProducts()
    const new_product = {...product, id: await getAndIncrementCounter('products')}
    products.push(new_product)
    
    await saveProducts(products)
    return new_product
}

export const deleteProductById = async (id) => {
 
    const products = await getProducts();
    const index = products.findIndex(product => product.id === parseInt(id));
    if (index === -1) {
        throw new ServerError(`Producto con id ${id} no encontrado`, 404);
    }


    const deletedProduct = products.splice(index, 1);
    await filesystem.promises.writeFile('./database/products.json', JSON.stringify(products), { encoding: 'utf-8' });
    return deletedProduct[0];

};

const saveProducts = async (products) => {
    await filesystem.promises.writeFile(
        './database/products.json',
        JSON.stringify(products),
        {encoding: 'utf-8'}
    )
}