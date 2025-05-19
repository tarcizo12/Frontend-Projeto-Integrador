import PATHS_API from './PathsApi';
import { PacienteModel } from '@/constants/models/PacienteModel';
import Providers from './Providers';
import { PsicologoModel } from '@/constants/models/PsicologoModel';

export default class PsicologoProvider {
  static async obterInformacoesPsicologoPorPaciente(idPsicologo: number): Promise<PsicologoModel> {
    const url = PATHS_API.PSICOLOGO.CONSULTAR_PSICOLOGO_BY_ID.replace( ":id", idPsicologo.toString());

    return await Providers.getRequest<PsicologoModel>(url);
  }
}
