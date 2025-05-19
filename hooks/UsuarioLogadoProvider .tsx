import { UsuarioLogado } from '@/constants/models/UsuarioLogado';
import UsuarioLogadoContextProps from '@/constants/models/UsuarioLogadoContextProps';
import UsuarioLogadoProviderProps from '@/constants/models/UsuarioLogadoProviderProps';
import React, { createContext, useContext, useState } from 'react';


const UsuarioLogadoContext = createContext<UsuarioLogadoContextProps | undefined>(undefined);

export const UsuarioLogadoProvider = ({ children }: UsuarioLogadoProviderProps) => {
  const usuarioInit = {
      isPsicologo : null,
      isPaciente : null, 
      usuarioLogadoData :  null
  };

  const [usuarioLogado, setUsuarioLogadoState] = useState<UsuarioLogado>(usuarioInit);

  const setUsuarioLogado = (usuario: UsuarioLogado) => {
    setUsuarioLogadoState(usuario);
  };

  const getUsuarioLogado = (): UsuarioLogado => {
    return usuarioLogado;
  };

  return (
    <UsuarioLogadoContext.Provider value={{ usuarioLogado, setUsuarioLogado, getUsuarioLogado }}>
      {children}
    </UsuarioLogadoContext.Provider>
  );
};

export const useUsuarioLogado = (): UsuarioLogadoContextProps => {
  const context = useContext(UsuarioLogadoContext);
  if (!context) {
    throw new Error('useUsuarioLogado deve ser usado dentro de UsuarioLogadoProvider');
  }
  return context;
};
