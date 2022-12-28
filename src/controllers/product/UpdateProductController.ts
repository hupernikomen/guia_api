import { Request, Response } from 'express'
import { UpdateProductService } from '../../services/product/UpdateProductService'

class UpdateProductController {
    async handle(req: Request, res: Response) {
        const productID = req.query.productID as string
        const {
            name,
            description,
            price,
            off,
            size,
            color,
            categoryID,
        } = req.body

        const updateProductService = new UpdateProductService();

        const product = await updateProductService.execute({
            name,
            description,
            price,
            off,
            size,
            color,
            categoryID,
            productID
        })


        return res.json(product)
    }
}

export { UpdateProductController }