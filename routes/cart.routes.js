import { Router } from "express";
import CartManager from "../persistencia/cartManager.js";
const router = Router();

const Cart = new CartManager();

router.get("/", async (req, res) => {
    try {
        let cart = await Cart.getCart();
        res.status(200).send({ "Cart": cart })
    } catch (error) {

    }
})

router.post("/", (req, res) => {
    let product = req.body;
    try {
        cartList.push(product);
        res.status(201).json({ "Status": "Producto agregado al carrito" })
    } catch (error) {
        res.status(400).json({ "Status": "Hubo un error" })
    }
})

export default router;

const cartList = [
    {
        "id": 1,
        "cart": [1, 3, 5]
    },
    {
        "id": 2,
        "cart": [2, 4, 6, 10]
    },
    {
        "id": 3,
        "cart": [1, 2, 3, 7, 8]
    }
]
