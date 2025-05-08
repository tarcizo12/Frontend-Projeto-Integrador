import { PacienteModel } from "../models/PacienteModel";
import { UsuarioLogado } from "../models/UsuarioLogado";
import ScreenRoutes from "../ScreenRoutes";
import { PacienteInfo } from "./PacienteInfo";

export type RootStackParamList = {
  [ScreenRoutes.HOME_SCREEN]: undefined;
  [ScreenRoutes.HOME_PACIENTE_SCREEN]: undefined;
  [ScreenRoutes.HOME_PSICOLOGO_SCREEN]: undefined;
  [ScreenRoutes.PERFIL_PACIENTE_BY_PSCIOLOGO]: { pacienteInfo: PacienteInfo };
  [ScreenRoutes.CALENDARIO_PACIENTE]: undefined;
  [ScreenRoutes.REGISTROS_PACIENTE]: {
    usuario: PacienteModel;
  };
  [ScreenRoutes.CREATE_USER]: undefined;
  [ScreenRoutes.FORGOT_MY_PASSWORD]: undefined;
  [ScreenRoutes.PERFIL_PACIENTE]: undefined;
};