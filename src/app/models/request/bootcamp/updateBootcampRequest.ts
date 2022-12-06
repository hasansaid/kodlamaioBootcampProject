export interface IUpdateBootcampRequest {
  id: number;
  instructorId: number;
  name: string;
  dateStart: string;
  dateEnd: string;
  state: number;
  about: string;
  instructorName: string;
}
