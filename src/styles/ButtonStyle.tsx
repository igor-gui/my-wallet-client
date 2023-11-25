import { buttonCollor, halfMaxWith, textColor } from "@/styles";
import styled from "styled-components";

export const ButtonStyle = styled.input`
    box-sizing: border-box;
    cursor: pointer;
    
    border-radius: 5px;
    min-height: 80px;
    height: 40%;
    background-color: ${() => buttonCollor};
    ${halfMaxWith}
    width: 50%;
    border-radius: 5px;
    border: 0;

    display: flex;

    font-family: "Raleway";
    font-size: 17px;
    font-weight: 700;
    text-align: center;

    color: ${() => textColor};
    
`;
