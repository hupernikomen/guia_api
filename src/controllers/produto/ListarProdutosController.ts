import { Request, Response } from 'express'
import { ListarProdutosService } from '../../services/produto/ListarProdutosService'


class ListarProdutosController {
    async handle(req: Request, res: Response) {
        const listarProdutosService = new ListarProdutosService()

        const product = await listarProdutosService.execute()
        return res.json(product)

    }
}

export { ListarProdutosController }