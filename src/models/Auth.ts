export interface AuthData {
  role: string;
  id: string;
  name: string;
  email: string;
  image: null | string;
  token: string;
}

export interface AuthModel {
  authData: AuthData;
}
