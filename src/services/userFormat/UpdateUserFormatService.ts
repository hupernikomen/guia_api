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

        const user = await prismaClient.user.findUnique({
            where:{
                id: userID
            }
        })

        if (!user) {
            throw new Error("Ops, infelizmente não encontramos!");
            
        }
        
        
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