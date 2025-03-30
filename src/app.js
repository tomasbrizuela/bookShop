import express from "express";
import handlebars from 'express-handlebars';
import mongoose from "mongoose";
import __dirname from "./utils.js";
import productRouter from './routes/product.routes.js'

const URL = "mongodb+srv://tomascoder:tomascoder@cluster0.4oard.mongodb.net/BookStore?retryWrites=true&w=majority&appName=Cluster0"
const PORT = 8081
const app = express();
const router = express.Router();

const enviroment = async () => {
    await mongoose.connect(URL)
}

enviroment()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/api/product', productRouter);

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')

app.get("/", (req, res) => {
    return res.render("index", { info: { 'isHome': true } })
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})