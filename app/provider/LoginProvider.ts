import axios, { AxiosError, AxiosResponse } from 'axios';
import PATHS_API from './PathsApi';
import { LoginRequest } from '@/constants/models/LoginRequest';
import { UsuarioLogado } from '@/constants/models/UsuarioLogado';
import UserPayload from '@/constants/models/UserPayload';
import Providers from './Providers';

export default class LoginProvider {

    public static async realizarLogin(objetoPostLogin: LoginRequest): Promise<any> {
        const url = PATHS_API.LOGIN.REALIZAR_LOGIN;

        try {
            const response = await Providers.postRequest<LoginRequest, UsuarioLogado>(url, objetoPostLogin);
            console.log("Usuário logado com sucesso!", response);

            return response;
        } catch (error) {
            if (error instanceof AxiosError) {
                console.error(error.response?.data || error.message);
                throw new Error(error.message);
            } else {
                console.error("Erro inesperado: ", error);
                throw new Error('Erro inesperado. Tente novamente mais tarde.');
            }
        }
    }

    public static async realizarCadastro(objetoNovoUsuario: UserPayload): Promise<UsuarioLogado> {
        const url = PATHS_API.LOGIN.REALIZAR_CADASTRO;

        try {
            console.log("Cadastrando...", objetoNovoUsuario)
            const response = await Providers.postRequest<UserPayload, UsuarioLogado>(url, objetoNovoUsuario);
            console.log("Novo usuário cadastrado com sucesso!");

            return response;
        } catch (error) {
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
