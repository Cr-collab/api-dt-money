import { Router } from "express";
import { CreateNewTransactionController } from "../../../modules/transactions/useCases/CreateNewTransaction/CreateNewTransactionController";
import { GetAllTransactionsController } from "../../../modules/transactions/useCases/GetAllTransactions/GetAllTransactionsController";


const transactionsRouter = Router();


const createNeeTransactionController = new CreateNewTransactionController()
const getAllTransactionsController = new GetAllTransactionsController();

transactionsRouter.post('/create/transaction', createNeeTransactionController.handle )
transactionsRouter.get('/get/transaction/all', getAllTransactionsController.handle)

export { transactionsRouter }