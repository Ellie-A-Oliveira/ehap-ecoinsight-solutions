"use client"

import { createContext, useEffect, useState } from "react";

interface UserContextProps {
    userToken: string | null
    setUserToken: React.Dispatch<React.SetStateAction<string | null>>
}

export const UserContext = createContext<UserContextProps>({
    userToken: null,
    setUserToken: () => {},
})

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [ userToken, setUserToken ] = useState<string | null>(null)

    useEffect(() => {
        if (userToken) localStorage.setItem("token", userToken)
        else localStorage.removeItem("token")
    }, [userToken])
    return (
        <UserContext.Provider value={{ userToken, setUserToken }}>
            {children}
        </UserContext.Provider>
    )
}