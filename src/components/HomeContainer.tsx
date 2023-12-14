import { TransactionsBox } from "@/components";
import { TransactionButtonBox } from "./TransactionButtonBox";
import { useNavigate } from "react-router-dom";
import { Container } from "@/styles";
import { useContext } from "react";
import { AuthContext } from "@/contexts";


export function HomeContainer() {
    const context = useContext(AuthContext);
    const navigate = useNavigate();
    const name = context?.user.name;
    function deleteToken() {
        localStorage.clear();
        navigate("/");

    }
    return (
        <Container>
            <div>
                <h1>Olá, {name}</h1>
                <h2 onClick={() => deleteToken()}>log out</h2>
            </div>

            <TransactionsBox />
            <TransactionButtonBox />
        </Container>
    );
}



