import prismaClient from "../../prisma"

interface productRequest {
    name: string,
    description: string,
    price:string,
    off: string,
    size: string,
    color: string,
    categoryID: string,
    productID: string
}

class UpdateProductService {
    async execute({
        name,
        description,
        price,
        off,
        size,
        color,
        categoryID,
        productID

    }: productRequest) {

        const product = await prismaClient.product.update({
            where: {
                id: productID
            },
            data: {
                name,
                description,
                price,
                off,
                size,
                color,
                categoryID,
            }
        })

        return product

    }
}

export { UpdateProductService }