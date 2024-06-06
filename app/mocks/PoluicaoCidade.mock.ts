import { EntidadeId } from "../interfaces/Entidade.interface";
import { PoluicaoCidade } from "../interfaces/PoluicaoCidade.interface";

export const poluicaoCidadeDataMock: PoluicaoCidade[] = [
    {
        cidade: "New York City",
        regiao: "New York",
        ano: 2019,
        qualidadeAr: 46.816,
        poluicaoAgua: 49.505,
        entidadeId: 1 as EntidadeId
    },
    {
        cidade: "Ahmedabad",
        regiao: "Gujarat",
        ano: 2019,
        qualidadeAr: 32.963,
        poluicaoAgua: 66.992,
        entidadeId: 2 as EntidadeId
    },
    {
        cidade: "Nagoya",
        regiao: "Aichi Prefecture",
        ano: 2019,
        qualidadeAr: 76.25,
        poluicaoAgua: 37.5,
        entidadeId: 3 as EntidadeId
    },
    {
        cidade: "Kaufbeuren",
        regiao: "Bavaria",
        ano: 2019,
        qualidadeAr: 100,
        poluicaoAgua: 50,
        entidadeId: 4 as EntidadeId
    },
    {
        cidade: "Ballarat",
        regiao: "Victoria",
        ano: 2019,
        qualidadeAr: 89.063,
        poluicaoAgua: 23.333,
        entidadeId: 5 as EntidadeId
    },
    {
        cidade: "Barcelona",
        regiao: "Catalonia",
        ano: 2019,
        qualidadeAr: 35.497,
        poluicaoAgua: 51.316,
        entidadeId: 6 as EntidadeId
    },
    {
        cidade: "Suwon",
        regiao: "Gyeonggi Province",
        ano: 2019,
        qualidadeAr: 28.125,
        poluicaoAgua: 6.25,
        entidadeId: 7 as EntidadeId
    }
];
