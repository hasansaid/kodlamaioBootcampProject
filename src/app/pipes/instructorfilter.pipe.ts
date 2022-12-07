import { IGetAllInstructorResponse } from './../models/response/instructor/getAllInstructorResponse';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'instructorfilter',
})
export class InstructorfilterPipe implements PipeTransform {
  transform(
    value: IGetAllInstructorResponse[],
    filterInstructor: string
  ): IGetAllInstructorResponse[] {
    filterInstructor = filterInstructor
      ? filterInstructor.toLocaleLowerCase()
      : null;

    return filterInstructor
      ? value.filter(
          (d: IGetAllInstructorResponse) =>
            d.firstName.toLocaleLowerCase().indexOf(filterInstructor) !== -1
        )
      : value;
  }
}
