import { Request, Response } from 'express'
import { ConfigUsuarioService } from '../../services/userFormat/UpdateUserFormatService'

class UpdateUserFormatController {
    async handle(req: Request, res: Response) {
        const userID = req.query.userID as string
        const {
            delivery,
            portion
            
        } = req.body

        const userFormatService = new ConfigUsuarioService();

        const userFormat = await userFormatService.execute({
            userID,
            delivery,
            portion

        })

        return res.json(userFormat)
    }
}

export { UpdateUserFormatController }