import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';

@Component({
  selector: 'app-business-services',
  templateUrl: './business-services.component.html',
  styleUrls: ['./business-services.component.scss'],

})
export class BusinessServicesComponent implements OnInit {



  private urlget: string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/LookupMaster/services'
  data: any;
  // serviceArray:any= {};

  Services = [];
 
  Price = '12$';
  photo_ved = '344$'; photo_off = '45$'; travel = '233$'; payment='24$'; 
  experience = '1 Year'; photod = '24$' ;
  prewed = '556$'; studio= "45$" ;cinema = '23$'; candid = '44$ ' ;


  constructor(public http: Http)
  {

    this.data = {};
  
  }  
  




  ngOnInit() {

    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
  
    this.http.get(this.urlget,{headers:headers}).subscribe(data =>{
    
    console.log(data.json());
    this.Services = data.json() as string[]

  $.getScript('./assets/js/vertical-timeline.js');
  // $.getScript('./assets/js/profile.js'); 
  $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
  $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
  $.getScript('./assets/js/vendorsidebar.js');
  }


    )}
}

