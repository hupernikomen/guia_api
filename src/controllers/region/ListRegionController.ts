import { Request, Response } from 'express'
import { ListRegionsService } from '../../services/region/ListRegionsService'


class ListRegionsController {
    async handle(req: Request, res: Response) {
        const listRegionsService = new ListRegionsService()

        const regions = await listRegionsService.execute()
        return res.json(regions)

    }
}

export { ListRegionsController }