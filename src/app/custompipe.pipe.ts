import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args){
      console.log(args);
      return value.filter((listing:any)=>listing.name.toLowerCase().indexOf(args.toLowerCase())==0)
    }else{
      return value;
    }
  }

}
