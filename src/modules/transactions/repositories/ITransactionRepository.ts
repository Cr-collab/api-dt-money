import { ICreateTransactionDTO } from "../dtos/ICreateTransactionDTO";
export interface Transaction {
  value: number;
  category: string;
  title: string;
  type: string;
}
interface ITransactionRepository {
  create(data: ICreateTransactionDTO): Promise<Transaction>;
  getTransaction(): Promise<Transaction[]>;
}

export { ITransactionRepository };
