"use client"

import React, { ReactNode, createContext, useContext, useState } from 'react';

// Definindo o tipo para o contexto
interface AppContextType {
  isOpen: boolean;
  toggleOpen: () => void;
}

// Criando o contexto
const AppContext = createContext<AppContextType | undefined>(undefined);

interface MyComponentProps{
  children: ReactNode
}

// Provedor do contexto que irá envolver seus componentes
export const AppProvider: React.FC<MyComponentProps> = ({ children }: MyComponentProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Valor que será fornecido para os componentes
  const contextValue: AppContextType = {
    isOpen,
    toggleOpen,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

// Hook personalizado para utilizar o contexto
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext deve ser usado dentro de um AppProvider');
  }
  return context;
};
