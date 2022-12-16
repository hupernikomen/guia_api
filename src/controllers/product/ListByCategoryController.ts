import { Request, Response } from 'express'
import { ListByCategoryService } from '../../services/product/ListByCategoryService'


class ListByCategoryController {
    async handle(req: Request, res: Response) {
        const categoryID = req.query.categoryID as string

        const listByCategoryService = new ListByCategoryService()

        const products = await listByCategoryService.execute({
            categoryID
        })

        return res.json(products)
    }
}

export { ListByCategoryController }