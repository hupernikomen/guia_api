import { Request, Response } from 'express'
import { AtualizarUsuarioService } from '../../services/usuario/AtualizarUsuarioService'

class AtualizarUsuarioController {
    async handle(req: Request, res: Response) {
        const usuarioID = req.query.userID as string
        const {
            ativo,
            nome,
            telefone,
            bio,
            endereco,
            bairro,
            cidade,
            latlng,
            entrega
        } = req.body

        const atualizarUsuarioService = new AtualizarUsuarioService();

        const data = await atualizarUsuarioService.execute({
            usuarioID,
            ativo,
            nome,
            telefone,
            bio,
            endereco,
            bairro,
            cidade,
            latlng,
            entrega
            // avatar

        })


        return res.json(data)
    }
}

export { AtualizarUsuarioController }