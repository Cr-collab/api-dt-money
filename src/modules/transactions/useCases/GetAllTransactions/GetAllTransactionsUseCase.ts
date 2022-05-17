import { inject, injectable } from "tsyringe";
import { ITransactionRepository, Transaction } from "../../repositories/ITransactionRepository";

@injectable()
class GetAllTransactionsUseCase {
    constructor(
        @inject('PrismaTransactionRepository')
        private prismaTransactionRepository: ITransactionRepository
    ){}


    async execute(): Promise<Transaction[]>{

       const transactions = await this.prismaTransactionRepository.getTransaction()

       return transactions
    }

}

export {GetAllTransactionsUseCase} 