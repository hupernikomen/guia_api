import prismaClient from "../../prisma";

class ListUsersService {
    async execute() {

        const user = await prismaClient.user.findMany({
            where: {
                active: true,
                region:{
                    name: "Dirceu" // Logica de alteração de REGIAO no FrontEnd
                }
            },
            select: {
                id: true,
                userData: {
                    select: {
                        name: true,
                        bio: true,

                    }
                },
                userFormat: {
                    select: {
                        delivery: true,
                    }
                }
            }
        })

        return user
    }
}

export { ListUsersService }