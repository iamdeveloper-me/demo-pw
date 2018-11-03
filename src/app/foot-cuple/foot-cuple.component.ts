import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foot-cuple',
  templateUrl: './foot-cuple.component.html',
  styleUrls: ['./foot-cuple.component.scss']
})
export class FootCupleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   $.getScript('./assets/js/curosselfun.js');
   
  
  }

}
