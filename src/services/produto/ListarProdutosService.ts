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
        // image: true,
        usuario: {
          select: {
            dados: {
              select: {
                nome: true,
              },
            },
          },
        },
      },
    });

    return produto;
  }
}

export { ListarProdutosService };
