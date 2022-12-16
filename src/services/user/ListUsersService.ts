import prismaClient from "../../prisma";

class ListUsersService {
    async execute() {

        const user = await prismaClient.user.findMany({
            where: {
                active: true,
            },
            select: {
                id: true,
                email: true,
                userData: {
                    select: {
                        name: true,
                        bio: true,

                    }
                }
            }
        })

        return user
    }
}

export { ListUsersService }