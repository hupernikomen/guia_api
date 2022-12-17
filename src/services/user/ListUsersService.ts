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
                email: true,
                region: {
                    select: {
                        name:true
                    }
                },
                userData: {
                    select: {
                        name: true,
                        bio: true,

                    }
                },
                userLocale: {
                    select:{
                        address:true,
                        city:true,
                        district:true,
                        state:true,
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