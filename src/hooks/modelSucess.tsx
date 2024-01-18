import React, { createContext, useCallback, useContext, useState } from 'react';

import IProps from '@/interfaces/IProps';

import ModalSuccess from '@/components/ModalSuccess';

export interface ToastMessage {
  payment_method: 'credit_card' | 'debit_card' | 'billing_title' | 'pix';
  data?: any;
}

interface ModalSucessContextData {
  addModalSucess(
    payment_method: 'credit_card' | 'debit_card' | 'billing_title' | 'pix',
    data: any,
  ): void;
  removeModalSucess(): void;
}

const ModalSucessContext = createContext<ModalSucessContextData>(
  {} as ModalSucessContextData,
);

export const ModelSucessProvider: React.FC<IProps> = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [dataState, setDataState] = useState<ToastMessage>();

  const addModalSucess = useCallback((payment_method, data) => {
    setDataState({ payment_method, data });
    setVisible(true);
  }, []);

  const removeModalSucess = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <ModalSucessContext.Provider value={{ addModalSucess, removeModalSucess }}>
      {children}

      <ModalSuccess
        payment_method={dataState?.payment_method}
        data={dataState?.data}
        visible={visible}
      />
    </ModalSucessContext.Provider>
  );
};

export function useModalSucess(): ModalSucessContextData {
  const context = useContext(ModalSucessContext);

  if (!context) {
    throw new Error('useModalSucess must be used within a ToastProvider');
  }

  return context;
}
