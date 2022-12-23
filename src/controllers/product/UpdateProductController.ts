import { Request, Response } from 'express'
import { UpdateProductService } from '../../services/product/UpdateProductService'

class UpdateProductController {
    async handle(req: Request, res: Response) {
        const {
            name,
            description,
            price,
            off,
            size,
            color,
            categoryID,
            productID
        } = req.body

        const updateProductService = new UpdateProductService();

        const product = await updateProductService.execute({
            productID,
            name,
            description,
            price,
            off,
            size,
            color,
            categoryID
        })


        return res.json(product)
    }
}

export { UpdateProductController }