import { EntidadeId } from "./Entidade.interface";

export interface PoluicaoCidade {
    cidade: string;
    regiao: string;
    ano: number;
    qualidadeAr: number;
    poluicaoAgua: number;
    entidadeId: EntidadeId;
}
