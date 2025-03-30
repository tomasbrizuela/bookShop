import { Router } from "express";
import productModel from "../models/product.model.js";

const router = Router();

router.get('/', async (req, res) => {
    let { page, limit, query, sortKey, order } = req.query;
    page = Number(page) || 0;

    let linkPreviousPage;
    if (page > 0) {
        linkPreviousPage = "/api/product?page=" + (Number(page) - 1) + "&limit=" + limit
    }
    let linkNextPage = "/api/product?page=" + (Number(page) + 1) + "&limit=" + limit
    try {
        let items = await productModel.find()

        let products = await productModel.find().lean().limit(limit).skip(page * limit).sort({ [sortKey]: order == "desc" ? -1 : 1 })
        let info = {
            status: 'success',
            payload: products,
            totalPages: Math.round(items.length / Number(limit ?? items.length)),
            prevPage: Number(page) - 1 < 0 ? 0 : Number(page) - 1,
            nextPage: Number(page) + 1,
            page: Number(page),
            linkPreviousPage,
            linkNextPage
        };
        return res.render("index", { info })
    } catch (error) {
        console.log(error)
    }
})

router.get("/:uid", async (req, res) => {
    let uid = req.params.uid;
    try {
        let product = await productModel.findById(uid);
        return res.send({ status: 'success', payload: product })
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
        return res.send({ info: { status: 'success', payload: response } })
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
        return res.status(200).send({ status: 'success', payload: productUpdated })
    } catch (error) {
        return res.status(400).send({ status: 'error', message: error })
    }
})

router.delete('/:uid', async (req, res) => {
    let uid = req.params.uid;
    try {
        let result = await productModel.deleteOne({ _id: uid });
        return res.status(200).send({ status: 'success', payload: result })
    } catch (error) {
        return res.status(400).send({ status: 'error', payload: error })
    }
})

export default router;