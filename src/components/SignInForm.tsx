import { Button, FormStyle, Input } from "@/styles";
import AuthContainer from "./AuthContainer"

function SignInCredentials() {
    return (
        <FormStyle>
            <Input placeholder="E-mail" type="text" />
            <Input placeholder="Senha" type="text" />
            <Button type="submit" value={'Entrar'} />
        </FormStyle>
    )
}

const SignInForm = () => <AuthContainer> <SignInCredentials /> </AuthContainer>

export { SignInForm };