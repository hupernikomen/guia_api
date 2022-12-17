import { Request, Response } from 'express'
import { ListUsersService } from '../../services/user/ListUsersService'


class ListUsersController {
    async handle(req: Request, res: Response) {

        const listUsersService = new ListUsersService()

        const usuarios = await listUsersService.execute()
        return res.json(usuarios)

    }
}

export { ListUsersController }