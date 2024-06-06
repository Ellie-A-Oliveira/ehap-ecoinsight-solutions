"use client"

import { useEffect, useState } from "react"
import { AuthGuard } from "../components"
import { ProducaoPlastico } from "../interfaces/ProducaoPlastico.interface"
import { PoluicaoCidade } from "../interfaces/PoluicaoCidade.interface"
import camelCaseToHumanReadable from "../helper/camelcase-to-human-readable"
import { producaoPlasticoDataMock } from "../mocks/ProducaoPlastico.mock"

export default function Solucao() {
    const [dadosProducaoPlastico, setDadosProducaoPlastico] = useState<ProducaoPlastico[]>([])
    const [dadosPoluicaoCidade, setDadosPoluicaoCidade] = useState<PoluicaoCidade[]>([])

    useEffect(() => {
        // TODO - consumir a API e popular as tabelas
        setDadosProducaoPlastico(
            producaoPlasticoDataMock
        )
    }, [])
    // TODO - pegar dados da API e popular as tabelas

    return (
        <AuthGuard>
            <main className="lg:mx-16 xl:mx-48 mt-20">
                <article className="h-screen">
                    <header>
                        <h2 className="text-5xl font-bold tracking-tight text-white">Produção de Plástico</h2>
                    </header>
                    <section className="mt-4">
                        <table className="min-w-full border-collapse block md:table text-white">
                            <thead className="block md:table-header-group bg-primary">
                                <tr className="border border-gray md:border-none block md:table-row">
                                    {dadosProducaoPlastico.length > 0 &&
                                        Object.keys(dadosProducaoPlastico[0]).map((key, index) =>
                                            <th className="bg-gray-200 p-2 text-gray-600 text-left block md:table-cell" key={index}>{camelCaseToHumanReadable(key)}</th>
                                        )}
                                </tr>
                            </thead>
                            <tbody className="block md:table-row-group">
                                {dadosProducaoPlastico.map((producaoPlastico, index) => (
                                    <tr className="bg-secondary border border-gray md:border-none block md:table-row" key={index}>
                                        {Object.values(producaoPlastico).map((value, index) =>
                                            <td className="p-2 text-gray-600 text-left block md:table-cell" key={index}>{value}</td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                </article>
            </main>
        </AuthGuard>
    )
}