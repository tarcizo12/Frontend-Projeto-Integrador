export class AnotacaoPacienteModel {
    private _idAnotacao: number;
    private _descricao: string;
    private _emocaoEstimada: string | null;
    private _dhRegistro: Date;
    private _fk_idPaciente: number;

    constructor(
        idAnotacao: number,
        descricao: string,
        dhRegistro: Date,
        fk_idPaciente: number,
        emocaoEstimada: string | null = null
    ) {
        this._idAnotacao = idAnotacao;
        this._descricao = descricao;
        this._dhRegistro = dhRegistro;
        this._fk_idPaciente = fk_idPaciente;
        this._emocaoEstimada = emocaoEstimada;
    }

    public get idAnotacao(): number {
        return this._idAnotacao;
    }

    public get descricao(): string {
        return this._descricao;
    }

    public get emocaoEstimada(): string | null {
        return this._emocaoEstimada;
    }

    public get registro(): Date {
        return this._dhRegistro;
    }

    public get fk_idPaciente(): number {
        return this._fk_idPaciente;
    }

    public set idAnotacao(id: number) {
        this._idAnotacao = id;
    }

    public set descricao(descricao: string) {
        this._descricao = descricao;
    }

    public set emocaoEstimada(emocaoEstimada: string | null) {
        this._emocaoEstimada = emocaoEstimada;
    }

    public set dhRegistro(dhRegistro: Date) {
        this._dhRegistro = dhRegistro;
    }

    public set fk_idPaciente(fk_idPaciente: number) {
        this._fk_idPaciente = fk_idPaciente;
    }

}
