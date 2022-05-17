export  interface ICreateTransactionDTO {
    title: string;
    amount: number;
    type: 'deposit' | 'withdraw'
    category: string;
}