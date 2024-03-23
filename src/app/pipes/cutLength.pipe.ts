import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'cutLengthPipe'
})

export class cutLengthPipe implements PipeTransform {
    transform(value: string, ...args: any[]) {
        if (value.length >= 20) {
            return value.slice(0, 20) + '...'
           
        }
        else {
            return value
        }
    }
}