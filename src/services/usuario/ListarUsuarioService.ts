import prismaClient from "../../prisma";

interface userRequest {
    usuarioID: string
}

class ListarUsuarioService {
    async execute({
        usuarioID
    }: userRequest) {

        const usuario = await prismaClient.usuario.findUnique({
            where: {
                id: usuarioID,
            },
            select: {
                id: true,
                email: true,
                bio: true,
                latlng:true,
                nome:true,
                endereco:true,
                bairro: true,
                logo: true,
                telefone: true,
                produtos: true,
                regiao: true,
                entrega:true
            }
        })

        return usuario
    }
}

export { ListarUsuarioService }