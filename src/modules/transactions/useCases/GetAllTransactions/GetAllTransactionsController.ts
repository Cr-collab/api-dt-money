import { container } from "tsyringe";

import { Request, Response } from "express";

import { GetAllTransactionsUseCase } from "./GetAllTransactionsUseCase";

class GetAllTransactionsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getAllTransactionsUseCase = container.resolve(
      GetAllTransactionsUseCase
    );

    const transactionAll = await getAllTransactionsUseCase.execute();

    return response.status(200).json(transactionAll);
  }
}

export {GetAllTransactionsController}
