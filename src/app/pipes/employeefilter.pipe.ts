import { IGetAllEmployeeResponse } from './../models/response/employee/getAllEmployeeResponse';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeefilter',
})
export class EmployeefilterPipe implements PipeTransform {
  transform(
    value: IGetAllEmployeeResponse[],
    filterTextEmployee: string
  ): IGetAllEmployeeResponse[] {
    filterTextEmployee = filterTextEmployee
      ? filterTextEmployee.toLocaleLowerCase()
      : null;
    return filterTextEmployee
      ? value.filter(
          (c: IGetAllEmployeeResponse) =>
            c.firstName.toLocaleLowerCase().indexOf(filterTextEmployee) !== -1
        )
      : value;
  }
}
