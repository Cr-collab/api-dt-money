import { container } from "tsyringe";

import { PrismaTransactionRepository } from "../../modules/transactions/infra/prisma/repositories/PrismaTransactionRepository";
import { ITransactionRepository } from "../../modules/transactions/repositories/ITransactionRepository";


container.registerSingleton<ITransactionRepository>(
    'PrismaTransactionRepository',
     PrismaTransactionRepository
)