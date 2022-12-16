import { Request, Response } from 'express'
import { UpdateUserService } from '../../services/user/UpdateUserService'

class UpdateUserController {
    async handle(req: Request, res: Response) {
        const userID = req.query.userID as string
        const {
            name,
            phone,
            bio,
        } = req.body

        const updateUserService = new UpdateUserService();

        const userData = await updateUserService.execute({
            userID,
            name,
            phone,
            bio

        })


        return res.json(userData)
    }
}

export { UpdateUserController }