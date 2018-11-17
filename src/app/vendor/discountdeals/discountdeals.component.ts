import { Component, OnInit } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-discountdeals',
  templateUrl: './discountdeals.component.html',
  styleUrls: ['./discountdeals.component.scss']
})
export class DiscountdealsComponent implements OnInit {

  editdeal_dailog = false;  
  createdeal_dailog = false;
  private discountGet: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/LookupMaster/discounts'
  discount:any = [];
  
  private updatediscountPost: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/updatediscount'
  updiscount:any = [];

  private SupplierdiscountGet: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/discount'
  Supplierdiscount:any = [];

  private deal: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/createupdatedeals'
  title;
  disTitle;
  createdial = false;
  createdeal:{dealId: 0,  title: "",  conditions: "",  startDate: "", endDate: "", neverExpire: true};
  updatemydeal:any = {
    title: "",
    conditions: "",
    startDate: "",
    endDate: "",
    neverExpire: true
  };
  private mydeal: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/mydeals'
  recentmydeal:any = [];
  readioSelected_serv:boolean;
  constructor(public http: Http,public toastr: ToastrService) {
   
   }

  ngOnInit() {
  $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');



    $(".close").click(function(){
        $(".alert").hide();
     });

     $(".gallery").click(function(){
        $(".homegallerybox").show();
        $(".prioritybox").hide();
        $(".audiencebox").hide();
        $(".dealsbox").hide();
        $(".homebannerbox").hide();
     });
      $(".priority").click(function(){
        $(".homegallerybox").hide();
        $(".prioritybox").show();
        $(".audiencebox").hide();
        $(".dealsbox").hide();
        $(".homebannerbox").hide();
     });
      $(".audience").click(function(){
        $(".homegallerybox").hide();
        $(".prioritybox").hide();
        $(".audiencebox").show();
        $(".dealsbox").hide();
        $(".homebannerbox").hide();
     });
      $(".deals").click(function(){
        $(".homegallerybox").hide();
        $(".prioritybox").hide();
        $(".audiencebox").hide();
        $(".dealsbox").show();
        $(".homebannerbox").hide();
     });
      $(".homebanner").click(function(){
        $(".homegallerybox").hide();
        $(".prioritybox").hide();
        $(".audiencebox").hide();
        $(".dealsbox").hide();
        $(".homebannerbox").show();
     });

     let headers = new Headers();
     var authToken = localStorage.getItem('userToken');
     
     headers.append('Accept', 'application/json')
     headers.append('Content-Type', 'application/json');
     headers.append("Authorization",'Bearer '+authToken);
     this.http.get(this.discountGet,{headers:headers}).subscribe(data =>{  
       console.log(data.json());
       this.discount = data.json();
     })
     this.http.get(this.SupplierdiscountGet,{headers:headers}).subscribe(data =>{  
      console.log(data.json());
     this.Supplierdiscount = data.json();
     this.disTitle =   this.Supplierdiscount.title ;
     if(this.Supplierdiscount.length == 0 ){
       alert("dcds");
      this.Supplierdiscount.title = "No Discounts Applied" ;
     }
    })
    this.http.get(this.mydeal,{headers:headers}).subscribe(data =>{  
     
     this.recentmydeal = data.json();
     console.log( this.recentmydeal);
    })
       
  }

open(c){console.log(c);}

updatedis(service){
  this.createdial = false;
  console.log(service.value.select);
  console.log(service.value.select.title);
 this.disTitle = service.value.select.title;

  let headers = new Headers();
  var authToken = localStorage.getItem('userToken');
  var id = service.value.select.discountId;

  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json');
  headers.append("Authorization",'Bearer '+authToken);
this.http.post('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/updatediscount?DiscountId'+'='+id, {Title: service.value.select.title ,Discount: service.value.select.discount
},{headers:headers}).subscribe(
    data =>{  
    console.log(data.json());
   this.toastr.success("Discount updated successfully."); 
    this.createdial = false;
   this.updiscount = data.json();
  },error => {console.log(error)})
 


} 


createdeals(createdeal){
  console.log(createdeal.value);
  let headers = new Headers();
  var authToken = localStorage.getItem('userToken');
 
  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json');
  headers.append("Authorization",'Bearer '+authToken);
  console.log(createdeal.value.EndDate);
  console.log(createdeal.value.startdate);
  this.http.post(this.deal,{
    dealId: 0,
    title: createdeal.value.title,
    conditions: createdeal.value.Condition ,
    startDate: createdeal.value.startdate ,
    endDate: createdeal.value.EndDate ,
    neverExpire: createdeal.value.neverExpire

  },{headers:headers}).subscribe(
    data =>{  
      
      if(data.status == 200)      {        
        this.createdeal_dailog = false;       
        console.log("saved");      
    }





      console.log(data.json());   
      
      this.recentmydeal.unshift({dealId: data.json().id ,
        conditions:  createdeal.value.Condition ,
        endDate:  createdeal.value.EndDate,
        endDateString: createdeal.value.EndDate,
        neverExpire : createdeal.value.neverExpire,
        startDate : createdeal.value.EndDate,
        startDateString :  createdeal.value.EndDate,
        status:"Active",
        title  :  createdeal.value.title });
      this.toastr.success(" New Deal is created");
      console.log( this.recentmydeal); 
    },error => {console.log(error);  this.toastr.warning(error);})
 
}

openupdatedeal(data){
  
  console.log(data);

  this.updatemydeal = data ;
}
  updatedeal(info){alert("sdfvsv");
  console.log(info);
  let headers = new Headers();
  var authToken = localStorage.getItem('userToken');

  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json');
  headers.append("Authorization",'Bearer '+authToken);

  this.http.post(this.deal,{
    dealId: info.value.dealId,
    title: info.value.update_title ,
    conditions: info.value.Condition,
    startDate: info.value.Start_date,
    endDate: info.value.End_date,
    neverExpire: true
  },{headers:headers}).subscribe(
    data =>{  
    console.log(data.json());
    this.toastr.success(" Your deal is  updated successfully.");


  },error => {console.log(error.json().invalid_start_date );
     this.toastr.warning(error.json().invalid_start_date);})



  }


  closeModel(){         
    this.editdeal_dailog = false;  
    this.createdeal_dailog = false;
    this.createdial = false;
  }



  
}


 
// 1. /api/LookupMaster/discounts get done 
// 2. /api/Supplier/discount  grt  done
// 3. /api/Supplier/updatediscount   post  done
// 4. /api/Supplier/mydeals  get 
// 5. /api/Supplier/createupdatedeals post  done