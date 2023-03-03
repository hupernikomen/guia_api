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
                produtos: true,
                regiao: true,
            }
        })

        return usuario
    }
}

export { ListarUsuarioService }