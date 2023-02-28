import { Request, Response } from 'express'
import { ListarRegioesService } from '../../services/regiao/ListarRegioesService'


class ListarRegioesController {
    async handle(req: Request, res: Response) {
        const listarRegioesService = new ListarRegioesService()

        const regioes = await listarRegioesService.execute()
        return res.json(regioes)

    }
}

export { ListarRegioesController }