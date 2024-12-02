const localHostBasePath = "http://localhost:3000/"
const basePathAnotacoes = "anotacao/"
const basePathPacientes = "paciente/"

const PATHS_API = {
    ANOTACOES : {
        BUSCAR_ANOTACAO_BY_PACIENTE : `${localHostBasePath}${basePathAnotacoes}buscarAnotacaoPorIdPaciente?idPaciente=:id`,
        SALVAR_ANOTACAO : `${localHostBasePath}${basePathAnotacoes}registrarAnotacao`
    },
    PACIENTE : {
        BUSCAR_PACIENTES_BY_ID_PSICOLOGO : `${localHostBasePath}${basePathPacientes}buscarPacientePorProfissional?idPsicologo=:id`
    }
} 

export default PATHS_API