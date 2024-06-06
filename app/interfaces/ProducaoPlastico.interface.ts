import { EntidadeId } from "./Entidade.interface";

export interface ProducaoPlastico {
    ano: number;
    producaoAnualPlastico: number;
    particiEmissaoOceanos: number;
    particiReciclagemRegional: number;
    particiQueimaRegional: number;
    particiLixoMalGerido: number;
    particiAterrosRegional: number;
    lixoMalGeridoPerCapita: number;
    entidadeId: EntidadeId;
}