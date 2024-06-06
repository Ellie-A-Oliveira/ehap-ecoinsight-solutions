"use client"

import styled from "styled-components";

export const TagStyled = styled.li`
    width: fit-content;
    background-color: #fff;
    border-radius: 8px;
    padding: 0.75rem 1rem;

    &::before {
        content: "•";
        margin-right: 0.5rem;
    }
`
