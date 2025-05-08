export class PsicologoModel {
    public idProfissional: number;
    public nome: string;
    public cpf: string;
    public crp: string;
    public email: string;

    constructor(
        idProfissional: number,
        nome: string,
        cpf: string,
        crp: string,
        email: string,
    ) {
        this.idProfissional = idProfissional;
        this.nome = nome;
        this.cpf = cpf;
        this.crp = crp;
        this.email = email;
    }
}
