import { Button, FormStyle, Input } from "@/styles";
import AuthContainer from "./AuthContainer"
import { FormEvent, ReactNode, useContext, useEffect, useState } from "react";
import { handleForm, signIn } from "@/services";
import { AuthContext } from "@/contexts";
import { useNavigate } from "react-router-dom";
import { CreateSessionParams } from "@/types";

function SignInCredentials(): ReactNode {
    const [form, setForm] = useState({ email: '', password: '' })
    
    const formState = { form, setForm };
    const context = useContext(AuthContext);
    const navigate = useNavigate()

    useEffect(()=> {
        
        const token = localStorage.getItem("token")
        if(token){
            navigate('/home');
        }

    }, [])

    async function handleSubmit(e: FormEvent<HTMLFormElement>, form: CreateSessionParams) {
        e.preventDefault();
    
        try {
            const { data } = await signIn(form);
            localStorage.setItem("name", data.name);
            localStorage.setItem("token", data.token);
            context?.setUser(data)
            navigate('/home');
        } catch (error) {
            console.log(error)
        }
    
    }

    return (
        <FormStyle onSubmit={(e) => handleSubmit(e, form)}>
            <Input name="email" onChange={(e) => handleForm(e, formState)} placeholder="E-mail" type="text" />
            <Input name="password" onChange={(e) => handleForm(e, formState)} placeholder="Senha" type="password" />
            <Button type="submit" value={'Entrar'} />
        </FormStyle>
    )
}

const SignInForm = () => <AuthContainer> <SignInCredentials /> </AuthContainer>

export { SignInForm };