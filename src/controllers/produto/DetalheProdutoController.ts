import { Request, Response } from 'express'
import { DetalheProdutoService } from '../../services/produto/DetalheProdutoService'


class DetalheProdutoController {
    async handle(req: Request, res: Response) {

        const produtoID = req.query.produtoID as string

        const detalheProdutoService = new DetalheProdutoService()

        const produto = await detalheProdutoService.execute({
            produtoID
        })
        return res.json(produto)

    }
}

export { DetalheProdutoController }