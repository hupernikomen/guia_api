import prismaClient from "../../prisma";

interface DeleteProdutoRequest {
    productID: string
}

class DeleteProductService {

    async execute({
        productID
    }: DeleteProdutoRequest) {

        const product = await prismaClient.product.findUnique({
            where: {
                id: productID
            }
        })

        if(!product) {
            throw new Error("Produto não existe");
        }

        const productDelete = await prismaClient.product.delete({
            where: {
                id: productID
            }
        })

        return productDelete

    }
}

export { DeleteProductService }