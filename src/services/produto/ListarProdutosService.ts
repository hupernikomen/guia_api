import prismaClient from "../../prisma";

class ListarProdutosService {
  async execute() {
    const produto = await prismaClient.produto.findMany({
      where: {
        usuario: {
          ativo: false,
          regiao: {
            nome: "Dirceu", // Logica de alteração de REGIAO no FrontEnd
          },
        },
      },
      select: {
        id: true,
        nome: true,
        preco: true,
        oferta: true,
        imagens: true,
        usuario: true
      },
    });

    return produto;
  }
}

export { ListarProdutosService };
