import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
  async handle(req: Request, res: Response) {
    const createProductService = new CreateProductService();

    // const userID = req.query.userID as string

    const { name, description, price, off, size, color, categoryID, userID } =
      req.body;

    if (!req.files) {
      throw new Error("Ops.. algo deu errado!");
    } else {
      const files = req.files;

        const product = await createProductService.execute({
          name,
          description,
          price,
          off,
          size,
          color,
          files,
          categoryID,
          userID,
        })

            return res.status(200).json(product);


    }


  }
}

export { CreateProductController };
