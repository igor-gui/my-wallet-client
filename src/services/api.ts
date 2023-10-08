// import { TransactionsListGenerator } from "@/hooks";
import { CreateSessionParams, CreateUserParams } from "@/types";
import { CreateTransactionParams } from "@/types/transaction.type";
import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL

const api = axios.create({ baseURL })

export function signUp(data: CreateUserParams) {
    const promise = api.post('/cadastro', data);
    return promise;
}

export function signIn(data: CreateSessionParams) {
    const promise = api.post('/login', data);
    return promise;
}

export async function postTransactions(data: CreateTransactionParams) {

    const { token, type, description, price } = data;
    const config = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }

    const promise = await api.post(`/nova-transacao/${type}`, { description, price }, config);
    return promise;


}

export async function getTransactions(token: string) {
    const config = {
        headers: {
            authorization: `Bearer ${token}`,
        }
    }
    const promise = await api.get('/transactions', config);
    return promise;

}

