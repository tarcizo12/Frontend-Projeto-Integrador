import { UsuarioLogado } from "./UsuarioLogado";

export default interface UsuarioLogadoContextProps {
    usuarioLogado: UsuarioLogado;
    setUsuarioLogado: (usuario: UsuarioLogado) => void;
    getUsuarioLogado: () => UsuarioLogado;
}