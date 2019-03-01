import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eventsearch'
})
export class EventsearchPipe implements PipeTransform {



  transform(value: any, args?: any): any {

    if(value){
      if(args == undefined){
        return value
      }else{
        return value.filter((listing:any)=>listing.eventTitle.toLowerCase().includes(args.toLowerCase()));
      }
    }
    return value;
  }

}



@Pipe({
  name: 'eventsearchlocation'
})
export class EventsearchlocationPipe implements PipeTransform {



  transform(value: any, args?: any): any {

    if(value){
      if(args == undefined){
        return value
      }else{
        return value.filter((listing:any)=>listing.eventTitle.toLowerCase().includes(args.toLowerCase()));
      }
    }
    return value;
  }

}

@Pipe({
  name: 'eventsearchentry'
})
export class EventsearchentryPipe implements PipeTransform {



  transform(value: any, args?: any): any {

    if(value){
      if(args == undefined || args === 'All'){
        return value
      }else{
        return value.filter((listing:any)=>listing.git branch.toLowerCase().includes(args.toLowerCase()));
      }
    }
    return value;
  }

}

// @Pipe({
//   name: 'eventsearchentrydate'
// })
// export class EventsearchdatePipe implements PipeTransform {



//   transform(value: any, args?: any): any {

//     // if(value){
//     //   if(args == undefined || args === 'All'){
//     //     return value
//     //   }else{
//     //     return value.filter((listing:any)=>listing.entry.toLowerCase().includes(args.toLowerCase()));
//     //   }
//     // }
//     return value;
//   }

// }