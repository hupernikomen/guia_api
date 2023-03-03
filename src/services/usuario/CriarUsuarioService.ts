import prismaClient from '../../prisma';
import { hash } from 'bcryptjs'

interface userRequest {
    email: string,
    senha: string,
}

class CriarUsuarioService {
    async execute({
        email,
        senha,
    }: userRequest) {

        if (!email) {
            throw new Error("Email Incorreto");
        }

        const emailExiste = await prismaClient.usuario.findFirst({
            where: {
                email
            }
        })

        if (emailExiste) {
            throw new Error("Usuario já cadastrado!");
        }

        const passwordCripto = await hash(senha, 8)

        const usuario = await prismaClient.usuario.create({
            data: {
                email,
                senha: passwordCripto,
            }
            
        })

        return usuario

    }
}

export { CriarUsuarioService }