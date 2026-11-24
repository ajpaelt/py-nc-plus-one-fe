import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

import { type UserState, type UserContextValue } from "../types";

import { fetchCurrentUser, login, register } from "../api/auth";
import { clearToken, writeToken, readToken } from "../token/tokenStorage";

const UserContext = createContext<UserContextValue | undefined>(undefined);

export function useUserContext() {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
}


export function UserProvider({ children }: {children: ReactNode}) {
    const [userState, setUserState] = useState<UserState>({status: "loading"})

    async function loginUser(email: string, password: string): Promise<void> {
        const token = await login(email, password);
        const user = await fetchCurrentUser(token.token);

        writeToken(token.token);
        setUserState({status: "success", user});
    };
    async function registerUser(email:string, password: string): Promise<void> {
        await register(email, password);
        loginUser(email, password);
    }
    async function logoutUser(): Promise<void> {
        clearToken();
        setUserState({status: "anonymous"});
    };


    useEffect(() => {
        const checkToken = async () => {
            const token = readToken()
            if (token) {
                const user = await fetchCurrentUser(token)
                setUserState({ status: "success", user})
            } else {
            setUserState({ status: "anonymous"})}
        }
        checkToken()
    }, [])

    return (
        <UserContext.Provider value={{userState, loginUser, registerUser, logoutUser}}>{children}</UserContext.Provider>
    )

}