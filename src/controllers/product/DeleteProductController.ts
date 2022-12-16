import { Request, Response } from 'express'

import { DeleteProductService } from '../../services/product/DeleteProductService'

class DeleteProductController {
  async handle(req: Request, res: Response) {
    const productID = req.query.productID as string

    const deleteProduct = new DeleteProductService()

    const product = await deleteProduct.execute({
      productID
    })

    return res.status(200).json({
      message: "Produto Excluido",
      produto: product.name

    })

  }
}

export { DeleteProductController }