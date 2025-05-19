export class PacienteModel {
    public idPaciente: number;
    public nome: string;
    public dataNascimento: Date;
    public cpf: string;
    public email: string;
    public nomeDoResponsavel: string;
    public telefone: string;
    public fk_idProfissional: number;

    constructor(
        idPaciente: number,
        nome: string,
        dataNascimento: Date,
        cpf: string,
        email: string,
        nomeDoResponsavel: string,
        telefone: string,
        fkIdProfissional: number
    ) {
        this.idPaciente = idPaciente;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.email = email;
        this.nomeDoResponsavel = nomeDoResponsavel;
        this.telefone = telefone;
        this.fk_idProfissional = fkIdProfissional;
    }
}
