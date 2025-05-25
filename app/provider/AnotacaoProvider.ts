import { AnotacaoPacienteModel } from '@/constants/models/AnotacaoPacienteModel';
import PATHS_API from './PathsApi';
import Providers from './Providers';
import TituloResponse from '@/constants/models/TituloResponse';

export default class AnotacaoProvider {
  static async obterListaAnotacoesPaciente(idPaciente: number): Promise<AnotacaoPacienteModel[]> {
    const url = PATHS_API.ANOTACOES.BUSCAR_ANOTACAO_BY_PACIENTE.replace(
      ":id",
      idPaciente.toString()
    );

    return await Providers.getRequest<AnotacaoPacienteModel[]>(url);
  }

  static async obterTituloGeradoPorDescricao(descricao: string): Promise<TituloResponse> {
    const url = PATHS_API.ANOTACOES.OBTER_TITULO_GERADO.replace(":desc" , descricao)

    return await Providers.getRequest<TituloResponse>(url);
  }

    static async obterResumoDescricaoSemanal(idPaciente: number): Promise<string> {
    const url = PATHS_API.ANOTACOES.OBTER_RESUMO_SEMANAL_GERADO.replace(":id" , idPaciente.toString())
      
    console.log("url", url)
    return await Providers.getRequest<string>(url);
  }

  static async salvarNovaAnotacao(anotacao: AnotacaoPacienteModel): Promise<number> {
    const url = PATHS_API.ANOTACOES.SALVAR_ANOTACAO;
    
    const response = await Providers.postRequest<AnotacaoPacienteModel, AnotacaoPacienteModel>(url, anotacao);

    return response.idAnotacao;
  }

}
