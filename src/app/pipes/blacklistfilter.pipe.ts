import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blacklistfilter'
})
export class BlacklistfilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
