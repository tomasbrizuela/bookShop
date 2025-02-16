import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    try {
        let users = userList;
        res.status(200).send({ "UserList": users })
    } catch (error) {

    }
})

router.post("/", (req, res) => {
    let user = req.body;
    console.log(user)
    try {
        userList.push(user);
        res.status(201).json({ "Status": "Usuario creado exitosamente" })
    } catch (error) {
        res.status(400).json({ "Status": "Hubo un error" })
    }
})

export default router;


const userList = [
    {
        "id": 1,
        "name": "Juan Pérez",
        "email": "juan.perez@example.com",
        "age": 30,
        "role": "admin",
        "active": true
    },
    {
        "id": 2,
        "name": "María López",
        "email": "maria.lopez@example.com",
        "age": 25,
        "role": "user",
        "active": true
    },
    {
        "id": 3,
        "name": "Carlos Gómez",
        "email": "carlos.gomez@example.com",
        "age": 40,
        "role": "moderator",
        "active": false
    },
    {
        "id": 4,
        "name": "Ana Torres",
        "email": "ana.torres@example.com",
        "age": 28,
        "role": "user",
        "active": true
    },
    {
        "id": 5,
        "name": "Roberto Sánchez",
        "email": "roberto.sanchez@example.com",
        "age": 35,
        "role": "editor",
        "active": true
    },
    {
        "id": 6,
        "name": "Laura Fernández",
        "email": "laura.fernandez@example.com",
        "age": 32,
        "role": "admin",
        "active": false
    },
    {
        "id": 7,
        "name": "Daniel Martínez",
        "email": "daniel.martinez@example.com",
        "age": 29,
        "role": "user",
        "active": true
    },
    {
        "id": 8,
        "name": "Sofía Ramírez",
        "email": "sofia.ramirez@example.com",
        "age": 22,
        "role": "user",
        "active": true
    },
    {
        "id": 9,
        "name": "Javier Herrera",
        "email": "javier.herrera@example.com",
        "age": 38,
        "role": "moderator",
        "active": false
    },
    {
        "id": 10,
        "name": "Gabriela Núñez",
        "email": "gabriela.nunez@example.com",
        "age": 27,
        "role": "user",
        "active": true
    }
]
