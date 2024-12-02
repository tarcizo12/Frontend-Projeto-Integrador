export class AnotacaoPacienteModel {
    public idAnotacao: number;
    public descricao: string;
    public emocaoEstimada: string | null;
    public dhRegistro: Date;
    public _fk_idPaciente: number;

    constructor(
        idAnotacao: number,
        descricao: string,
        dhRegistro: Date,
        fk_idPaciente: number,
        emocaoEstimada: string | null = null
    ) {
        this.idAnotacao = idAnotacao;
        this.descricao = descricao;
        this.dhRegistro = dhRegistro;
        this._fk_idPaciente = fk_idPaciente;
        this.emocaoEstimada = emocaoEstimada;
    }

      
    public static copy(anotacao: AnotacaoPacienteModel): AnotacaoPacienteModel {
        return new AnotacaoPacienteModel(
        anotacao.idAnotacao,
        anotacao.descricao,
        anotacao.dhRegistro,
        anotacao._fk_idPaciente,
        anotacao.emocaoEstimada
        );
    }


}
