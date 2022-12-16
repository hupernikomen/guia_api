import prismaClient from "../../prisma";

class ListCategoriesService {
    async execute() {

        const category = await prismaClient.productCategory.findMany({
            select:{
                id: true,
                name: true
            }
        })

        return category
    }
}

export { ListCategoriesService }