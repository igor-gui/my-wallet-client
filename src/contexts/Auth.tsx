import { AuthContextType, User } from "@/types";
import { ReactNode, createContext, useState } from "react";




export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthContextProvider({ children }: { children: ReactNode }): ReactNode {
    const [user, setUser] = useState<User>({ name: '', token: '' });

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}
