import prismaClient from "../../prisma";

class ListarRegioesService {
    async execute() {

        const regiao = await prismaClient.regioes.findMany({
            select:{
                id: true,
                nome: true
            }
        })

        return regiao
    }
}

export { ListarRegioesService }