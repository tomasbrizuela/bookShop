import ProductManager from './persistencia/productManager.js';

const productManager = new ProductManager();


async function getAll() {
    let productos = await productManager.getProducts();
    console.log(productos)
}

getAll()