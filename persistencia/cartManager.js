import fs from 'fs';
import { __dirname } from '../Utils/pathDir.js';
import path from 'path';

class CartManager {

    constructor() {
        this.filePath = path.join(__dirname, "./files/cart.json")
    }

    async getCart() {
        try {
            let cartList = await fs.promises.readFile(this.filePath, 'utf-8');
            return JSON.parse(cartList);
        } catch (error) {
            throw error
        }
    }

    async addToCart(product) {
        try {
            let carts = await this.getCart();

        } catch (error) {
            throw error
        }
    }
}

export default CartManager;