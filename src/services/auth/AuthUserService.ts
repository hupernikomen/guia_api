import prismaClient from "../../prisma";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface AuthRequest {
    email: string,
    password: string
}

class AuthUsuarioService {
    async execute({
        email,
        password
    }: AuthRequest) {

        const user = await prismaClient.user.findFirst({
            where: {
                email:email
            }
            
        })

        if (!user) {
            throw new Error("Usuario ou Senha Incorreta");
            
        }

        const comparePassword = await compare(password, user.password)
        if (!comparePassword) {
            throw new Error("Usuario ou Senha Incorreta");

        }
        

        const token = sign(
            { email: user.email },
            process.env.JWT_SECRET,
            { subject: user.id }
        )


        return {
            id: user.id,
            email: user.email,
            token: token
        }


    }
}

export { AuthUsuarioService }