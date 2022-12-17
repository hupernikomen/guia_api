import prismaClient from "../../prisma"
import { hash } from 'bcryptjs'

interface userRequest {
    email: string,
    password: string,
    regionID: string
}

class CreateUserService {
    async execute({
        email,
        password,
        regionID

    }: userRequest) {

        if (!email) {
            throw new Error("Email Incorreto");
        }
        if (!regionID) {
            throw new Error("É necessrio selecionar região");
        }

        const emailExist = await prismaClient.user.findFirst({
            where: {
                email
            }
        })

        if (emailExist) {
            throw new Error("Usuario já cadastrado!");
        }

        const passwordCripto = await hash(password, 8)

        const user = await prismaClient.user.create({
            data: {
                email,
                password: passwordCripto,
                regionID
            }
            
        })

        await prismaClient.userData.create({
            data: {
                userID: user.id
            }
        })

        await prismaClient.userFormat.create({
            data: {
                userID: user.id
            }
        })

        await prismaClient.userLocale.create({
            data: {
                userID: user.id
            }
        })



        return user

    }
}

export { CreateUserService }