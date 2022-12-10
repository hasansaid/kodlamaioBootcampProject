export interface ICreateApplicationRequest {
  userId: number;
  userName: string;

  applyName: string;
  bootcampId: number;
  bootcampName: string;

  state: number;
}
