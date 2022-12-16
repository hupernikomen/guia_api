import { Request, Response } from 'express'
import { CreateProductService } from '../../services/product/CreateProductService'

class CreateProductController {
    async handle(req: Request, res: Response) {
        const createProductService = new CreateProductService()
        const userID = req.query.userID as string

        const {
            name,
            description,
            price,
            off,
            size,
            color,
            categoryID,
        } = req.body

        

        if (!req.files) {
            throw new Error("Erro no envio de foto");
            
        } else {

             
            const image = req.files

            const product = await createProductService.execute({
                name,
                description,
                price,
                off,
                image,
                size,
                color,
                categoryID,
                userID
            })
            return res.status(200).json({mensagem: `Produto: ${product.name}, criado com Sucesso`})
        }

    }
}



export { CreateProductController }