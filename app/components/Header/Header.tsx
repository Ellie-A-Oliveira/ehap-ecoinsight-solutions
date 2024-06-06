"use client"

import Link from "next/link";
import { Button } from "..";
import { HeaderStyled } from "./Header.style";

export const Header = () => {
    return (
        <HeaderStyled className="bg-secondary">
            <div className="mx-8 py-4 flex justify-between items-center">
                <Link href="/">
                <h1 className="text-3xl font-bold tracking-tight text-white my-auto">
                    <span className="logo mr-1">EHAP</span> 
                    <span className="text-gray text-sm">by EcoInsight Solutions</span>
                </h1>
                </Link>
                <Button variant="success" type="link" href="/login">Experimente Agora</Button>
            </div>
        </HeaderStyled>
    );
}