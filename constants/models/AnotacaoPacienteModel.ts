export class AnotacaoPacienteModel {
    public idAnotacao: number = 0;
    public descricao: string = '';
    public emocaoEstimada: string | null = null;
    public dhRegistro: Date = new Date();
    public _fk_idPaciente: number = 0;
    public titulo: string = '';
    public isVisualizada: boolean = false;
  
    constructor() {
      // Construtor vazio: todas as propriedades são inicializadas acima
    }
  
    public static copy(anotacao: AnotacaoPacienteModel): AnotacaoPacienteModel {
      const copia = new AnotacaoPacienteModel();
      copia.idAnotacao = anotacao.idAnotacao;
      copia.descricao = anotacao.descricao;
      copia.emocaoEstimada = anotacao.emocaoEstimada;
      copia.dhRegistro = anotacao.dhRegistro;
      copia._fk_idPaciente = anotacao._fk_idPaciente;
      copia.titulo = anotacao.titulo;
      copia.isVisualizada = anotacao.isVisualizada;
      return copia;
    }
  }
  