export interface IUpdateEmployeeRequest{
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    nationalIdentity:string;
    dateOfBirth:Date;
    position:string; 
}