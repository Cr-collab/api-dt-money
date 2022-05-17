import { prisma } from "../../../../../shared/infra/prisma/prisma";
import { ICreateTransactionDTO } from "../../../dtos/ICreateTransactionDTO";
import { ITransactionRepository, Transaction } from "../../../repositories/ITransactionRepository";



class PrismaTransactionRepository implements  ITransactionRepository{
    
    async getTransaction(): Promise<Transaction[]> {
      
        const transactionsAll = await prisma.transactions.findMany()

       return transactionsAll
    }

    async create(data: ICreateTransactionDTO): Promise<Transaction> {
       const {amount : value, category, title,type  }  = data;

       const  newTransaction = prisma.transactions.create({
           data: {
               category,
               title,
               type,
               value,   
           }
       })

       return newTransaction
    }
}


export {PrismaTransactionRepository}