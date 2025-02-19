import express from 'express';
import morgan from 'morgan';

const app = express()
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.get('/health', (req, res) => {
    try {
        res.status(200).send({ "Health": "Ok" })
    } catch (error) {
        res.status(400).send({ "Health": error })
    }
})

import cartsRouter from '../routes/cart.routes.js'
import productsRouter from '../routes/product.routes.js'
app.use('/api/cart', cartsRouter);
app.use('/api/product', productsRouter);


app.listen(4000, () => {
    console.log('http://localhost:4000')
})