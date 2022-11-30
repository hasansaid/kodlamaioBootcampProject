export interface ICreateApplicantRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  nationalIdentity: number;
  dateOfBirth: string;
  about: string;
}
