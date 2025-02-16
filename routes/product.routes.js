import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    try {
        res.status(200).send({ "Status": "ProductList" })
    } catch (error) {

    }
})

export default router;