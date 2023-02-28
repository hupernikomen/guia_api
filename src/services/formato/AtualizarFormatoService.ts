import prismaClient from "../../prisma"

interface userFormatRequest {
    usuarioID: string,
    entrega: boolean,
    parcela: string,
}

class AtualizarFormatoService {
    async execute({
        usuarioID,
        entrega,
        parcela,

    }: userFormatRequest) {

        const usuario = await prismaClient.usuario.findUnique({
            where:{
                id: usuarioID
            }
        })

        if (!usuario) {
            throw new Error("Ops, infelizmente não encontramos!");
            
        }
        
        
        const formato = await prismaClient.formato.update({
            where:{
                usuarioID
            },
            data: {
                entrega,
                parcela,
            },
        })

        return formato

    }
}

export { AtualizarFormatoService }