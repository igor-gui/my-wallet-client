import { AuthContextType, User } from "@/types";
import { ReactNode, createContext, useState } from "react";




export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthContextProvider({ children }: { children: ReactNode }): ReactNode {

    const name = localStorage.getItem("name");
    const token = localStorage.getItem("token");
    
    const [user, setUser] = useState<User>({ name, token });

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}
