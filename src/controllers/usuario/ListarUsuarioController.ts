import { Request, Response } from 'express'
import { ListarUsuarioService } from '../../services/usuario/ListarUsuarioService'


class ListarUsuarioControler {
    async handle(req: Request, res: Response) {

        const usuarioID = req.query.usuarioID as string

        const listarUsuarioService = new ListarUsuarioService()

        const usuario = await listarUsuarioService.execute({
            usuarioID
        })
        return res.json(usuario)

    }
}

export { ListarUsuarioControler }