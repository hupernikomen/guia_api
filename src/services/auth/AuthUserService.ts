import prismaClient from '../../prisma';
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface AuthRequest {
    email: string,
    senha: string
}

class AuthUsuarioService {
    async execute({
        email,
        senha
    }: AuthRequest) {

        const usuario = await prismaClient.usuario.findFirst({
            where: {
                email:email
            }
            
        })

        if (!usuario) {
            throw new Error("Usuario ou Senha Incorreta");
            
        }

        const comparePassword = await compare(senha, usuario.senha)
        if (!comparePassword) {
            throw new Error("Usuario ou Senha Incorreta");

        }
        

        const token = sign(
            { email: usuario.email },
            process.env.JWT_SECRET,
            { subject: usuario.id }
        )


        return {
            id: usuario.id,
            email: usuario.email,
            token: token
        }


    }
}

export { AuthUsuarioService }