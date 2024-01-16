import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countBudget'
})
export class CountBudgetPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
   
     if (value.toString().length > 8) {
      return value.toString().slice(0, 3)
     }else {
      return value.toString().slice(0,  2)
     }
  }

}
