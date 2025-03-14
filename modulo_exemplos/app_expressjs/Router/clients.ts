import { Router } from "express";
const router = Router();

router.get('/', (req, res) => {
    res.send("<h1>Rota Inicial</h1>")
})

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