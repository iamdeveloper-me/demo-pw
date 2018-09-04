import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {
fname = "Vega";
lname = "Armoogum";
pno = "9826812185";
email = 'hdh@gmail.com' ;
site = 'dbshjf.com' ;
about = 'test';
payment = '12$';
 constructor(private router: Router,public http: Http ) { }
 private url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/myprofile'
 vendor: any = {};

  ngOnInit() {   
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');


    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
    if(!authToken) 
   {  this.router.navigate(['../home']);
    }
    this.http.get(this.url,{headers:headers}).subscribe(
      data =>{ this.vendor = data.json();
               console.log(this.vendor);
             });
  }

}
