import styled from "styled-components";
import { buttonCollor, halfMaxWith, maxWidth, textColor } from ".";

export const TransactionBoxStyle = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 20px;

    width: 80%;
    max-width: 300px;
    ${() => maxWidth}
    min-height: 350px;
    border-radius: 5px;

    background-color: ${() => textColor};
`;

export const TransactionButtons = styled.div`
    margin-top: 10px;
    gap: 6px;
    width: 80%;
    ${maxWidth}
    display: flex;
    justify-content: center;
    button {
        box-sizing: border-box;

        padding-left: 4%;
        padding-bottom: 4%;
        
        border-radius: 5px;
        min-height: 80px;
        height: 40%;
        background-color: ${() => buttonCollor};
        ${halfMaxWith}
        width: 50%;
        border-radius: 5px;
        border: 0;

        display: flex;
        align-items: flex-end;

        font-family: "Raleway";
        font-size: 17px;
        font-weight: 700;
        text-align: left;

        color: ${() => textColor};
        
}

    border: 0;
`;