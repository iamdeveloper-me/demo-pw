import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'photo'
})
export class PhotoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value)
    if(value){
      if(args == 'all'){
        return value
      }else{
        return value.filter((listing:any)=>listing.topic.toLowerCase().includes(args.toLowerCase()));
      }
    }
    return value;
  }

}