import { Request, Response } from "express";
import { CriarProdutoService } from "../../services/produto/CriarProdutoService";

class CriarProdutoController {
  async handle(req: Request, res: Response) {
    const criarProdutoService = new CriarProdutoService();

    const {
      nome,
      descricao,
      preco,
      oferta,
      tamanho,
      cor,
      categoriaID,
      usuarioID } =
      req.body;

      console.log(req.files, "req.files")
    if (!req.files) {
      throw new Error("Ops.. algo deu errado!");
    } else {
      const files = req.files;
      


      const produto = await criarProdutoService.execute({
        nome,
        descricao,
        preco,
        oferta,
        tamanho,
        cor,
        imagens:files,
        categoriaID,
        usuarioID,
      })

      return res.status(200).json(produto);


    }


  }
}

export { CriarProdutoController };
