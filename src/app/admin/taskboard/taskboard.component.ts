import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss']
})
export class TaskboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	   $.getScript('https://static.codepen.io/assets/common/stopExecutionOnTimeout-41c52890748cd7143004e05d3c5f786c66b19939c4500ce446314d1748483e13.js');
 	   $.getScript('./assets/js/dragdrop.js');
 	   $.getScript('./assets/js/taskboard.js');	
 }

}





