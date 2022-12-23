import prismaClient from "../../prisma"

interface userDataRequest {
    userID: string,
    name: string,
    phone: string,
    bio: string,
    // avatar: string,
}

class UpdateUserService {
    async execute({
        userID,
        name,
        phone,
        bio,
        // avatar,

    }: userDataRequest) {

        const user = await prismaClient.user.findUnique({
            where: {
                id: userID
            }
        })

        if (!user) {
            throw new Error("Ops, infelizmente não encontramos!");

        }

        const data = await prismaClient.userData.update({
            where: {
                userID
            },
            data: {
                name,
                phone,
                bio,
                // avatar,
            }
        })

        return data

    }
}

export { UpdateUserService }