import styled from "styled-components";
import { maxWidth, textColor } from ".";

export const TransactionBoxStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    box-sizing: border-box;
    padding-top: 20px;

    width: 80%;
    max-width: 300px;
    ${() => maxWidth}
    min-height: 350px;
    border-radius: 5px;

    background-color: ${() => textColor};

    h1 {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        color: #868686;
        text-align: center;
        font-family: "Raleway";
        font-weight: 400; 
    }



`;

export const HeaderStyle = styled.header`
    display: flex;
    height: 100%;
    font-family: "Raleway";
    color: #868686;
    align-items: center;
    justify-content: center;
    width: 180px;
    text-align: center;
    h1 {
        color: ${textColor};
        margin-top:10%;
        font-family: "Raleway";
        font-size: 26px;
        font-weight: 700;
    }
`

export const TransactionButtons = styled.div`
    margin-top: 10px;
    gap: 6px;
    width: 80%;
    ${maxWidth}
    display: flex;
    justify-content: center;

    border: 0;
`;

export const TransactionText = styled.div`
    display: flex;
    width: 85%;
    justify-content: center;
    span {
        display: flex;
        justify-content: center;
        width:25%;
        font-family: "Raleway";
    }
    .price {
        display: flex;
        justify-content: right;
    }
    .date {
        color: #C6C6C6;
    }

    .description {
        justify-content: left;
        text-align: left;
        font-weight: 500;
    }

    .entrada {
        color: #03AC00;
    }

    .saida {
        color: #C70000;
    }
`;