import { Component, OnInit } from '@angular/core';
import { BusinessService } from 'app/ngservices/business.service';
import { apiService } from 'app/shared/service/api.service';
import { Meta , Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[BusinessService]
})
export class HomeComponent implements OnInit {

  
  constructor(private bs: BusinessService,private meta : Meta,private title : Title) {
    // this.meta.addTag({ name: 'description', content: 'Perfect Weddings |Best Wedding Suppliers in Mauritius' });    
  }

  ngOnInit() {
    this.title.setTitle('Perfect Weddings |Best Wedding Suppliers in Mauritius');    
    this.meta.addTag({name:'description',content:'Perfect Weddings |Best Wedding Suppliers in Mauritius'});    

  // sessionStorage.clear()
  if(window.location.pathname == '/home' )
  { $("body").removeClass( "modal-open");
   
    $("body").css({ 'padding-right' : '' });
  }
   
}


  
  
}
