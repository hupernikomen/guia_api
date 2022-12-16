import { Request, Response } from 'express'
import { UpdateProductService } from '../../services/product/UpdateProductService'

class UpdateProductController {
    async handle(req: Request, res: Response) {
        const productID = req.query.productID as string
        const {
            name,
            description,
            off,
            size,
            color,
            categoryID
        } = req.body

        const updateProductService = new UpdateProductService();

        const product = await updateProductService.execute({
            productID,
            name,
            description,
            off,
            size,
            color,
            categoryID
        })


        return res.json(product)
    }
}

export { UpdateProductController }