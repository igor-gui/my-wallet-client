import { User } from "./user.types";


export type AuthContextType = {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
};
