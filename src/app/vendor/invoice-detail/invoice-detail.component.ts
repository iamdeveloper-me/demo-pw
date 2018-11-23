import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss']
})
export class InvoiceDetailComponent implements OnInit {

  constructor(public http: Http ,private router: Router, public toastr: ToastrService) { }

  private invoiceurl : string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/myinvoices'
  invoiceData : any = {};
  // invoiceData : any = {
  //   startDate : '',
  //   endDate: '',
  //   invoiceId:'',
  //   userId:'',
  // };

  ngOnInit() {
  	  $.getScript('http://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js');
      $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
      $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
      $.getScript('http://code.jquery.com/jquery-1.11.1.min.js');
      $.getScript('https://code.jquery.com/ui/1.12.1/jquery-ui.js');
      $.getScript('./assets/js/vendorsidebar.js');
  
    //   let headers = new Headers();
    // var authToken = localStorage.getItem('userToken');
    // headers.append('Accept', 'application/json')
    // headers.append('Content-Type', 'application/json');
    // headers.append("Authorization",'Bearer '+authToken);

    // this.http.get(this.invoiceurl,{headers:headers}).subscribe(
    //   data =>{ this.vender = data.json();
    //            console.log(this.vender);
    //   });

  
    }     //NgOnInit End

postData(f){
  console.log(f);
  let headers = new Headers();
  var authToken = localStorage.getItem('userToken');
  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json');
  headers.append("Authorization",'Bearer '+authToken);
  const update =
    {
      startDate: f.value.startDate,
      endDate: f.value.endDate,
      invoiceId: f.value.invoiceId,
      userId: f.value.userId
    }

  console.log(update);
  this.http.post(this.invoiceurl,update,{headers:headers}).subscribe(
    data =>{ 
      // this.vendor = data.json();
       alert("Updated!");
      this.toastr.success("Update sucessfully");
       
  },error=>{console.log(error)});
}
  
}
