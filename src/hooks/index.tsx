import React from 'react';

import { IAppProvider } from '@/interfaces/hooks/IAppProvider';

import { AuthProvider } from './auth';
import { ModelSucessProvider } from './modelSucess';
import { ToastProvider } from './toast';

const AppProvider: React.FC<IAppProvider> = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <ModelSucessProvider>{children}</ModelSucessProvider>
    </ToastProvider>
  </AuthProvider>
);

export default AppProvider;
