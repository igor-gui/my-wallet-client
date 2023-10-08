import { AuthContext } from "@/contexts";
import { TransactionsListGenerator } from "@/hooks";
import { getTransactions } from "@/services";
import { TransactionBoxStyle } from "@/styles";
import { ReactNode, useContext, useEffect, useState } from "react";

export function TransactionsBox() {
    const [transactions, setTransactions] = useState<ReactNode[] | null>(null);

    const context = useContext(AuthContext)


    useEffect(() => {
        if (context?.user.token) {
            getTransactions(context.user.token)
                .then(res => {
                    const transactionList = res.data;

                    const HTMLTransactionsList: ReactNode[] = TransactionsListGenerator(transactionList) || [];
                    setTransactions(HTMLTransactionsList);
                })
                .catch(err => alert(err.message));

        }

    }, [context?.user])


    return (
        <TransactionBoxStyle>
            {transactions && transactions.length > 0 ? transactions
                :
                <h2>Não há registros de <br/> 
                    entrada ou saída</h2>}
        </TransactionBoxStyle>
    )

}

