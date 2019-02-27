import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'guest'
})
export class GuestPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    debugger;
    if(!args)
    return value;
    const groups=value.filter()
   return value.filter(g=>g.name.toLowerCase().indexOf(args.toLowerCase())>-1).guests.filter(
     item => item.name.toLowerCase().indexOf(args.toLowerCase()) > -1 );
   }

}
