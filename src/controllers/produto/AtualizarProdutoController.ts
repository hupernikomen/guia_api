import { Request, Response } from 'express'
import { UpdateProductService } from '../../services/produto/AtualizarProdutoService'

class AtualizarProdutoController {
    async handle(req: Request, res: Response) {
        const produtoID = req.query.produtoID as string
        
        const {
            nome,
            descricao,
            preco,
            oferta,
            tamanho,
            cor,
            categoriaID,
        } = req.body

        const updateProductService = new UpdateProductService();

        const produto = await updateProductService.execute({
            nome,
            descricao,
            preco,
            oferta,
            tamanho,
            cor,
            categoriaID,
            produtoID
        })


        return res.json(produto)
    }
}

export { AtualizarProdutoController }