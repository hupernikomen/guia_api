import prismaClient from "../../prisma"

interface userLocaleRequest {
    usuarioID: string,
    endereco: string,
    bairro: string,
    cidade: string,
    estado: string,
    latlng: string,

}

class AtualizarLocalizacaoService {
    async execute({
        usuarioID,
        endereco,
        bairro,
        cidade,
        estado,
        latlng,

    }: userLocaleRequest) {

        const usuario = await prismaClient.usuario.findUnique({
            where:{
                id: usuarioID
            }
        })

        if (!usuario) {
            throw new Error("Ops, infelizmente não encontramos!");
            
        }


        const localizacao = await prismaClient.localizacao.update({
            where: {
                usuarioID
            },
            data: {
                endereco,
                bairro,
                cidade,
                estado,
                latlng,
            }
        })

        return localizacao

    }
}

export { AtualizarLocalizacaoService }