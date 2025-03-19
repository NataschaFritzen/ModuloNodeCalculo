import { Request, Response } from "express";
import produtosModel from "../Model/produtosModel";
import { Iprodutos } from "../Model/produtos";
async function produtos (req: Request, res: Response, next: any) {

    if(process.env.APP_LOGIN == '1'){
        const produtos = await produtosModel.findAll();
        res.json(produtos)
    }
    else{
        res.send("Login não efetuado, pagina inacessivel");
    }
}

async function show (req: Request, res: Response, next: any) {
    const produto = await produtosModel.findByPk(req.params.id);
    res.json(produto);
}


function create (req: Request, res: Response, next: any) {
    res.render("createProdutos")
}

async function store (req: Request, res: Response, next: any) {
const produto = req.body as Iprodutos;
await produtosModel.create({...produto});
res.redirect('/produtos');
}

async function edit (req: Request, res: Response, next: any) {
    const produto = await produtosModel.findByPk(req.params.id);

    res.render("editProduto", {produto: produto});
}

async function update (req: Request, res: Response, next: any) {
    await produtosModel.update(
        req.body as Iprodutos, {
            where: {
                id: req.params.id

            }
        }
    );
    
    res.redirect('/produtos');
}

async function del (req: Request, res: Response, next: any) {
    await produtosModel.destroy(
        {
        where:{
            id: req.params.id
        }
    }
)
    res.redirect('/produtos');
}


export default {produtos, show, create, store, edit, update, del};