import { Request, Response } from 'express'
import { CriarUsuarioService } from '../../services/usuario/CriarUsuarioService'

class CriarUsuarioController {
    async handle(req: Request, res: Response) {
        const { email, senha } = req.body

        const criarUsuarioService = new CriarUsuarioService();

        const usuario = await criarUsuarioService.execute({
            email,
            senha,
        })

        if(!usuario) {
            throw new Error("Ops, algo deu errado!");
            
        }

        return res.status(200).json({
            message: "Cadastrado com Sucesso"
        })
    }
}

export { CriarUsuarioController }