import prismaClient from "../../prisma"

interface productRequest {
    nome: string,
    descricao: string,
    preco:string,
    oferta: string,
    tamanho: string,
    cor: string,
    categoriaID: string,
    produtoID: string
}

class UpdateProductService {
    async execute({
        nome,
        descricao,
        preco,
        oferta,
        tamanho,
        cor,
        categoriaID,
        produtoID

    }: productRequest) {

        const produto = await prismaClient.produto.update({
            where: {
                id: produtoID
            },
            data: {
                nome,
                descricao,
                preco,
                oferta,
                tamanho,
                cor,
                categoriaID,
            }
        })

        return produto

    }
}

export { UpdateProductService }