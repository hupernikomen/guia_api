import prismaClient from "../../prisma";

interface userRequest {
    userID: string
}

class ListUserService {
    async execute({
        userID
    }: userRequest) {

        const user = await prismaClient.user.findUnique({
            where: {
                id: userID,
            },
            select: {
                id: true,
                email: true,
                products: true,
                region: true,
                userData: true,
                userLocale:true,
                userFormat: true
            }
        })

        return user
    }
}

export { ListUserService }