import prismaClient from "../../prisma"

interface userDataRequest {
    usuarioID: string,
    nome: string,
    telefone: string,
    bio: string,
    // avatar: string,
}

class AtualizarUsuarioService {
    async execute({
        usuarioID,
        nome,
        telefone,
        bio,
        // avatar,

    }: userDataRequest) {

        const usuario = await prismaClient.usuario.findUnique({
            where: {
                id: usuarioID
            }
        })

        if (!usuario) {
            throw new Error("Ops, infelizmente não encontramos!");

        }

        const data = await prismaClient.dados.update({
            where: {
                usuarioID
            },
            data: {
                nome,
                telefone,
                bio,
                // avatar,
            }
        })

        return data

    }
}

export { AtualizarUsuarioService }