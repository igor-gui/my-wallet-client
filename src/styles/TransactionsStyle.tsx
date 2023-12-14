import styled from "styled-components";
import { maxWidth, textColor } from ".";

export const TransactionBoxStyle = styled.section`
    display: flex;
    flex-direction: column;
    gap: 5.5px;
    align-items: center;
    margin-top: 20px;
    box-sizing: border-box;
    padding-top: 20px;
    padding-bottom: 20px;

    overflow-y: scroll;
    width: 80%;
    max-width: 300px;
    ${() => maxWidth}
    min-height: 350px;
    height: 50vh;
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

     
    &::-webkit-scrollbar {
        width: 0.5em;
    }

    &::-webkit-scrollbar-thumb {
        background-color: transparent; 
    }

    &::-webkit-scrollbar-track {
        background-color: transparent; 
    }

`;

export const HeaderStyle = styled.header`
    display: flex;
    height: 100%;
    font-family: "Raleway";
    color: #868686;
    align-items: center;
    justify-content: center;
    width: 100%;
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