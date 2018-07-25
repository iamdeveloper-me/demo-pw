import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inspirations',
  templateUrl: './inspirations.component.html',
  styleUrls: ['./inspirations.component.scss']
})
export class InspirationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {   $("li").removeClass("user");
  $("#login").hide();
  }

}
