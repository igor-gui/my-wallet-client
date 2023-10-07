import { TransactionsBox } from "@/components";
import { HomeStyle, TransactionButtons } from "@/styles";


export function Home() {


    return (
        <HomeStyle>
            <div className="container">
                <h1>Olá, fulano!</h1>
                <TransactionsBox />
                <TransactionButtons>
                    <button>Nova Entrada</button>
                    <button>Nova Saída</button>
                </TransactionButtons>
            </div>
        </HomeStyle>
    );
}