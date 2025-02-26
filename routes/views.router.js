import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    let testUser = {
        name: "Tomas"
    }

    res.render('index', testUser);
})

export default router;