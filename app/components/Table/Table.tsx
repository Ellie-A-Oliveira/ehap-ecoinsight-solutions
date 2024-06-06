import camelCaseToHumanReadable from "@/app/helper/camelcase-to-human-readable"

interface Table {
    data: Object[]
    title: string
    classList?: string
    loadingData?: boolean
    omitProps?: string[]
}

export const Table = ({ data, title, classList, loadingData, omitProps }: Table) => {
    return <article className={classList}>
        <header>
            <h2 className="text-5xl font-bold tracking-tight text-white">{title}</h2>
        </header>
        <section className="mt-4">
            {
                loadingData ? <p className="text-white">Carregando...</p>
                :
                !loadingData && data.length === 0 ? 
                <p className="text-white">Nenhum dado a exibir.</p>
                :
                <table className="min-w-full border-collapse block md:table text-white">
                    <thead className="block md:table-header-group bg-primary">
                        <tr className="border border-gray md:border-none block md:table-row">
                            {Object.keys(data[0]).map((key, index) =>
                                !omitProps?.includes(key) &&
                                <th className="bg-gray-200 p-2 text-gray-600 text-left block md:table-cell" key={index}>{camelCaseToHumanReadable(key)}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody className="block md:table-row-group">
                        {data.map((row, index) => (
                            <tr className="bg-secondary border border-gray md:border-none block md:table-row" key={index}>
                                {Object.values(row).map((value, index) =>
                                    !omitProps?.includes(Object.keys(row)[index]) &&
                                    <td className="p-2 text-gray-600 text-left block md:table-cell" key={index}>{value}</td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </section>
    </article>
}