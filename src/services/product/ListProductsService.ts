import prismaClient from "../../prisma";

class ListProductsService {
    async execute() {

        const products = await prismaClient.product.findMany({
            where: {
                user: {
                    active: true
                }
            },
            select:{
                id: true,
                name:true,
                description: true,
                price:true,
                off: true,
                size:true,
                color:true,
                image: true,
                user: {
                    select: {
                        userData:{
                            select:{
                                name:true
                            }
                        }
                    }
                },
                category:{
                    select:{
                        id: true,
                        name:true
                    }
                }

            }
        })

        return products
    }
}

export { ListProductsService }