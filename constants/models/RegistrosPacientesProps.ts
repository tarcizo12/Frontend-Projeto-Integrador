import RegistrosPaciente from "@/app/screens/featurePaciente/registrosPaciente/RegistrosPaciente";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/RootStackParamList";
import ScreenRoutes from "../ScreenRoutes";

type RegistrosPacientesProps = {
    route: RouteProp<RootStackParamList, typeof ScreenRoutes.REGISTROS_PACIENTE>;
  };


export default RegistrosPacientesProps