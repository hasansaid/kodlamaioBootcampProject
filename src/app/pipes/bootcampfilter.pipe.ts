import { IGetAllBootcampResponse } from './../models/response/bootcamp/getAllBootcampResponse';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bootcampfilter',
})
export class BootcampfilterPipe implements PipeTransform {
  transform(
    value: IGetAllBootcampResponse[],
    filterText: string
  ): IGetAllBootcampResponse[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : null;
    return filterText
      ? value.filter(
          (b: IGetAllBootcampResponse) =>
            b.name.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
