import { inject, injectable } from "tsyringe";
import { ITransactionRepository, Transaction } from "../../repositories/ITransactionRepository";
 
interface IRequest {
    title: string;
    amount: number;
    type: 'deposit' | 'withdraw'
    category: string;
}

@injectable()
class CreateNewTransactionUseCase {

  constructor(
      @inject("PrismaTransactionRepository")
      private prismaTransactionRepository: ITransactionRepository
  ){}

  async execute({
      amount,
      category,
      title,
      type
  }: IRequest): Promise<Transaction> {

    if(!amount) {
        throw new Error('Amount is required');
    }  


    if(!category) {
        throw new Error('Category is required');
    }

    if(!title) {
        throw new Error('Title is required');
    }

    if(!type) {
        throw new Error('Type is required');
    }

    if(!category) {
        throw new Error('Category is required');
    }




      const newTransaction = await this.prismaTransactionRepository.create({
          amount,
          category,
          title,
          type
      })

      return newTransaction
  }
}


export {CreateNewTransactionUseCase}
