const localHostEmuladoprBasePath = "http:///192.168.0.6:3000/"
const localHostWebBasePath = "http://localhost:3000/"

const currentPathSelected = localHostEmuladoprBasePath
const basePathAnotacoes = "anotacao/"
const basePathPacientes = "paciente/"
const basePathLogin = "login/login"
const basePathCadastro = "login/cadastrar"
const basePathPsicologo = "psicologo/"

const PATHS_API = {
    ANOTACOES : {
        BUSCAR_ANOTACAO_BY_PACIENTE : `${currentPathSelected}${basePathAnotacoes}buscarAnotacaoPorIdPaciente?idPaciente=:id`,
        SALVAR_ANOTACAO : `${currentPathSelected}${basePathAnotacoes}registrarAnotacao`,
        OBTER_TITULO_GERADO : `${currentPathSelected}${basePathAnotacoes}obterTitulo?descricao=:desc`,
        OBTER_RESUMO_SEMANAL_GERADO : `${currentPathSelected}${basePathAnotacoes}obterResumo?idPaciente=:id`
    },
    PACIENTE : {
        BUSCAR_PACIENTES_BY_ID_PSICOLOGO : `${currentPathSelected}${basePathPacientes}buscarPacientePorProfissional?idPsicologo=:id`
    },
    LOGIN : {
        REALIZAR_LOGIN : `${currentPathSelected}${basePathLogin}`,
        REALIZAR_CADASTRO : `${currentPathSelected}${basePathCadastro}`
    },
    PSICOLOGO : {
        CONSULTAR_PSICOLOGO_BY_ID : `${currentPathSelected}${basePathPsicologo}/buscarPsicologo?idPsicologo=:id`
    }
} 

export default PATHS_API