import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topic'
})
export class TopicPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(value){
      if(args == 'all'){
        return value
      }else{
        return value.filter((listing:any)=>listing['blogTopic'].topic.toLowerCase().includes(args.toLowerCase()));
      }
    }
    return value;
  }

}
