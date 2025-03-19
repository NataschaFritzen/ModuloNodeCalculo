import { Router } from "express";
import pedidosController from "../Controller/pedidosController";

const router = Router();

router.get('/pedidos', pedidosController.exibirTodos);
router.get('/pedidos/novo', pedidosController.novoPedido);

router.get('/pedidos/:id', pedidosController.exibirPedido);
router.post('/pedidos/novo', pedidosController.adicionarPedido);

router.get('/pedidos/editar/:id', pedidosController.editarPedido);
router.post('/pedidos/editar/:id', pedidosController.atualizarPedido);

router.get('/pedidos/excluir/:id', pedidosController.excluirPedido);

export default router;