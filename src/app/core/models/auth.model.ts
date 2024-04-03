export interface IUser {
  id: number,
  name: string,
  email: string,
  email_verified_at: boolean,
  created_at: string,
  updated_at: string,
}

export interface IAuthorization {
  token: string;
  email: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginResponse {
  authorization: IAuthorization;
  user: IUser;
}
