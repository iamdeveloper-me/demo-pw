import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'photo'
})
export class PhotoPipe implements PipeTransform {



  transform(value: any, args?: any): any {

    if(value){
      if(args == undefined){
        return value
      }else{
        return value.filter((listing:any)=>listing.nameOfBusiness.toLowerCase().includes(args.toLowerCase()));
      }
    }
    return value;
  }

}