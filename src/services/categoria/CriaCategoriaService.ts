import prismaClient from "../../prisma";

interface categoriaRequest {
    nome: string
}

class CriarCategoriaService {
    async execute({
        nome: nome
    }: categoriaRequest) {

        const categoriaExiste = await prismaClient.categoria.findFirst({
            where: {
                nome
            }
        })

        if (categoriaExiste) {
            throw new Error("Categoria já existe");
            
        }

        const categoria = await prismaClient.categoria.create({
            data: {
                nome
            }
        })

        return categoria
    }
}

export { CriarCategoriaService }