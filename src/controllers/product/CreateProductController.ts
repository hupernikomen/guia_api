import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
  async handle(req: Request, res: Response) {
    const createProductService = new CreateProductService();

    const { name, description, price, off, size, color, categoryID, userID } =
      req.body;

    // if (!req.files) {
    //   throw new Error("Ops.. algo deu errado!");
    // } else {
    //   const image = req.files;

    await createProductService.execute({
      name,
      description,
      price,
      off,
      size,
      color,
      categoryID,
      userID,
    });

    return res
      .status(200)
      .json({ mensagem: `Que legal! Seu produto já foi criado` });
    // }
  }
}

export { CreateProductController };
