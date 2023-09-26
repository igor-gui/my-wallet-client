import FormStyle, { Button, Input } from "../styles/FormStyle";
import AuthContainer from "./AuthContainer";


function SignUpCredentials() {
    return (
        <FormStyle>
            <Input type="text" placeholder="Nome" />
            <Input type="text" placeholder="E-mail" />
            <Input type="text" placeholder="Senha" />
            <Input type="text" placeholder="Confirmar Senha" />
            <Button type="submit" value={'Cadastrar'}/>
        </FormStyle>
    )
}

const SignUpForm = () => <AuthContainer> <SignUpCredentials /> </AuthContainer>

export default SignUpForm;