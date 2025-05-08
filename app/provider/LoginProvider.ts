import axios, { AxiosError, AxiosResponse } from 'axios';
import PATHS_API from './PathsApi';
import { LoginRequest } from '@/constants/models/LoginRequest';
import { UsuarioLogado } from '@/constants/models/UsuarioLogado';

export default class LoginProvider {

    private static async postRequest<T>(url: string, body: T): Promise<T> {
        try {
          const response: AxiosResponse<T> = await axios.post(url, body);
          return response.data; 
        } catch (error) {
          console.error('Erro ao realizar POST:', error);
          throw error;
        }
    }


    public static async realizarLogin(objetoPostLogin: LoginRequest): Promise<UsuarioLogado> {
        const url = PATHS_API.LOGIN.REALIZAR_LOGIN;
        console.log("url", url);
      
        try {
            const response = await LoginProvider.postRequest<any>(url, objetoPostLogin);
            console.log("Response do login:", response);
    
            // Retorna o objeto com as informações do usuário logado
            return response.data;
    
        } catch (error) {
            // Verifica se o erro é do tipo AxiosError
            if (error instanceof AxiosError) {
                console.error(error.response?.data || error.message);
                throw new Error(error.message);
            } else {
                console.error("Erro inesperado: ", error);
                throw new Error('Erro inesperado. Tente novamente mais tarde.');
            }
        }
    }
      
}
