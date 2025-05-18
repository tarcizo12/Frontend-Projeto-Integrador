import axios, { AxiosResponse } from "axios";


export default class Providers {

    public static async getRequest<TRequest>(url: string): Promise<TRequest> {
        try {
          const response: AxiosResponse<TRequest> = await axios.get(url);
          return response.data;
        } catch (error) {
          console.error('Erro ao realizar GET:', error);
          throw error;
        }
    }

    public static async postRequest<TRequest, TResponse>(url: string, body: TRequest): Promise<TResponse> {
        try {
            const response: AxiosResponse<TResponse> = await axios.post(url, body);
            return response.data;
        } catch (error) {
            console.error('Erro ao realizar POST:', error);
            throw error;
        }
    }

}