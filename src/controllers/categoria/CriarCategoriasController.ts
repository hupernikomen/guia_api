import { Request, Response } from 'express'
import { CriarCategoriaService } from '../../services/categoria/CriaCategoriaService'

class CriarCategoriaController {
    async handle(req: Request, res: Response) {
        const { nome } = req.body

        const criarCategoriasService = new CriarCategoriaService();

        const category = await criarCategoriasService.execute({
            nome: nome
        })

        return res.json(category)
    }
}

export { CriarCategoriaController }