import { Request, Response } from 'express'
import { AtualizarUsuarioService } from '../../services/usuario/AtualizarUsuarioService'

class AtualizarUsuarioController {
    async handle(req: Request, res: Response) {
        const usuarioID = req.query.userID as string
        const {
            nome,
            telefone,
            bio,
        } = req.body

        const atualizarUsuarioService = new AtualizarUsuarioService();

        const data = await atualizarUsuarioService.execute({
            usuarioID,
            nome,
            telefone,
            bio,
            // avatar

        })


        return res.json(data)
    }
}

export { AtualizarUsuarioController }