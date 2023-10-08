import { TransactionsBox } from "@/components";
import { HomeStyle, TransactionButtons } from "@/styles";


export function Home() {
    const name = localStorage.getItem("name");

    return (
        <HomeStyle>
            <div className="container">
                <h1>Olá, {name}</h1>
                <TransactionsBox />
                <TransactionButtons>
                    <button>Nova Entrada</button>
                    <button>Nova Saída</button>
                </TransactionButtons>
            </div>
        </HomeStyle>
    );
}