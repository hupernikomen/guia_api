import { Request, Response } from 'express'
import { UpdateUserLocaleService } from '../../services/userLocale/UpdateUserLocaleService'

class UpdateUserLocaleController {
    async handle(req: Request, res: Response) {
        const userID = req.query.userID as string
        const {
            address,
            district,
            city,
            state,
            latlng,
        } = req.body

        const updateUserLocaleService = new UpdateUserLocaleService();


        const userFormat = await updateUserLocaleService.execute({
            userID,
            address,
            district,
            city,
            state,
            latlng,

        })

        return res.json(userFormat)
    }
}

export { UpdateUserLocaleController }