import FormStyle, { Button, Input } from "../styles/FormStyle"
import AuthContainer from "./AuthContainer"

function SignInCredentials() {
    return (
        <FormStyle>
            <Input placeholder="E-mail" type="text" />
            <Input placeholder="Senha" type="text" />
            <Button type="submit"  value={'Entrar'}/>
        </FormStyle>
    )
}

const SignInForm = () => <AuthContainer> <SignInCredentials /> </AuthContainer>

export default SignInForm;