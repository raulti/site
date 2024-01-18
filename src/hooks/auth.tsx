import jwtDecode from 'jwt-decode';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

// import { deleteCookie, setCookie } from 'cookies-next';
import Router from 'next/router';

import api from '../services/api';

import {
  AuthContextData,
  AuthState,
  IAuthProvider,
  IResponseMe,
  IUser,
} from '@/interfaces/hooks/IAuth';

interface IDecoded {
  id: number;
  data: IUser;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  const [user, setUser] = useState<IUser | undefined>(undefined);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'easy.token': token } = parseCookies();
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;

      api
        .get('/me')
        .then(res => setUser(res.data.data))
        .catch(() => {
          destroyCookie(undefined, 'easy.token');
        });
    }
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/login', { email, password });

    const { token } = response.data.data;

    const decoded: IDecoded = jwtDecode(token);

    setCookie(undefined, 'easy.token', token, {
      maxAge: 60 * 60 * 24 * 9999, // 2 anos
    });

    setUser(decoded.data);

    api.defaults.headers.Authorization = `Bearer ${token}`;
  }, []);

  const signOut = useCallback(() => {
    delete api.defaults.headers.Authorization;
    setUser(undefined);

    destroyCookie(undefined, 'easy.token');

    Router.replace('/');
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
