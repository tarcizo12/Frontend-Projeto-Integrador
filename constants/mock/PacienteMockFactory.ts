import { PacienteModel } from "../models/PacienteModel";

export class PacienteMockFactory {
    private static criarMockPaciente(
        idPaciente: number,
        nome: string,
        dataNascimento: Date,
        cpf: string,
        email: string,
        nomeDoResponsavel: string,
        telefone: string,
        fkIdProfissional: number
    ): PacienteModel {
        return new PacienteModel(
            idPaciente,
            nome,
            dataNascimento,
            cpf,
            email,
            nomeDoResponsavel,
            telefone,
            fkIdProfissional
        );
    }

    public static criarListaMockPacientes(): PacienteModel[] {
        return [
            this.criarMockPaciente(
                1,
                "João da Silva",
                new Date("1990-05-15"),
                "123.456.789-00",
                "joao.silva@email.com",
                "Maria da Silva",
                "(11) 98765-4321",
                101
            ),
            this.criarMockPaciente(
                2,
                "Ana Pereira",
                new Date("1985-08-22"),
                "987.654.321-00",
                "ana.pereira@email.com",
                "Pedro Pereira",
                "(21) 91234-5678",
                102
            ),
            this.criarMockPaciente(
                3,
                "Carlos Souza",
                new Date("2000-12-10"),
                "321.654.987-00",
                "carlos.souza@email.com",
                "Fernanda Souza",
                "(31) 99876-5432",
                103
            )
        ];
    }
}
