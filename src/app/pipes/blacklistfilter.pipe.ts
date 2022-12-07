import { IGetAllBlackListResponse } from './../models/response/blackList/getAllBlackListResponse';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blacklistfilter',
})
export class BlacklistfilterPipe implements PipeTransform {
  transform(
    value: IGetAllBlackListResponse[],
    filterBlacklist: string
  ): IGetAllBlackListResponse[] {
    filterBlacklist = filterBlacklist
      ? filterBlacklist.toLocaleLowerCase()
      : null;

    return filterBlacklist
      ? value.filter(
          (f: IGetAllBlackListResponse) =>
            f.applicantName.toLocaleLowerCase().indexOf(filterBlacklist) !== -1
        )
      : value;
  }
}
