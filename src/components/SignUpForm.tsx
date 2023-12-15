import { ChangeEvent, useEffect, useState } from "react";
import AuthContainer from "./AuthContainer";
import { signUp } from "@/services/api";
import { useNavigate } from "react-router-dom";
import { Button, FormStyle, Input } from "@/styles";


function SignUpCredentials() {

    const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' })

    const navigate = useNavigate()

    useEffect(()=> {
        
        const token = localStorage.getItem("token")
        if(token){
            navigate('/home');
        }

    }, [])

    function handleForm(e: ChangeEvent<HTMLInputElement>) {
        const { value, name } = e.target;
        setForm({ ...form, [name]: value })

    }

    function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        const { name, email, password, confirmPassword } = form;
        if (confirmPassword !== password) return alert("As senhas não coincidem");

        signUp({ name, email, password })
            .then((res) => {
                console.log(res.data)
                navigate('/');
            })
            .catch((err) => {
                if(err.status === 409) return alert("E-mail já cadastrado!");
                alert(err.message);
            })
    }


    return (
        <FormStyle onSubmit={handleSubmit}>
            <Input onChange={(e) => handleForm(e)} name='name' type="text" placeholder="Nome" />
            <Input onChange={(e) => handleForm(e)} name='email' type="text" placeholder="E-mail" />
            <Input onChange={(e) => handleForm(e)} type='password' name='password' placeholder="Senha" />
            <Input onChange={(e) => handleForm(e)} type='password' name='confirmPassword' placeholder="Confirmar Senha" />
            <Button type="submit" value={'Cadastrar'} />
        </FormStyle>
    )
}

const SignUpForm = () => <AuthContainer> <SignUpCredentials /> </AuthContainer>

export { SignUpForm };