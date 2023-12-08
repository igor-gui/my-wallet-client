import { TransactionsBox } from "@/components";
import { TransactionButtonBox } from "./TransactionButtonBox";
import { useNavigate } from "react-router-dom";


export function HomeContainer() {
    const name = localStorage.getItem("name");
    const navigate = useNavigate()
    function deleteToken() {
       localStorage.removeItem("token");
       localStorage.removeItem("name");
       navigate("/");

    }
    return (
        <div className="container">
            {/* <TopBoard> */}
            <div>
            <h1>Olá, {name}</h1>
            <h2 onClick={() => deleteToken()}>log out</h2>
            </div>
            {/* <h1>log out</h1> */}
            {/* </TopBoard> */}
            <TransactionsBox />
            <TransactionButtonBox />
        </div>
    );
}

// const TopBoard = styled.div`
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     width: 60%;
// `

