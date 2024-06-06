"use client"

import { AuthGuard } from "../components"

export default function Solucao() {
    return (
        <AuthGuard>
        <div>
            <h2>Solução</h2>
        </div>
        </AuthGuard>
    )
}