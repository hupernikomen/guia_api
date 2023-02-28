import { Request, Response } from 'express'
import { CreateRegionService } from '../../services/regiao/CriarRegiaoService'

class CriarRegiaoController {
    async handle(req: Request, res: Response) {
        const { nome } = req.body

        const criarRegiaoService = new CreateRegionService();

        const region = await criarRegiaoService.execute({
            nome
        })

        return res.json(region)
    }
}

export { CriarRegiaoController }