import { Link } from "react-router-dom";
import styled from "styled-components";

export const AuthBox = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #630b86;
    width: 100%;
    min-height: 900px;

    h1{
    font-family: Saira Stencil One;
    font-size: 32px;
    font-weight: 400;
    text-align: left;
    margin-top: 8%;
    color: #FFFFFF;
    }
    
`;

export const StyledLink = styled(Link)`
    margin-top: 16px;
    font-family: 'Raleway';
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
    text-align: left;
    color: #FFFFFF;
    
`