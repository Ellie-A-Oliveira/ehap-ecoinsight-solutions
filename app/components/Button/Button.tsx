import Link from "next/link";
import { ButtonStyled } from "./Button.style";
import { MouseEventHandler } from "react";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "success";
    type?: "submit" | "link" | "button";
    href?: string;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, variant, type, href, className, onClick }: ButtonProps) => {
    return (
        <>
        { type === "link" ?
            <Link href={href ?? "#"}><ButtonStyled className={className} variant={variant ?? "primary"}>{children}</ButtonStyled></Link> :
            <ButtonStyled onClick={onClick} className={className} type={type} variant={variant ?? "primary"}>{children}</ButtonStyled>
        }
        </>
    )
}