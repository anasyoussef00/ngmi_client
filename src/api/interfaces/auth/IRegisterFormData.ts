export enum UserType {
  None = "",
  R = "R",
  A = "A",
}

export enum Gender {
  None = "",
  M = "M",
  F = "F",
  O = "O",
}

export interface IRegisterFormData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  password_confirmation: string;
  type: UserType;
  gender: Gender;
  birthDate: string;
}
