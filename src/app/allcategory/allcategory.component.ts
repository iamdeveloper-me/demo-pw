import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allcategory',
  templateUrl: './allcategory.component.html',
  styleUrls: ['./allcategory.component.scss']
})
export class AllcategoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
 	$.getScript('./assets/js/stopExecutionOnTimeout.js');
 	$.getScript('./assets/js/aos.js');
  }


}

