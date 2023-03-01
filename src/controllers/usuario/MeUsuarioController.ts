import { Request, Response } from 'express'
import { MeUsuarioService } from '../../services/usuario/MeUsuarioService'

class MeUsuarioController {
    async handle(req:Request,res:Response) {

        const usuario_ID = req.usuario_ID

        const meUsuarioService = new MeUsuarioService();

        const me = await meUsuarioService.execute(usuario_ID)

        return res.json(me)
    }
}

export { MeUsuarioController }