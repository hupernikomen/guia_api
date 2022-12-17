import prismaClient from "../../prisma";

class ListRegionsService {
    async execute() {

        const region = await prismaClient.region.findMany({
            select:{
                id: true,
                name: true
            }
        })

        return region
    }
}

export { ListRegionsService }