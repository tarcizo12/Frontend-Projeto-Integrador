const localHostBasePath = "http://localhost:3000/"
const basePathAnotacoes = "anotacao/"

const PATHS_API = {
    ANOTACOES : {
        BUSCAR_ANOTACAO_BY_PACIENTE : `${localHostBasePath}${basePathAnotacoes}buscarAnotacaoPorIdPaciente?idPaciente=:id`,
        SALVAR_ANOTACAO : `${localHostBasePath}${basePathAnotacoes}registrarAnotacao`
    }
} 

export default PATHS_API