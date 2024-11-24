import { AnotacaoPacienteModel } from "../models/AnotacaoPacienteModel";

export type AnotacaoItemProps = {
    anotacao: AnotacaoPacienteModel;
    onPress: (anotacao: AnotacaoPacienteModel) => void;
};