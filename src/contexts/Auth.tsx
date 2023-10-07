import { AuthContextType, User } from "@/types";
import { ReactNode, createContext, useState } from "react";




const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthContextProvider({ children }: { children: ReactNode }): ReactNode {
    const [user, setUser] = useState<User>({ name: '', token: '' });

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}
