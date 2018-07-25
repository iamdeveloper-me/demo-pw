import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit() { $("div").click(function(){
    
    $("div").removeClass( "modal-backdrop");
  });  
  $("li").removeClass("user");
  $("#login").hide();

  }
 
}
