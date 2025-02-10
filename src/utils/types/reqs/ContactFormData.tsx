export interface ContactFormData {
    nome: string;
    empresa: string;
    email: string;
    telefone: string;
}

export interface ContactReq {
    mensagem: string;
}

export interface WorkWithUsReq extends ContactFormData {
    curriculo?: File;
}
