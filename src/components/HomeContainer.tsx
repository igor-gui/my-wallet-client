import { TransactionsBox } from "@/components";
import { TransactionButtonBox } from "./TransactionButtonBox";


export function HomeContainer() {
    const name = localStorage.getItem("name");
    return (
        <div className="container">
            <div>
            <h1>Olá, {name}</h1>
            </div>
            <TransactionsBox />
            <TransactionButtonBox />
        </div>
    );
}

