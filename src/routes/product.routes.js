import { Router } from "express";
import productModel from "../models/product.model.js";

const router = Router();

router.get('/', async (req, res) => {
    let { page, limit, query, sort } = req.query;

    try {
        let products = await productModel.find().limit(limit).skip(page * limit)
        return res.send({ info: { status: 'success', data: products } })
    } catch (error) {
        console.log(error)
    }
})

router.get("/:uid", async (req, res) => {
    let uid = req.params.uid;
    try {
        let product = await productModel.findById(uid);
        return res.send({ status: 'success', data: product })
    } catch (error) {
        console.log(error)
    }
})

router.post('/', async (req, res) => {
    try {
        let products = req.body;
        let response = ""
        if (products.length > 1) {
            response = await productModel.insertMany(products)
        } else {
            response = await new productModel(products);
            response.save()
        }
        return res.send({ info: { status: 'success', data: response } })
    } catch (error) {
        console.log(error)
        return res.send({ info: error })
    }
})

router.put('/:uid', async (req, res) => {
    let uid = req.params.uid;
    try {
        let product = req.body;
        let productUpdated = await productModel.updateOne({ _id: uid }, product, { new: true })
        return res.status(200).send({ status: 'success', data: productUpdated })
    } catch (error) {
        return res.status(400).send({ status: 'error', message: error })
    }
})

router.delete('/:uid', async (req, res) => {
    let uid = req.params.uid;
    try {
        let result = await productModel.deleteOne({ _id: uid });
        return res.status(200).send({ status: 'success', data: result })
    } catch (error) {
        return res.status(400).send({ status: 'error', data: error })
    }
})

export default router;