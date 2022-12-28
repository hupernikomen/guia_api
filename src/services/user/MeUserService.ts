import prismaClient from "../../prisma";

class MeUserService {
    async execute(user_ID: string) {
        const user = await prismaClient.user.findFirst({
            where:{
                id: user_ID
            },
            select: {
                id: true,
                email: true,
                active: true,
                products: true,
                userFormat:{
                    select:{
                        delivery: true
                    }
                },
                region:{
                    select:{
                        name:true
                    }
                },
                userData:{
                    select: {
                        name:true,
                        phone:true,
                        bio:true,
                        // avatar:true
                    }
                }
            }
        })

        return user
    }
}

export { MeUserService }