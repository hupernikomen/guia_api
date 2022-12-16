import prismaClient from "../../prisma"

interface userDataRequest {
    userID: string,
    name: string,
    phone: string,
    bio: string,
}

class UpdateUserService {
    async execute({
        userID,
        name,
        phone,
        bio,

    }: userDataRequest) {
        
        const data = await prismaClient.userData.update({
            where:{
                userID
            },
            data: {
                name,
                phone,
                bio,
            }
        })

        return data

    }
}

export { UpdateUserService }