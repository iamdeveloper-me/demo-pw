import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute} from '@angular/router';
import { Http,Headers } from '@angular/http';
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  private success: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/ProcessPayment/completetransaction'
 
  constructor(private activatedRoute: ActivatedRoute,public http: Http) {   this.activatedRoute.queryParams.subscribe(params => {
    
      let headers = new Headers();
      var authToken = localStorage.getItem('userToken');
      headers.append('Accept', 'application/json')
      headers.append('Content-Type', 'application/json');
      headers.append("Authorization",'Bearer '+authToken);
      this.http.post(this.success,
        {
          guid: params.guid ,
          payerID: params.PayerID ,
          paymentId: params.paymentId,
          token: params.token 
        }
    ,
    {headers:headers}).subscribe(data =>{
 
     },error => {console.log(error)});


  });
 
}

  ngOnInit() {

 
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');
 

}
  }
  
  

