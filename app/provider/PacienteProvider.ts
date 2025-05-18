import PATHS_API from './PathsApi';
import { PacienteModel } from '@/constants/models/PacienteModel';
import Providers from './Providers';

export default class PacienteProvider {
  static async obsterListaPacientesByPsicolog(idPsicologo: number): Promise<PacienteModel[]> {
    const url = PATHS_API.PACIENTE.BUSCAR_PACIENTES_BY_ID_PSICOLOGO.replace( ":id",idPsicologo.toString());

    return await Providers.getRequest<PacienteModel[]>(url);
  }

}
