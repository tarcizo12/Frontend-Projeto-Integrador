const localHostEmuladoprBasePath = "http://10.0.0.112:3000/"
const localHostWebBasePath = "http://localhost:3000/"

const currentPathSelected = localHostEmuladoprBasePath
const basePathAnotacoes = "anotacao/"
const basePathPacientes = "paciente/"
const basePathLogin = "login/"

const PATHS_API = {
    ANOTACOES : {
        BUSCAR_ANOTACAO_BY_PACIENTE : `${currentPathSelected}${basePathAnotacoes}buscarAnotacaoPorIdPaciente?idPaciente=:id`,
        SALVAR_ANOTACAO : `${currentPathSelected}${basePathAnotacoes}registrarAnotacao`
    },
    PACIENTE : {
        BUSCAR_PACIENTES_BY_ID_PSICOLOGO : `${currentPathSelected}${basePathPacientes}buscarPacientePorProfissional?idPsicologo=:id`
    },
    LOGIN : {
        REALIZAR_LOGIN : `${currentPathSelected}${basePathLogin}`
    }
} 

export default PATHS_API