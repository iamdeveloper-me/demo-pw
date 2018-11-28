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
  dataArray:string[];
  dataArray1:string[];
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


  
    }     
    //NgOnInit End
    
// a= "all";
// b="Business Pormotion";
// c="Membership Plan";
// type(e){
//   console.log(e);
//   return e;
// }
  
invoice(data){
  console.log(data);
  let headers = new Headers();
  var authToken = localStorage.getItem('userToken');
  var authId = localStorage.getItem('userId');
  const inc =
  {
    startDate: data.value.startDate,
    endDate: data.value.endDate,
    userId: authId,
    invoiceId: data.value.invoiceId,
    invoiceType: data.value.invoiceType
  }
  console.log(inc);

  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json');
  headers.append("Authorization",'Bearer '+authToken);
  // this.invoiceData = data.json() as string[]; 
  this.http.post(this.invoiceurl,inc,{headers:headers}).subscribe(
    data =>{
      this.dataArray = data.json() as string[]; 
         console.log(this.dataArray);
            //  console.log(data.json());
            //  console.log(data);
             this.toastr.success("Update sucessfully");
    },error=>{console.log(error)});

}

}
