import prismaClient from "../../prisma";

interface ProductRequest {
  categoriaID: string;
}

class ListarPorCategoriaService {
  async execute({ categoriaID }: ProductRequest) {
    const categoria = await prismaClient.produto.findMany({
      where: {
        categoriaID,
        usuario: {
          ativo: true,
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

    return categoria;
  }
}

export { ListarPorCategoriaService };
