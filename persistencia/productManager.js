import fs from 'fs';
import path from 'path';
import { __dirname } from '../Utils/pathDir.js';
class ProductManager {

    constructor() {
        this.filePath = path.join(__dirname, "./files/product.json")
    }


    async createProduct(product) {
        let productsJson = await this.getProducts();
        let productoExiste = productsJson.find((p) => p.nombre == product.nombre);
        if (productoExiste) {
            throw new Error("El producto ya existe");
        } else {
            console.log("Agregando producto...");
            // let countProducts = productsJson.length;
            // let id = countProducts + 2;
            let id = Math.floor(Math.random() * 100000000)
            product.id = id
            productsJson.push(product);
            await fs.promises.writeFile(this.filePath, JSON.stringify(productsJson, null, 2))
            return product;
        }
    }

    async getProducts() {
        const product = await fs.promises.readFile(this.filePath, 'utf-8');
        return JSON.parse(product);
    }

    async updateInfo(product, pid) {
        let allProducts = await this.getProducts();
        let index = allProducts.findIndex(p => p.id == pid)
        if (index !== -1) {
            allProducts[index] = { ...allProducts[index], ...product }
            await fs.promises.writeFile(this.filePath, JSON.stringify(allProducts, null, 2))
            console.log(allProducts[index])
            return allProducts[index]
        } else {
            throw new Error("Producto no encontrado")
        }
    }

    async deleteProduct(pid) {

        let productList = await this.getProducts();
        let newList = productList.filter(p => p.id != pid)
        console.log(newList)
        if (newList.length < productList.length) {
            await fs.promises.writeFile(this.filePath, JSON.stringify(newList, null, 2));
            return "Se eliminó el producto"
        } else {
            throw new Error("No se eliminó ningún producto")
        }
    }
}

export default ProductManager;