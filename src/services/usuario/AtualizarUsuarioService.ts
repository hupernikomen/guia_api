import prismaClient from "../../prisma"

interface userDataRequest {
    usuarioID: string,
    ativo: boolean,
    nome: string,
    telefone: string,
    bio: string,
    endereco: string,
    bairro: string,
    cidade: string,
    latlng: string,
    entrega: boolean
    // avatar: string,
}

class AtualizarUsuarioService {
    async execute({
        usuarioID,
        ativo,
        nome,
        telefone,
        bio,
        endereco,
        bairro,
        cidade,
        latlng,
        entrega
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

        const data = await prismaClient.usuario.update({
            where: {
                id: usuarioID
            },
            data: {
                ativo,
                nome,
                telefone,
                bio,
                endereco,
                bairro,
                cidade,
                latlng,
                entrega
                // avatar,
            }
        })

        return data

    }
}

export { AtualizarUsuarioService }