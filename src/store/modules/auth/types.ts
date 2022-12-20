export interface ITokenDetails {
  token: string | null;
  tokenType: string | null;
}

export interface IAuthState {
  tokenDetails: ITokenDetails;
  registerErrors?: IRegisterErrors;
  loginErrors?: ILoginErrors;
}

export interface IRegisterErrors {
  firstName?: string[];
  lastName?: string[];
  username?: string[];
  email?: string[];
  type?: string[];
  gender?: string[];
  birthDate?: string[];
  password?: string[];
}

export interface ILoginErrors {
  username?: string[];
  password?: string[];
}
