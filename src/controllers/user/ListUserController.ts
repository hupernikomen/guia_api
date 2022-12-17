import { Request, Response } from 'express'
import { ListUserService } from '../../services/user/ListUserService'


class ListUserController {
    async handle(req: Request, res: Response) {

        const userID = req.query.userID as string

        const listUserService = new ListUserService()

        const usuario = await listUserService.execute({
            userID
        })
        return res.json(usuario)

    }
}

export { ListUserController }