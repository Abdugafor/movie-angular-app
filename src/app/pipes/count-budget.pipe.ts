import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countBudget'
})
export class CountBudgetPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
      return value.toString().slice(0, 3)
  }

}
