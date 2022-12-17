import { Request, Response } from 'express'
import { UpdateUserService } from '../../services/user/UpdateUserDataService'

class UpdateUserController {
    async handle(req: Request, res: Response) {
        const userID = req.query.userID as string
        const {
            name,
            phone,
            bio,
        } = req.body

        const {filename: avatar} = req.file
        

        const updateUserService = new UpdateUserService();

        const userData = await updateUserService.execute({
            userID,
            name,
            phone,
            bio,
            avatar

        })


        return res.json(userData)
    }
}

export { UpdateUserController }