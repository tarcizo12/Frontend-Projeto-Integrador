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

    public getIdAnotacao(): number {
        return this._idAnotacao;
    }

    public getDescricao(): string {
        return this._descricao;
    }

    public getEmocaoEstimada(): string | null {
        return this._emocaoEstimada;
    }

    public getDhRegistro(): Date {
        return this._dhRegistro;
    }

    public getFk_idPaciente(): number {
        return this._fk_idPaciente;
    }

    public setIdAnotacao(id: number) {
        this._idAnotacao = id;
    }

    public setDescricao(descricao: string) {
        this._descricao = descricao;
    }

    public setEmocaoEstimada(emocaoEstimada: string | null) {
        this._emocaoEstimada = emocaoEstimada;
    }

    public setDhRegistro(dhRegistro: Date) {
        this._dhRegistro = dhRegistro;
    }

    public setFk_idPaciente(fk_idPaciente: number) {
        this._fk_idPaciente = fk_idPaciente;
    }

}
