import { AnotacaoPacienteModel } from '@/constants/models/AnotacaoPacienteModel';
import axios, { AxiosResponse } from 'axios';
import PATHS_API from './PathsApi';

export default class AnotacaoProvider {
  static async obterListaAnotacoesPaciente(idPaciente: number): Promise<AnotacaoPacienteModel[]> {
    const url = PATHS_API.ANOTACOES.BUSCAR_ANOTACAO_BY_PACIENTE.replace(
      ":id",
      idPaciente.toString()
    );

    return await AnotacaoProvider.getRequest<AnotacaoPacienteModel[]>(url);
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
  
  private static async postRequest<T>(
    url: string,
    body: AnotacaoPacienteModel
  ): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.post(url, body);
      return response.data;
    } catch (error) {
      console.error('Erro ao realizar POST:', error);
      throw error;
    }
  }
}