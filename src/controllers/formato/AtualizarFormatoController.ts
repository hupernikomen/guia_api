import { Request, Response } from 'express'
import { AtualizarFormatoService } from '../../services/formato/AtualizarFormatoService'

class AtualizarFormatoController {
    async handle(req: Request, res: Response) {
        const usuarioID = req.query.userID as string
        const {
            entrega,
            parcela
            
        } = req.body

        const atualizarFormatoService = new AtualizarFormatoService();

        const formato = await atualizarFormatoService.execute({
            usuarioID,
            entrega,
            parcela

        })

        return res.json(formato)
    }
}

export { AtualizarFormatoController }