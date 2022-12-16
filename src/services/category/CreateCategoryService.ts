import prismaClient from "../../prisma";

interface categoriaRequest {
    name: string
}

class CreateCategoryService {
    async execute({
        name
    }: categoriaRequest) {

        const categoryExist = await prismaClient.productCategory.findFirst({
            where: {
                name
            }
        })

        if (categoryExist) {
            throw new Error("Categoria já existe");
            
        }

        const category = await prismaClient.productCategory.create({
            data: {
                name
            }
        })

        return category
    }
}

export { CreateCategoryService }