import prismaClient from "../../prisma";

interface regionRequest {
    nome: string
}

class CreateRegionService {
    async execute({
        nome
    }: regionRequest) {

        const regiaoExiste = await prismaClient.regioes.findFirst({
            where: {
                nome
            }
        })

        if (regiaoExiste) {
            throw new Error("Região já existe");
            
        }

        const regiao = await prismaClient.regioes.create({
            data: {
                nome
            }
        })

        return regiao
    }
}

export { CreateRegionService }