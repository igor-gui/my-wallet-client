import { getTransactions } from "@/services";
import { TransactionBoxStyle, HeaderStyle, TransactionText } from "@/styles";
import { TransactionParams } from "@/types";
import dayjs from "dayjs";
import { ReactNode, useEffect, useState } from "react";

export function TransactionsBox() {
    const [transactions, setTransactions] = useState<ReactNode[] | null>(null);

    const token = localStorage.getItem("token")


    useEffect(() => {
        if (token && token != 'undefined') {
            getTransactions(token)
                .then(res => {
                    const transactionList = res.data;

                    const HTMLTransactionsList: ReactNode[] = transactionList.map((item: TransactionParams, i: number) => {

                        function capitalizeFirstLetter(inputString: string): string {
                            return inputString.charAt(0).toUpperCase() + inputString.slice(1);
                        }
                        return (
                            <TransactionText key={i}>
                                <span className="date">{dayjs(item.date).format("DD/MM")}</span>
                                <span className="description">{capitalizeFirstLetter(item.description)}</span>
                                <span className={`price ${item.type}`}>{Number(item.price)}</span>
                            </TransactionText>
                        )
                    })
                    setTransactions(HTMLTransactionsList);
                })
                .catch(err => alert(err.message));

        }

    }, [])


    return (
        <TransactionBoxStyle>
            {transactions && transactions.length > 0 ? transactions
                :
                <HeaderStyle>Não há registros de
                    entrada ou saída</HeaderStyle>}
        </TransactionBoxStyle>
    )

}

