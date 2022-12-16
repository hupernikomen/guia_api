import prismaClient from "../../prisma"

interface userFormatRequest {
    userID: string,
    delivery: boolean,
    portion: string,
}

class ConfigUsuarioService {
    async execute({
        userID,
        delivery,
        portion,

    }: userFormatRequest) {
        
        const format = await prismaClient.userFormat.update({
            where:{
                userID
            },
            data: {
                delivery,
                portion,
            },
        })

        return format

    }
}

export { ConfigUsuarioService }