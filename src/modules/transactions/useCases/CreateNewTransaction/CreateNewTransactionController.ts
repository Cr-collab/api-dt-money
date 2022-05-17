import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateNewTransactionUseCase } from "./CreateNewTransactionUseCase";

class CreateNewTransactionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { 
        amount,
        category,
        title, 
        type
     } = request.body;

     const createNewTransactionUseCase =   container.resolve(CreateNewTransactionUseCase);

    const newTransaction = await createNewTransactionUseCase.execute({
        amount,
        category,
        title,
        type
    })


    return response.status(201).json(newTransaction)
  }
}

export {CreateNewTransactionController}
