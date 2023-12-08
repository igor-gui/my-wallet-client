import { Header } from "@/components";
import { postTransactions } from "@/services";
import { Button, FormStyle, Input } from "@/styles";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export function NewTransaction() {
    const [form, setForm] = useState({ price: 0, description: '' });
    const { type } = useParams<{ type: string }>();
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    if (!token) {
        navigate('/sign-in');
    }

    function handleForm(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        try {
            await postTransactions({ ...form, type, token });

            navigate('/home');
        } catch (err) {
            console.error(err)
        }
    }


    return (
        <div>
            <Header>Nova {type}</Header>
            <FormStyle onSubmit={handleSubmit}>
                <Input onChange={(e) => handleForm(e)} name="price" placeholder="Valor" type="number" />
                <Input onChange={(e) => handleForm(e)} name="description" placeholder="Descrição" type="text" />
                <Button type="submit" value={`Salvar ${type}`} />
            </FormStyle>
        </div>
    );
}