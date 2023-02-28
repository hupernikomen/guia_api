import { Request, Response } from 'express'
import { ListarUsuariosService } from '../../services/usuario/ListarUsuariosService'


class ListarUsuariosController {
    async handle(req: Request, res: Response) {

        const listarUsuariosService = new ListarUsuariosService()

        const usuarios = await listarUsuariosService.execute()
        return res.json(usuarios)

    }
}

export { ListarUsuariosController }