import { TransactionParams } from "@/types/transaction.type";
import dayjs from "dayjs";
import { ReactNode } from "react";


export function TransactionsListGenerator(list: TransactionParams[]) : ReactNode[] {
    const HTMLTransactionsList : ReactNode[] = list.map(item => {
        return (
            <>
                <span>{dayjs(item.date).format("DD/MM/YYYY")}</span>
                <span>{item.description}</span>
                <span>{item.price}</span>
            </>
        )
    })

    return HTMLTransactionsList;
}
