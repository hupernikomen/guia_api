import { Request, Response } from 'express'
import { ListarPorCategoriaService } from '../../services/produto/ListarPorCategoriaService'


class ListarPorCategoriaController {
    async handle(req: Request, res: Response) {
        const categoriaID = req.query.categoriaID as string

        const listarPorCategoriaService = new ListarPorCategoriaService()

        const produto = await listarPorCategoriaService.execute({
            categoriaID
        })

        return res.json(produto)
    }
}

export { ListarPorCategoriaController }