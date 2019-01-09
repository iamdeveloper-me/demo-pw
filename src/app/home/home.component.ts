import { Component, OnInit } from '@angular/core';
import { BusinessService } from 'app/ngservices/business.service';
import { apiService } from 'app/shared/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[BusinessService]
})
export class HomeComponent implements OnInit {

  
  constructor(private bs: BusinessService) { 
    
  }

  ngOnInit() {

   
  if(window.location.pathname == '/home' )
  { $("body").removeClass( "modal-open");
   
    $("body").css({ 'padding-right' : '' });
  }
   
}


  
  
}
