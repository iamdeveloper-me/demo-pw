import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryPipe'
})
export class CategoryPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
   if(args){
      // return value.filter((c: any)=>c.categoryName.toLowerCase().indexOf(args.toLowerCase())==0);
    return value.filter((c:any)=> c.categoryName.toLowerCase().includes(args.toLowerCase()));
   }else{
     return value;
  }
  }

}
