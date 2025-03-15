import { Router } from "express";
import clientsController from "../Controller/clientsController";

const router = Router();

router.get('/', clientsController.index)

router.get('/sobrenos', (req,res) => {
    res.send("Rota falando sobre a empresa")
})

router.get('/trabalheconosco', (req,res) => {
    res.send("Opcoes de carreira")
})

router.get('/contato', (req,res) => {
    res.send("(48) 9999-9999")
})

export default router;