export class StringUtil {
    /**
     * Formata uma data no formato 'YYYY-MM-DD' para o formato brasileiro 'DD/MM/YYYY'.
     * 
     * @param data - String da data no formato 'YYYY-MM-DD'.
     * @returns String da data formatada no formato brasileiro 'DD/MM/YYYY' ou uma string vazia se o formato for inválido.
     */
    public static formatarDataParaBrasileiro(data: string): string {

        console.log(data)
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
}
