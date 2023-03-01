import prismaClient from "../../prisma";

interface ProductRequest {
  nome: string;
  descricao: string;
  preco: string;
  oferta: string;
  tamanho: string;
  cor: string;
  imagens: object,
  categoriaID: string;
  usuarioID: string;
}

class CriarProdutoService {
  async execute({
    nome,
    descricao,
    preco,
    oferta,
    tamanho,
    cor,
    imagens,
    categoriaID,
    usuarioID,
  }: ProductRequest) {
    try {

      const produto = await prismaClient.produto.create({
        data: {
          nome,
          descricao,
          preco,
          oferta,
          tamanho,
          cor,
          imagens,
          categoriaID,
          usuarioID,
        },
      });
      return produto;

    } catch (error) {
      console.error('Erro no Service API', error)
    }

  }
}

export { CriarProdutoService };
