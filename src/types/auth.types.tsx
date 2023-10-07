import { CreateSessionParams, User } from "./user.types";


export type AuthContextType = {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
};

export type SessionFormState = {
    form: CreateSessionParams;
    setForm: React.Dispatch<React.SetStateAction<CreateSessionParams>>;
}