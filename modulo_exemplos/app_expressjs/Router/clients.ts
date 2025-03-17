import { Router } from "express";
import clientsController from "../Controller/clientsController";

const router = Router();

router.get('/', clientsController.index)
router.get('/:id', clientsController.show)

router.get('/create', clientsController.create)
router.post('/create', clientsController.store)

router.get('/edit/:id', clientsController.edit)

router.get('/trabalheconosco', (req,res) => {
    res.send("Opcoes de carreira")
})

router.get('/contato', (req,res) => {
    res.send("(48) 9999-9999")
})

export default router;