import { Request, Response } from 'express'
import { AtualizarLocalizacaoService } from '../../services/localizacao/AtualizarLocalizacaoService'

class AtualizarLocalizacaoController {
    async handle(req: Request, res: Response) {
        const usuarioID = req.query.usuarioID as string
        const {
            endereco,
            bairro,
            cidade,
            estado,
            latlng,
        } = req.body

        const atualizarLocalizacaoService = new AtualizarLocalizacaoService();


        const localizacao = await atualizarLocalizacaoService.execute({
            usuarioID,
            endereco,
            bairro,
            cidade,
            estado,
            latlng,

        })

        return res.json(localizacao)
    }
}

export { AtualizarLocalizacaoController  }