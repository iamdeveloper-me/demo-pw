import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {


  if(window.location.pathname == '/home' )
  { $("body").removeClass( "modal-open");
   
    $("body").css({ 'padding-right' : '' });
  }
   
}


  
  
}
