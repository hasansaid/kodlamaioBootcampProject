export interface ICreateApplicantRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  nationalIdentity: string;
  dateOfBirth: Date;
  about: string;
}
