import { Request, Response } from 'express'
import { DetailProductService } from '../../services/product/DetailProductService'


class DetailProductController {
    async handle(req: Request, res: Response) {

        const productID = req.query.productID as string

        const detailProductService = new DetailProductService()

        const product = await detailProductService.execute({
            productID
        })
        return res.json(product)

    }
}

export { DetailProductController }