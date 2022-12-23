import prismaClient from "../../prisma";

interface detailProductRequest {
  productID: string;
}

class DetailProductService {
  async execute({ productID }: detailProductRequest) {
    const product = await prismaClient.product.findUnique({
      where: {
        id: productID,
      },
      select: {
        id: true,
        name: true,
        description: true,
        price: true,
        off: true,
        size: true,
        color: true,
        // image: true,
        user: {
          select: {
            userData: {
              select: {
                name: true,
                phone: true,
              },
            },
          },
        },
        category: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return product;
  }
}

export { DetailProductService };
