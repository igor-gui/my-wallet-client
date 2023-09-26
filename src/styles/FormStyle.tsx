import styled from "styled-components";

const FormStyle = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    width: 100%;

    justify-content: center;
    align-items: center;
    gap: 13px;

`;

export const Input = styled.input`
    width: 326px;
    height: 58px;
    border-radius: 5px;
    border: 0;
    width: 80%;
    box-sizing: border-box;
    max-width: 450px;

    padding-left: 10px;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 400;
    text-align: left;


`

export const Button = styled.input`
    margin-top: 10px;
    width: 74%;
    height: 46px;
    border-radius: 5px;
    background-color: #A328D6;
    color: #FFFFFF;

    max-width: 298px;

    font-family: 'Raleway';
    font-size: 20px;
    font-weight: 700;

    border: 0;

`

export default FormStyle;