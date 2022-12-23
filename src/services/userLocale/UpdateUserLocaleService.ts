import prismaClient from "../../prisma"

interface userLocaleRequest {
    userID: string,
    address: string,
    district: string,
    city: string,
    state: string,
    latlng: string,

}

class UpdateUserLocaleService {
    async execute({
        userID,
        address,
        district,
        city,
        state,
        latlng,

    }: userLocaleRequest) {

        const user = await prismaClient.user.findUnique({
            where:{
                id: userID
            }
        })

        if (!user) {
            throw new Error("Ops, infelizmente não encontramos!");
            
        }


        const region = await prismaClient.userLocale.update({
            where: {
                userID
            },
            data: {
                address,
                district,
                city,
                state,
                latlng,
            }
        })

        return region

    }
}

export { UpdateUserLocaleService }