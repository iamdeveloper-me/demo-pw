import { Component } from '@angular/core';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})
export class TipsComponent  {

   page = 4;
   page1 = 4;
   page2 = 4;
   page3 = 4;
   page4 = 4;
   page5 = 4;
   currentPage = 2;
   currentPage1 = 2;
   currentPage2 = 2;
   isDisabled = true;

  constructor() { }

}
