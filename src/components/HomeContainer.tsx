import { TransactionsBox } from "@/components";
import { TransactionButtonBox } from "./TransactionButtonBox";
import styled from "styled-components";


export function HomeContainer() {
    const name = localStorage.getItem("name");
    return (
        <div className="container">
            {/* <TopBoard> */}
            <h1>Olá, {name}</h1>
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

