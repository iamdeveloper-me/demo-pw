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

  dataArray:undefined[];
  dataArray1:{paymentDate:'',paymentType: '' ,customerDetails:{emailaddress:'' ,firstName:''}};

  invoice_length:number;
  private invoiceurl : string = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/myinvoices'
  invoiceData : any = {};
  // invoiceData : any = {
  //   startDate : '',
  //   endDate: '',
  //   invoiceId:'',
  //   userId:'',
  // };
  all;
  BusinessPromotion;
  MembershipPlan;
  ngOnInit() {
  	  $.getScript('http://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js');
      $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
      $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
      $.getScript('http://code.jquery.com/jquery-1.11.1.min.js');
      $.getScript('https://code.jquery.com/ui/1.12.1/jquery-ui.js');
      $.getScript('./assets/js/vendorsidebar.js');
      $.getScript('"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"');

      
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
    invoiceId: '',
    invoiceType: ""
  }
  console.log(inc);

  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json');
  headers.append("Authorization",'Bearer '+authToken);
  // this.invoiceData = data.json() as string[]; 
  this.http.post(this.invoiceurl,inc,{headers:headers}).subscribe(
    data =>{
      this.dataArray = data.json(); 
      this.invoice_length = this.dataArray.length
             console.log(this.dataArray);
            //  console.log(data.json());
             this.toastr.success("Search sucessfully");
    },error=>{console.log(error)});

}


  
    //NgOnInit End

// postData(f){
//   console.log(f);
//   let headers = new Headers();
//   var authToken = localStorage.getItem('userToken');
//   headers.append('Accept', 'application/json')
//   headers.append('Content-Type', 'application/json');
//   headers.append("Authorization",'Bearer '+authToken);
//   const update =
//     {
//       startDate: f.value.startDate,
//       endDate: f.value.endDate,
//       invoiceId: f.value.invoiceId,
//       userId: f.value.userId
//     }

//   console.log(update);
//   this.http.post(this.invoiceurl,update,{headers:headers}).subscribe(
//     data =>{ 
//       // this.vendor = data.json();
//    
//       this.toastr.success("Update sucessfully");
       
//   },error=>{console.log(error)});
// }
invoiceDataFunction(s_data){
console.log(s_data);
this.dataArray1 = (s_data)
console.log(this.dataArray1)
}
}

