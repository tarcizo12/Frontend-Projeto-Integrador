export class DateUtil {
    /**
     * Formata uma data no formato 'YYYY-MM-DD' para o formato brasileiro 'DD/MM/YYYY'.
     * 
     * @param data - String da data no formato 'YYYY-MM-DD'.
     * @returns String da data formatada no formato brasileiro 'DD/MM/YYYY' ou uma string vazia se o formato for inválido.
     */
    public static formatarDataParaBrasileiro(data: string): string {

        if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) {
            return "";
        }

        const [ano, mes, dia] = data.split("-");
        return `${dia}/${mes}/${ano}`;
    }

        /**
     * Formata uma data no formato "Tue Aug 31 2021 21:00:00 GMT-0300 (Horário Padrão de Brasília)" 
     * para o formato brasileiro "DD/MM/YYYY".
     * 
     * @param dataCompleta - String da data no formato completo.
     * @returns String da data formatada no formato brasileiro "DD/MM/YYYY".
     */
        public static formatarDataCompleta(dataCompleta: string): string {
            const data = new Date(dataCompleta);
    
            if (isNaN(data.getTime())) {
                throw new Error("Formato de data inválido");
            }
    
            const dia = String(data.getDate()).padStart(2, "0");
            const mes = String(data.getMonth() + 1).padStart(2, "0"); // Meses são baseados em zero
            const ano = data.getFullYear();
    
            return `${dia}/${mes}/${ano}`;
        }


        public static formatDate (date: Date)  {
            return `${String(date.getDate()).padStart(2, '0')}/${String(
              date.getMonth() + 1
            ).padStart(2, '0')}/${date.getFullYear()}`;
        };

        public static formatarData = (texto: string) => {
            let cleaned = texto.replace(/\D/g, '');
            if (cleaned.length > 8) {
              cleaned = cleaned.slice(0, 8);
            }
            if (cleaned.length >= 5) {
              return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4)}`;
            } else if (cleaned.length >= 3) {
              return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
            } else {
              return cleaned;
            }
          };
          
        public static validarData = (dataTexto: string) => {
            const [dia, mes, ano] = dataTexto.split('/').map(Number);
            const data = new Date(ano, mes - 1, dia);
            if (data.getFullYear() !== ano || data.getMonth() !== mes - 1 || data.getDate() !== dia) {
              return { valido: false, mensagem: 'Data inválida' };
            }
            const hoje = new Date();
            if (data > hoje) {
              return { valido: false, mensagem: 'Data no futuro' };
            }
            return { valido: true };
          };
          
        public static validarIntervaloDatas = (dataInicioTexto: string, dataFimTexto: string) => {
            const [diaInicio, mesInicio, anoInicio] = dataInicioTexto.split('/').map(Number);
            const [diaFim, mesFim, anoFim] = dataFimTexto.split('/').map(Number);
            const dataInicio = new Date(anoInicio, mesInicio - 1, diaInicio);
            const dataFim = new Date(anoFim, mesFim - 1, diaFim);
            if (dataFim < dataInicio) {
              return { valido: false, mensagem: 'Data final é menor que a data inicial' };
            }
            return { valido: true , mensagem : 'Valido'};
        };
}
