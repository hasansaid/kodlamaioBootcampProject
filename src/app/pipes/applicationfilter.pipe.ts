import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'applicationfilter'
})
export class ApplicationfilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
