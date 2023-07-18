import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countBudgetLength'
})
export class CountBudgetLength implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (value === 0) {
      return ''
    }else if ( value.toString().length > 6) {
      return 'M'
    }else {
      return 'T'
    }
  }

}
