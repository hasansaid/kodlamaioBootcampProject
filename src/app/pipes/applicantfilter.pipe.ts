import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'applicantfilter'
})
export class ApplicantfilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
