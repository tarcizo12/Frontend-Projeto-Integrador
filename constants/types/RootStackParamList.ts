import ScreenRoutes from "../ScreenRoutes";
import { PacienteInfo } from "./PacienteInfo";

export type RootStackParamList = {
  [ScreenRoutes.HOME_SCREEN]: undefined;
  [ScreenRoutes.HOME_PACIENTE_SCREEN]: undefined;
  [ScreenRoutes.HOME_PSICOLOGO_SCREEN]: undefined;
  [ScreenRoutes.PERFIL_PACIENTE_BY_PSCIOLOGO]: { pacienteInfo: PacienteInfo };
  [ScreenRoutes.PACIENTE_CALENDARIO]: undefined;
};