import { Request, Response } from 'express'
import { AtualizarUsuarioService } from '../../services/usuario/AtualizarUsuarioService'

class AtualizarUsuarioController {
    async handle(req: Request, res: Response) {
        const usuarioID = req.query.usuarioID as string
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

        const file = req.file

        const boo = entrega === 'true'

        const atualizarUsuarioService = new AtualizarUsuarioService();

        const data = await atualizarUsuarioService.execute({
            usuarioID,
            ativo,
            logo: file,
            nome,
            telefone,
            bio,
            endereco,
            bairro,
            cidade,
            latlng,
            entrega: boo

        })


        return res.json(data)
    }
}

export { AtualizarUsuarioController }