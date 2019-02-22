import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args){
    //  return value.filter((listing:any)=>listing.name.toLowerCase().indexOf(args.toLowerCase())==0)
    if(value[0].name){
      return value.filter((listing:any)=>listing.name.toLowerCase().includes(args.toLowerCase()));
    }
    else{
      return value.filter((listing:any)=>listing.title.toLowerCase().includes(args.toLowerCase()));
    }
    }else{
      return value;
    }
  }

}
