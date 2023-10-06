import { CreateSessionParams, CreateUserParams } from "@/types";
import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL

const api = axios.create({ baseURL })

export function signUp(data: CreateUserParams){
    const promise = api.post('/cadastro', data);
    return promise;
}

export function signIn(data: CreateSessionParams){
    const promise = api.post('/login', data);
    return promise;
}

