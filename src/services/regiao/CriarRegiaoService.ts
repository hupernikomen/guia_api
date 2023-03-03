import prismaClient from "../../prisma";

interface regionRequest {
    nome: string
}

class CreateRegionService {
    async execute({
        nome
    }: regionRequest) {

        const regiaoExiste = await prismaClient.regiao.findFirst({
            where: {
                nome
            }
        })

        if (regiaoExiste) {
            throw new Error("Região já existe");
            
        }

        const regiao = await prismaClient.regiao.create({
            data: {
                nome
            }
        })

        return regiao
    }
}

export { CreateRegionService }