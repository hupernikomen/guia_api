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
                formato:{
                    select:{
                        entrega: true
                    }
                },
                regiao:{
                    select:{
                        nome:true
                    }
                },
                dados:{
                    select: {
                        nome:true,
                        telefone:true,
                        bio:true,
                        // avatar:true
                    }
                }
            }
        })

        return usuario
    }
}

export { MeUsuarioService }