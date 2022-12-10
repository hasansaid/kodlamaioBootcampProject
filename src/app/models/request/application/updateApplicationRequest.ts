export interface IUpdateApplicationRequest {
  userId: number;
  bootcampId: number;
  state: number;

  applyName: string;

  userName: string;
  bootcampName: string;
}
