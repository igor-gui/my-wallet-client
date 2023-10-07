
export type CreateTransactionParams = {
    description: string;
    type: string;
    price: number;
    token: string;
}

export type TransactionParams = Omit<CreateTransactionParams, "token"> & { date: Date }