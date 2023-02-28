import prismaClient from "../../prisma";

class ListarCategoriasService {
    async execute() {

        const categoria = await prismaClient.categoria.findMany({
            select: {
                id: true,
                nome: true
            }
        })

        return categoria
    }
}

export { ListarCategoriasService }