export type CreateTransactionParams = {
    description: string;
    type: string | undefined;
    price: number;
    token: string | null;
}



export type TransactionParams = Omit<CreateTransactionParams, "token"> & { date: Date, _id: string }