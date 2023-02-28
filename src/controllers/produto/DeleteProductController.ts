import { Request, Response } from 'express'

import { DeletarProdutoService } from '../../services/produto/DeletarProdutoService'

class DeletarProdutoController {
  async handle(req: Request, res: Response) {
    const produtoID = req.query.produtoID as string

    const deletarProduto = new DeletarProdutoService()

    await deletarProduto.execute({
      produtoID
    })

    return res.status(200).json({
      message: "Fique tranquilo! Já excluimos seu produto"
    })

  }
}

export { DeletarProdutoController }