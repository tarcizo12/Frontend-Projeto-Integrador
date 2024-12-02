import axios, { AxiosResponse } from 'axios';
import PATHS_API from './PathsApi';
import { PacienteModel } from '@/constants/models/PacienteModel';

export default class PacienteProvider {
  static async obsterListaPacientesByPsicolog(idPsicologo: number): Promise<PacienteModel[]> {
    const url = PATHS_API.PACIENTE.BUSCAR_PACIENTES_BY_ID_PSICOLOGO.replace( ":id",idPsicologo.toString());

    return await PacienteProvider.getRequest<PacienteModel[]>(url);
  }


  private static async getRequest<T>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Erro ao realizar GET:', error);
      throw error;
    }
  }
  

}
