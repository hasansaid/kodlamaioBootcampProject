import { IGetAllApplicationResponse } from './../models/response/application/getAllApplicationResponse';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'applicationfilter',
})
export class ApplicationfilterPipe implements PipeTransform {
  transform(
    value: IGetAllApplicationResponse[],
    filterApplication: string
  ): IGetAllApplicationResponse[] {
    filterApplication = filterApplication
      ? filterApplication.toLocaleLowerCase()
      : null;

    return filterApplication
      ? value.filter(
          (e: IGetAllApplicationResponse) =>
            e.userName.toLocaleLowerCase().indexOf(filterApplication) !== -1
        )
      : value;
  }
}
