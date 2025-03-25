const localHostEmuladoprBasePath = "http://192.168.100.119:3000/"
const localHostWebBasePath = "http://localhost:3000/"

const currentPathSelected = localHostWebBasePath
const basePathAnotacoes = "anotacao/"
const basePathPacientes = "paciente/"

const PATHS_API = {
    ANOTACOES : {
        BUSCAR_ANOTACAO_BY_PACIENTE : `${currentPathSelected}${basePathAnotacoes}buscarAnotacaoPorIdPaciente?idPaciente=:id`,
        SALVAR_ANOTACAO : `${currentPathSelected}${basePathAnotacoes}registrarAnotacao`
    },
    PACIENTE : {
        BUSCAR_PACIENTES_BY_ID_PSICOLOGO : `${currentPathSelected}${basePathPacientes}buscarPacientePorProfissional?idPsicologo=:id`
    }
} 

export default PATHS_API