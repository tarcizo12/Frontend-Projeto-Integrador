import { AnotacaoPacienteModel } from '../models//AnotacaoPacienteModel';

export class AnotacaoPacienteMockFactory {
    private static criarMockAnotacao(
        idAnotacao: number,
        descricao: string,
        dhRegistro: Date,
        fk_idPaciente: number,
        emocaoEstimada: string | null = null
    ): AnotacaoPacienteModel {
        return new AnotacaoPacienteModel(idAnotacao, descricao, dhRegistro, fk_idPaciente, emocaoEstimada);
    }

    public static criarListaMockAnotacoes(): AnotacaoPacienteModel[] {
        return [
            this.criarMockAnotacao(1, 'Descrição 1', new Date('2023-01-01'), 101, 'Feliz'),
            this.criarMockAnotacao(2, 'Descrição 2', new Date('2023-02-01'), 102, 'Triste'),
            this.criarMockAnotacao(3, 'Descrição 3', new Date('2023-03-01'), 103, 'Neutro'),
            this.criarMockAnotacao(4, 'Descrição 4', new Date('2023-04-01'), 104, null),
            this.criarMockAnotacao(5, 'Descrição 5', new Date('2023-05-01'), 105, 'Ansioso')
        ];
    }

    public static getAnotacaoPacienteInicialValues(): AnotacaoPacienteModel{
        return this.criarMockAnotacao(0,'', new Date(), 0, '')
    }
}