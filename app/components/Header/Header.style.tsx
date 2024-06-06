"use client"

import styled from "styled-components";

export const HeaderStyled = styled.header`
    position: sticky;
    top: 0;
    z-index: 10;
    margin-bottom: -4rem;

    .logo {
        -webkit-background-clip: text;
        color: transparent;
        background-image: linear-gradient(75deg, #3195CA, #296938);
    }
`