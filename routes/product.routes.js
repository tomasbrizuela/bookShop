import { Router } from "express";
import ProductManager from "../persistencia/productManager.js";

const router = Router();
const productManager = new ProductManager();

router.get("/", async (req, res) => {
    let limit = req.query.limit
    try {
        let productList = await productManager.getProducts();
        if (limit) {
            let limitedList = productList.filter((p, i) => i < limit)
            return res.status(200).send({ "Products": limitedList })
        }
        return res.status(200).send({ "Products": productList })
    } catch (error) {
        res.status(400).send({ "Error": error.message })
    }
})

router.get('/:pid', async (req, res) => {
    let { pid } = req.params;
    try {
        let productList = await productManager.getProducts();
        let product = productList.filter((p) => p.id == pid)
        if (product.length > 0) {
            return res.status(200).send({ "Product": product });
        }
        return res.status(200).send({ "Status": "Producto no encontrado" })
    } catch (error) {
        throw error
    }
})

router.post("/", async (req, res) => {
    let product = req.body;
    try {
        let response = await productManager.createProduct(product)
        res.status(200).send({ "Status": "Producto creado exitosamente", "Product": response })
    } catch (error) {
        res.status(400).send({ "Error": error.message })
    }
})

router.put("/:pid", async (req, res) => {
    let { pid } = req.params;
    let product = req.body;
    try {
        if (pid) {
            let response = await productManager.updateInfo(product, pid);
            return res.status(200).send({ "Status": "Producto actualizado", "Producto": response });
        }
    } catch (error) {
        res.status(400).send({ "Error": error.message })

    }
})

router.delete("/:pid", async (req, res) => {
    let { pid } = req.params;
    try {
        if (pid) {
            let response = await productManager.deleteProduct(pid)
            return res.status(200).send({ "Status": "Product Deleted", "Product ID": pid, "response": response })
        }
    } catch (error) {
        return res.status(400).send({ "Error": error.message })
    }
})

export default router;