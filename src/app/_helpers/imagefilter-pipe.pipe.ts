import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagefilterPipe'
})
export class ImagefilterPipePipe implements PipeTransform {

  transform(items: Array<any>, name: string): Array<any> {
    return items.filter(item => item.name === name);
}

}
