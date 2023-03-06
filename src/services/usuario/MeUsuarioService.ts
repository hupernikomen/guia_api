import prismaClient from "../../prisma";

class MeUsuarioService {
    async execute(usuario_ID: string) {
        const usuario = await prismaClient.usuario.findFirst({
            where:{
                id: usuario_ID
            },
            select: {
                id: true,
                nome: true,
                email: true,
                ativo: true,
                produtos: true,
                telefone: true,

                regiao:{
                    select:{
                        nome:true,
                    }
                },

            }
        })

        return usuario
    }
}

export { MeUsuarioService }