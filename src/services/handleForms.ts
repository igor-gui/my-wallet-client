import { SessionFormState } from "@/types";
import { ChangeEvent } from "react";



export function handleForm(e: ChangeEvent<HTMLInputElement>, formState: SessionFormState) {
    const { form, setForm } = formState;
    const { name, value } = e.target;
    console.log(form)
    setForm({ ...form, [name]: value })

}
