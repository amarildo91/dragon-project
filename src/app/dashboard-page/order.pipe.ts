import { Pipe, PipeTransform } from '@angular/core';
import { DragonModule } from '../model/dragonModule';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(Dragon: DragonModule[], path: string[], order: number): DragonModule[] {

    if (!Dragon || !path || !order) return Dragon;

    return Dragon.sort((a: DragonModule, b: DragonModule) => {
      path.forEach(property => {
        a = a[property];
        b = b[property];
      })
      return a > b ? order : order * (- 1);
    })
  }

}
