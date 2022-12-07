import { IGetAllApplicantResponse } from './../models/response/applicant/getAllApplicantResponse';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'applicantfilter',
})
export class ApplicantfilterPipe implements PipeTransform {
  transform(
    value: IGetAllApplicantResponse[],
    filterApplicant: string
  ): IGetAllApplicantResponse[] {
    filterApplicant = filterApplicant
      ? filterApplicant.toLocaleLowerCase()
      : null;

    return filterApplicant
      ? value.filter(
          (f: IGetAllApplicantResponse) =>
            f.firstName.toLocaleLowerCase().indexOf(filterApplicant) !== -1
        )
      : value;
  }
}
