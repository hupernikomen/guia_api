import prismaClient from "../../prisma";

interface detailProductRequest {
  produtoID: string;
}

class DetalheProdutoService {
  async execute({ produtoID }: detailProductRequest) {
    const produto = await prismaClient.produto.findUnique({
      where: {
        id: produtoID,
      },
      select: {
        id: true,
        nome: true,
        descricao: true,
        preco: true,
        oferta: true,
        tamanho: true,
        cor: true,
        imagens: true,
        usuario: true,
        
        categoria: {
          select: {
            id: true,
            nome: true,
          },
        },
      },
    });

    return produto;
  }
}

export { DetalheProdutoService };
