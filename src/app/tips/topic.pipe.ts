import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topic'
})
export class TopicPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    if(value){
    return value['Entries'].filter((listing:any)=>listing.entries.toLowerCase().includes(args.toLowerCase()));
    }
    return null;
  }

}
