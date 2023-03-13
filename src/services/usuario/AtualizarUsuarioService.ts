import prismaClient from "../../prisma"

interface userDataRequest {
    usuarioID: string,
    ativo: boolean,
    logo: object,
    nome: string,
    telefone: string,
    bio: string,
    endereco: string,
    bairro: string,
    cidade: string,
    latlng: object,
    entrega: boolean
}

class AtualizarUsuarioService {
    async execute({
        usuarioID,
        ativo,
        logo,
        nome,
        telefone,
        bio,
        endereco,
        bairro,
        cidade,
        latlng,
        entrega

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
                logo,
                telefone,
                bio,
                endereco,
                bairro,
                cidade,
                latlng,
                entrega
            }
        })

        return data

    }
}

export { AtualizarUsuarioService }