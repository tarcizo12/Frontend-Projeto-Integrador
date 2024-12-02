const localHostEmuladoprBasePath = "http://192.168.100.119:3000/"
const localHostWebBasePath = "http://192.168.100.119:3000/"
const basePathAnotacoes = "anotacao/"
const basePathPacientes = "paciente/"

const PATHS_API = {
    ANOTACOES : {
        BUSCAR_ANOTACAO_BY_PACIENTE : `${localHostEmuladoprBasePath}${basePathAnotacoes}buscarAnotacaoPorIdPaciente?idPaciente=:id`,
        SALVAR_ANOTACAO : `${localHostEmuladoprBasePath}${basePathAnotacoes}registrarAnotacao`
    },
    PACIENTE : {
        BUSCAR_PACIENTES_BY_ID_PSICOLOGO : `${localHostEmuladoprBasePath}${basePathPacientes}buscarPacientePorProfissional?idPsicologo=:id`
    }
} 

export default PATHS_API