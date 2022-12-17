import { Request, Response } from 'express'
import { CreateUserService } from '../../services/user/CreateUserService'

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { email, password, regionID } = req.body

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({
            email,
            password,
            regionID
        })

        if(!user) {
            throw new Error("Ops, algo deu errado!");
            
        }

        return res.status(200).json({
            message: "Cadastrado com Sucesso"
        })
    }
}

export { CreateUserController }