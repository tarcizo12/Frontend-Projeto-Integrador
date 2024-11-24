import { PacienteModel } from "../models/PacienteModel";

export type PacienteItemProps = {
    paciente: PacienteModel;
    onPress: (paciente: PacienteModel) => void;
};