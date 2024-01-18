export interface IUser {
  name: string;
  lastname: string;
  slug: string;
  email: string;
  cpf: number;
  gender: any;
  phone: number;
  mobile_phone: number;
  avatar: string;

  type?: 'provider' | string | undefined;
}

export interface AuthResponse {
  token: string;
  user: IUser;
}

export interface AuthState {
  token: string;
  user: IUser;
}

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface AuthContextData {
  isAuthenticated: boolean;
  user?: IUser;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

export interface IAuthProvider {
  children?: React.ReactNode;
  // dataAuth: any;
}

export interface IResponseMe {
  data: {
    data: {
      name: string;
      lastname: string;
      slug: string;
      email: string;
      cpf: number;
      gender: any;
      phone: number;
      mobile_phone: number;
      avatar: string;

      type?: 'provider' | string | undefined;
    };
  };
}
