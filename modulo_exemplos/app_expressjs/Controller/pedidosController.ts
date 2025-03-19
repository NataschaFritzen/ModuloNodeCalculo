import { Request, Response } from "express";
import { IPedidos } from "../Model/pedidos";
import pedidosModel from "../Model/pedidosModel";

async function exibirTodos (req: Request, res: Response, next: any) {
const pedidos= await pedidosModel.findAll();
res.json(pedidos)
}

async function exibirPedido (req: Request, res: Response, next: any) {
    const pedido = await pedidosModel.findByPk(req.params.id);
    res.json(pedido)
}

async function novoPedido (req: Request, res: Response, next: any) {
    res.render("novoPedido")
}

async function adicionarPedido (req: Request, res: Response, next: any) {
const pedido = req.body as IPedidos;
await pedidosModel.create({...pedido});
res.redirect('/pedidos');
}

async function editarPedido (req: Request, res: Response, next: any) {
    const pedido = await pedidosModel.findByPk(req.params.id);

    res.render("editarPedido", {pedido: pedido});
}

async function atualizarPedido (req: Request, res: Response, next: any) {
    await pedidosModel.update(
        req.body as IPedidos, {
            where: {
                id: req.params.id

            }
        }
    );
    
    res.redirect('/pedidos');
}

async function excluirPedido (req: Request, res: Response, next: any) {
    await pedidosModel.destroy(
        {
        where:{
            id: req.params.id
        }
    }
)
    res.redirect('/pedidos');
}


export default {exibirTodos, exibirPedido, novoPedido, adicionarPedido, editarPedido, atualizarPedido, excluirPedido};