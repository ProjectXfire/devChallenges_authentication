import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hidePassword',
})
export class HidePasswordPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value.replace(/./g, '*');
  }
}
