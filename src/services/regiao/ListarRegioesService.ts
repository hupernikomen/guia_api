import prismaClient from "../../prisma";

class ListarRegioesService {
    async execute() {

        const regiao = await prismaClient.regiao.findMany({
            select:{
                id: true,
                nome: true
            }
        })

        return regiao
    }
}

export { ListarRegioesService }