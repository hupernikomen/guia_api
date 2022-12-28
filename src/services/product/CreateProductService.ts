import prismaClient from "../../prisma";

interface ProductRequest {
  name: string;
  description: string;
  price: string;
  off: string;
  size: string;
  color: string;
  files: object,
  categoryID: string;
  userID: string;
}

class CreateProductService {
  async execute({
    name,
    description,
    price,
    off,
    size,
    color,
    files,
    categoryID,
    userID,
  }: ProductRequest) {
    try {
      
      const product = await prismaClient.product.create({
        data: {
          name,
          description,
          price,
          off,
          size,
          color,
          files,
          categoryID,
          userID,
        },
      });
      return product;
    } catch (error) {
      console.error('Erro no Service API',error)
    }

  }
}

export { CreateProductService };
