import prismaClient from "../../prisma";

interface ProductRequest {
    categoryID: string
}

class ListByCategoryService {
    async execute({

        categoryID

    }: ProductRequest) {

        const findByCategory = await prismaClient.product.findMany({
            where: {
                categoryID,
                user: {
                    active: true
                }
            }
        })

        return findByCategory

    }
}

export { ListByCategoryService }