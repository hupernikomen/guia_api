import { Request, Response } from 'express'
import { CreateRegionService } from '../../services/region/CreateRegionService'

class CreateRegionController {
    async handle(req: Request, res: Response) {
        const { name } = req.body

        const createRegionService = new CreateRegionService();

        const region = await createRegionService.execute({
            name
        })

        return res.json(region)
    }
}

export { CreateRegionController }