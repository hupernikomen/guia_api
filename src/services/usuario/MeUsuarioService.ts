import prismaClient from "../../prisma";

class MeUsuarioService {
    async execute(user_ID: string) {
        const usuario = await prismaClient.usuario.findFirst({
            where:{
                id: user_ID
            },
            select: {
                id: true,
                email: true,
                ativo: true,
                produtos: true,

                regiao:{
                    select:{
                        nome:true
                    }
                },

            }
        })

        return usuario
    }
}

export { MeUsuarioService }