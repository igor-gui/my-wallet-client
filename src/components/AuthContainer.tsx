import { useLocation } from "react-router-dom";
import { ReactNode } from "react";
import { AuthBox, StyledLink } from "../styles/AuthStyle";


export default function AuthContainer({ children }: { children: ReactNode }) {
    const { pathname } = useLocation();
    const isSignUp = pathname === '/sign-up';


    const linkRoute = isSignUp ? '/' : '/sign-up'
    const linkText = isSignUp ?  'Já tem uma conta? Entre agora!' : 'Primeira vez? Cadastre-se!'


    return (
        <AuthBox>
            <h1>My Wallet</h1>
            {children}
            <StyledLink to={linkRoute}>{linkText}</StyledLink>
        </AuthBox>
    )
};

