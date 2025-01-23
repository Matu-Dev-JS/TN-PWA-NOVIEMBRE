import filesystem from 'fs'
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