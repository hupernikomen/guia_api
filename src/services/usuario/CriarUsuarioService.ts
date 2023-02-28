import prismaClient from '../../prisma';
import { hash } from 'bcryptjs'

interface userRequest {
    email: string,
    senha: string,
    regiaoID: string
}

class CriarUsuarioService {
    async execute({
        email,
        senha,
        regiaoID

    }: userRequest) {

        if (!email) {
            throw new Error("Email Incorreto");
        }
        if (!regiaoID) {
            throw new Error("É necessrio selecionar região");
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
                regiaoID
            }
            
        })

        await prismaClient.dados.create({
            data: {
                usuarioID: usuario.id
            }
        })

        await prismaClient.formato.create({
            data: {
                usuarioID: usuario.id
            }
        })

        await prismaClient.localizacao.create({
            data: {
                usuarioID: usuario.id
            }
        })



        return usuario

    }
}

export { CriarUsuarioService }