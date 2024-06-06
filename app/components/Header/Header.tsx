"use client"

import Link from "next/link";
import { Button } from "..";
import { HeaderStyled } from "./Header.style";
import isUserLoggedIn from "@/app/helper/is-user-logged-in";
import { useState } from "react";

export const Header = () => {
    const [isUserLogged] = useState(isUserLoggedIn())
    
    return (
        <HeaderStyled className="bg-secondary">
            <div className="mx-8 py-4 flex justify-between items-center">
                <Link href="/">
                <h1 className="text-3xl font-bold tracking-tight text-white my-auto">
                    <span className="logo mr-1">EHAP</span> 
                    <span className="text-gray text-sm">by EcoInsight Solutions</span>
                </h1>
                </Link>
                { isUserLogged ? <Button variant="success" type="link" href="/dashboard">Dashboard</Button> :
                    <Button variant="success" type="link" href="/login">Experimente Agora</Button>
                }
            </div>
        </HeaderStyled>
    );
}