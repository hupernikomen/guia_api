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
                    active: true,
                    region:{
                        name: "Dirceu" // Logica de alteração de REGIAO no FrontEnd
                    }
                }
            },
            select: {
                id: true,
                name: true,
                price: true,
                off: true,
                image: true,
                user: {
                    select: {
                        userData: {
                            select: {
                                name: true
                            }
                        }
                    }
                }
            }
        })

        return findByCategory

    }
}

export { ListByCategoryService }