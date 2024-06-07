"use client"

import { useEffect, useState } from "react"
import { AuthGuard, Table } from "../components"
import { ProducaoPlastico } from "../interfaces/ProducaoPlastico.interface"
import { PoluicaoCidade } from "../interfaces/PoluicaoCidade.interface"
import { producaoPlasticoDataMock } from "../mocks/ProducaoPlastico.mock"
import { poluicaoCidadeDataMock } from "../mocks/PoluicaoCidade.mock"

export default function Solucao() {
    const [dadosProducaoPlastico, setDadosProducaoPlastico] = useState<ProducaoPlastico[]>([])
    const [dadosPoluicaoCidade, setDadosPoluicaoCidade] = useState<PoluicaoCidade[]>([])

    const [loadingProducaoPlastico, setLoadingProducaoPlastico] = useState(true)
    const [loadingPoluicaoCidade, setLoadingPoluicaoCidade] = useState(true)

    async function getProducaoPlastico() {

        const response = await fetch("http://localhost:8085/producao-plastico", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        setDadosProducaoPlastico(
            await response.json()
        )
        setLoadingProducaoPlastico(false)

    }
    useEffect(() => {
        // TODO - consumir a API e popular as tabelas
        getProducaoPlastico()
        getPoluicaoCidade()
    }, [])

    async function getPoluicaoCidade() {

        const response = await fetch("http://localhost:8085/poluicao-cidade", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        setDadosPoluicaoCidade(
            await response.json()
        )
        setLoadingPoluicaoCidade(false)

    }

    return (
        <AuthGuard>
            <main className="lg:mx-16 xl:mx-48 mt-20 mb-20">
                <Table
                    omitProps={["entidadeId"]}
                    data={dadosProducaoPlastico}
                    title="Produção Anual de Plastico"
                    loadingData={loadingProducaoPlastico} />
                <Table
                    classList="mt-8"
                    omitProps={["entidadeId"]}
                    data={dadosPoluicaoCidade}
                    title="Poluição por Cidade"
                    loadingData={loadingPoluicaoCidade} />
            </main>
        </AuthGuard>
    )
}