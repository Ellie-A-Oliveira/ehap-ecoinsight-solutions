"use client"

import Link from "next/link";
import { Button } from "..";
import isUserLoggedIn from "@/app/helper/is-user-logged-in";
import { useContext, useEffect, useState } from "react";
import styles from "./Header.module.css";
import { useRouter } from "next/navigation";
import { UserContext } from "@/app/contexts/UserContext";

export const Header = () => {
    const [isUserLogged, setIsUserLogged] = useState(false)
    const context = useContext(UserContext)
    const router = useRouter()

    useEffect(() => {
        setIsUserLogged(context.userToken ? true : false)
    }, [context.userToken])

    const handleLogout = () => {
        context.setUserToken(null)
        router.push("/login")
    }
    
    return (
        <header className={`bg-secondary ${styles.header}`}>
            <div className="mx-8 py-4 flex justify-between items-center">
                <Link href={ isUserLogged ? "/dashboard" : "/"}>
                <h1 className="text-3xl font-bold tracking-tight text-white my-auto">
                    <span className={`mr-1 ${styles.logo}`}>EHAP</span> 
                    <span className="text-gray text-sm">by EcoInsight Solutions</span>
                </h1>
                </Link>
                { !isUserLogged && <Button variant="success" type="link" href="/login">Experimente Agora</Button> }
                { isUserLogged && <Button variant="secondary" onClick={handleLogout}>Logout</Button> }
            </div>
        </header>
    );
}