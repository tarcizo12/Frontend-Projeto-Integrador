import { AnotacaoPacienteModel } from '@/constants/models/AnotacaoPacienteModel';
import axios, { AxiosResponse } from 'axios';
import PATHS_API from './PathsApi';
import Providers from './Providers';

export default class AnotacaoProvider {
  static async obterListaAnotacoesPaciente(idPaciente: number): Promise<AnotacaoPacienteModel[]> {
    const url = PATHS_API.ANOTACOES.BUSCAR_ANOTACAO_BY_PACIENTE.replace(
      ":id",
      idPaciente.toString()
    );

    return await Providers.getRequest<AnotacaoPacienteModel[]>(url);
  }

  static async salvarNovaAnotacao(anotacao: AnotacaoPacienteModel): Promise<number> {
    const url = PATHS_API.ANOTACOES.SALVAR_ANOTACAO;
    
    const response = await Providers.postRequest<AnotacaoPacienteModel, AnotacaoPacienteModel>(url, anotacao);

    return response.idAnotacao;
  }

}
