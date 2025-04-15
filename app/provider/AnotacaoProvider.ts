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

  static async salvarNovaAnotacao(anotacao: AnotacaoPacienteModel): Promise<number> {
    const url = PATHS_API.ANOTACOES.SALVAR_ANOTACAO;
    
    const response = await AnotacaoProvider.postRequest<AnotacaoPacienteModel>(url, anotacao);

    return response.idAnotacao;
  }


  private static async postRequest<T>(url: string, body: T): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.post(url, body);
      return response.data; 
    } catch (error) {
      console.error('Erro ao realizar POST:', error);
      throw error;
    }
  }

  private static async getRequest<T>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Erro ao realizar GET: ' + url, error);
      throw error;
    }
  }
  

}
