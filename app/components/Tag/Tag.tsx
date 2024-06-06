"use client"

import { TagStyled } from "./Tag.style"

export const Tag = ({ children }: { children: React.ReactNode }) => {
    return (
        <TagStyled>
            {children}
        </TagStyled>
    )
}