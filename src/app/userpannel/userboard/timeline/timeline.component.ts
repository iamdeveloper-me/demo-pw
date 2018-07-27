import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
    

  $("li").removeClass("user");
  $("#login").hide();
  
  if(window.location.pathname == '/User/Timeline' )
  { $("body").removeClass( "modal-open");
    $("div").removeClass( "modal-backdrop");
    $("body").css({ 'padding-right' : '' });
  }
  }
 
}
