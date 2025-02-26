import express from 'express';
import morgan from 'morgan';
import handlebars from 'express-handlebars';
import { __dirname } from '../Utils/pathDir.js';
import viewsRouter from '../routes/views.router.js'
import cartsRouter from '../routes/cart.routes.js'
import productsRouter from '../routes/product.routes.js'

const PORT = 8080
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

app.use('/api/cart', cartsRouter);
app.use('/api/product', productsRouter);
app.use('/', viewsRouter);

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars')

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})

//Voy por el minuto 1:26:00