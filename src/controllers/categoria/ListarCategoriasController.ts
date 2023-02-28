import { Request, Response } from 'express'
import { ListarCategoriasService } from '../../services/categoria/ListarCategoriasService'


class ListarCategoriasController {
    async handle(req: Request, res: Response) {
        const listarCategoriasService = new ListarCategoriasService()

        const categorias = await listarCategoriasService.execute()
        return res.json(categorias)

    }
}

export { ListarCategoriasController }