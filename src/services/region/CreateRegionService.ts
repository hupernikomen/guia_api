import prismaClient from "../../prisma";

interface regionRequest {
    name: string
}

class CreateRegionService {
    async execute({
        name
    }: regionRequest) {

        const regionExist = await prismaClient.region.findFirst({
            where: {
                name
            }
        })

        if (regionExist) {
            throw new Error("Região já existe");
            
        }

        const region = await prismaClient.region.create({
            data: {
                name
            }
        })

        return region
    }
}

export { CreateRegionService }