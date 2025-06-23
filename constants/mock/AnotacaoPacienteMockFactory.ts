import { AnotacaoPacienteModel } from '../models//AnotacaoPacienteModel';

export class AnotacaoPacienteMockFactory {
    
    public static criarListaMockAnotacoes(): AnotacaoPacienteModel[] {
        const anotacoes: AnotacaoPacienteModel[] = [];
        let a1 = new AnotacaoPacienteModel();
        a1.idAnotacao = 1;
        a1.descricao = 'Descrição 1';
        a1.dhRegistro = new Date('2023-01-01');
        a1._fk_idPaciente = 101;
        a1.emocaoEstimada = 'Feliz';
        anotacoes.push(a1);
        let a2 = new AnotacaoPacienteModel();
        a2.idAnotacao = 2;
        a2.descricao = 'Descrição 2';
        a2.dhRegistro = new Date('2023-02-01');
        a2._fk_idPaciente = 102;
        a2.emocaoEstimada = 'Triste';
        anotacoes.push(a2);
        let a3 = new AnotacaoPacienteModel();
        a3.idAnotacao = 3;
        a3.descricao = 'Descrição 3';
        a3.dhRegistro = new Date('2023-03-01');
        a3._fk_idPaciente = 103;
        a3.emocaoEstimada = 'Neutro';
        anotacoes.push(a3);
        let a4 = new AnotacaoPacienteModel();
        a4.idAnotacao = 4;
        a4.descricao = 'Descrição 4';
        a4.dhRegistro = new Date('2023-04-01');
        a4._fk_idPaciente = 104;
        a4.emocaoEstimada = null;
        anotacoes.push(a4);
        let a5 = new AnotacaoPacienteModel();
        a5.idAnotacao = 5;
        a5.descricao = 'Descrição 5';
        a5.dhRegistro = new Date('2023-05-01');
        a5._fk_idPaciente = 105;
        a5.emocaoEstimada = 'Ansioso';
        anotacoes.push(a5);
        return anotacoes;
    }

    public static getAnotacaoPacienteInicialValues(): AnotacaoPacienteModel{
        return new AnotacaoPacienteModel();
    }

    // Ajustando relatos para retornar AnotacaoPacienteModel[]
    public static relatos: AnotacaoPacienteModel[] = (() => {
        const arr: AnotacaoPacienteModel[] = [];
        for (let i = 1; i <= 4; i++) {
            let a = new AnotacaoPacienteModel();
            a.idAnotacao = i;
            a.descricao = 'Paciente relatou que está com dificuldades para dormir.';
            a.dhRegistro = new Date(`2021-09-0${i}`);
            a._fk_idPaciente = 100 + i;
            a.emocaoEstimada = 'Triste';
            arr.push(a);
        }
        return arr;
    })();

}
