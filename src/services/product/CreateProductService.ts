import prismaClient from "../../prisma";

interface ProductRequest {
    name: string
    description: string
    price: string
    off: string,
    size:string,
    color:string,
    image: object,
    categoryID: string,
    userID: string
}

class CreateProductService {
    async execute({
        name,
        description,
        price,
        off,
        image,
        size,
        color,
        categoryID,
        userID
    }: ProductRequest) {

        const product = await prismaClient.product.create({
            data:{
                name,
                description,
                price,
                off,
                image,
                size,
                color,
                categoryID,
                userID
            }
        })

        return product
    }
}

export { CreateProductService }