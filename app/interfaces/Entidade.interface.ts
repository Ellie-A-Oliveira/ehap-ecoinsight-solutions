import { Named } from "../types/Named.type";

export interface Entidade {
    entidadeId: EntidadeId;
    nome?: string;
    codigo?: string;
    grupo?: string;
}

export type EntidadeId = Named<number, "EntidadeId">