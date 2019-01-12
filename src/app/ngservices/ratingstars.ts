export class ratingStars{
Str1: string = '<span class="fa fa-star"></span><span class="fa fa-star-o"></span><span class="fa fa-star-o"></span><span class="fa fa-star-o"></span><span class="fa fa-star-o"></span>';
  Str1_5: string = '<span class="fa fa-star"></span><span class="fa fa-star-half-o"></span><span class="fa fa-star-o"></span><span class="fa fa-star-o"></span><span class="fa fa-star-o"></span>';
  Str2: string = '<span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star-o"></span><span class="fa fa-star-o"></span><span class="fa fa-star-o"></span>';
  Str2_5: string = '<span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star-half-o"></span><span class="fa fa-star-o"></span><span class="fa fa-star-o"></span>';
  Str3: string = '<span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star-o"></span><span class="fa fa-star-o"></span>';
  Str3_5:string='<span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star-half-o"></span><span class="fa fa-star-o"></span>';
  Str4:string='<span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star-o"></span>';
  Str4_5:string='<span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star-half-o"></span>';
  Str5:string='<span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>';
  printStars(rating){
    let Stars=''
    switch(rating){
      case 1: 
      Stars= this.Str1; break;
      case 1.5: Stars= this.Str1_5; break;
      case 2: Stars= this.Str2; break;
      case 2.5: Stars= this.Str2_5; break;
      case 3: Stars= this.Str3; break;
      case 3.5: Stars= this.Str3_5; break;
      case 4: Stars= this.Str4; break;
      case 4.5: Stars= this.Str4_5; break;
      case 5: Stars= this.Str5; break;
      default:
      break;
    }
    return Stars;
  }
}