export class PacienteModel {
    private idPaciente: number;
    private nome: string;
    private dataNascimento: Date;
    private cpf: string;
    private email: string;
    private nomeDoResponsavel: string;
    private telefone: string;
    private fkIdProfissional: number;

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
        this.fkIdProfissional = fkIdProfissional;
    }

    public getIdPaciente(): number {
        return this.idPaciente;
    }

    public getNome(): string {
        return this.nome;
    }

    public getDataNascimento(): Date {
        return this.dataNascimento;
    }

    public getCpf(): string {
        return this.cpf;
    }

    public getEmail(): string {
        return this.email;
    }

    public getNomeDoResponsavel(): string {
        return this.nomeDoResponsavel;
    }

    public getTelefone(): string {
        return this.telefone;
    }

    public getFkIdProfissional(): number {
        return this.fkIdProfissional;
    }
}
