import { Request, Response } from 'express'
import { MeUserService } from '../../services/user/MeUserService'

class MeUserController {
    async handle(req:Request,res:Response) {

        const user_ID = req.user_ID

        const meUserService = new MeUserService();

        const me = await meUserService.execute(user_ID)

        return res.json(me)
    }
}

export { MeUserController }