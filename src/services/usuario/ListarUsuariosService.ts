import prismaClient from "../../prisma";

class ListarUsuariosService {
    async execute() {

        const user = await prismaClient.usuario.findMany({
            where: {
                ativo: true,
                regiao:{
                    nome: "Dirceu" // Logica de alteração de REGIAO no FrontEnd
                }
            },
            select: {
                id: true,
                dados: {
                    select: {
                        nome: true,
                        bio: true,

                    }
                },
                formato: {
                    select: {
                        entrega: true,
                    }
                }
            }
        })

        return user
    }
}

export { ListarUsuariosService }