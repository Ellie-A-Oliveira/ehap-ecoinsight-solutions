"use client"

import styled from "styled-components";

export const ButtonStyled = styled.button<{
    variant?: "primary" | "secondary" | "success"
}>`
    color: #fff;
    border: none;
    font-weight: bold;
    border-radius: 8px;
    padding: 0.75rem 1rem;
    cursor: pointer;

    ${({ variant }) => variant === "primary" && `
        background-color: #3195CA;
    `}

    ${({ variant }) => variant === "secondary" && `
        background-color: #111111;
    `}

    ${({ variant }) => variant === "success" && `
        background-color: #296938;
    `}
`