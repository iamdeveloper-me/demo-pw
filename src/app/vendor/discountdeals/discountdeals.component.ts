import { apiPath } from './../../shareApi/apiPath';
import { Component, OnInit,ViewChild } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-discountdeals',
  templateUrl: './discountdeals.component.html',
  styleUrls: ['./discountdeals.component.scss']
})
export class DiscountdealsComponent implements OnInit {
  url = apiPath.url;
  selected = "all";
  editdeal_dailog = false;  
  dealservice = false;
  createdeal_dailog = false;
  discount:any = [];
  update_end_date;
  update_start_date;
  updiscount:any = [];
  noDiscount:boolean =  false;
  upgradeMsg=''
  upgradeMembership:boolean = false;
  Supplierdiscount:any = [];

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
  recentmydeal:any = [];
  readioSelected_serv:boolean;
  ram:boolean =false
  basicplan:number
  constructor(public http: Http,public toastr: ToastrService, private router: Router  ) {
    this.basicplan = JSON.parse(localStorage.getItem('basic-plan'));

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
     this.http.get(this.url+'api/LookupMaster/discounts',{headers:headers}).subscribe(data =>{  
       console.log(data.json());
       this.discount = data.json();
     })
     this.http.get(this.url+'api/Supplier/discount',{headers:headers}).subscribe(data =>{  
      console.log(data.json());
     this.Supplierdiscount = data.json();
     this.disTitle =   this.Supplierdiscount.title ;
     if(this.Supplierdiscount.length == 0 ){
     
      this.Supplierdiscount.title = "No Discounts Applied" ;
      
     }
    },
    e=>{
      
     if(e.status == 400){
      // this.toastr.error(JSON.parse(e._body)['no_discount'][0])
      this.noDiscount = true;
     }
    })
    this.http.get(this.url+'api/Supplier/mydeals',{headers:headers}).subscribe(data =>{  
     
     this.recentmydeal = data.json();
     console.log( this.recentmydeal);
    })
       
  }
  @ViewChild('createdeal') validationForm: FormGroup;
open(c){
        console.log(c);
       
}
updatedis(service){
  



  this.dealservice = false;
  console.log(service.value.select);
  console.log(service.value.select.title);
//  this.disTitle = service.value.select.title;

  let headers = new Headers();
  var authToken = localStorage.getItem('userToken');
  var id = service.value.select.discountId;
  const a = {
              discountId: service.value.select.discountId,
              title:  service.value.select.title,
              discount: service.value.select.discount
             }
         
  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json');
  headers.append("Authorization",'Bearer '+authToken);
this.http.post('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/updatediscount?DiscountId'+'='+id, 
   a,{headers:headers}).subscribe(
    data =>{  
    console.log(data.json());
    this.noDiscount = false;
    this.disTitle = service.value.select.title;

   this.toastr.success("Discount updated successfully."); 
    this.dealservice = false;
   this.updiscount = data.json();
  },error => {console.log(error);
    this.noDiscount = true;
    
    if(error.status == 400){
      
      this.upgradeMsg = JSON.parse(error._body)["upgrade_membership"][0] 
      this.upgradeMembership = true;


      swal({
        // title: "Are you sure to change membership plan?",
        title: "Free Plan",
        text: this.upgradeMsg,
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-default",
        confirmButtonText: "Yes, Upgrade Now!",
        cancelButtonText: "Remind Me Later!",
    }).then((res)=>{
     
                    if(res.value===true){
                      this.router.navigate(['../vendor/membership'])
                   }else{
                    
                          this.toastr.warning(JSON.parse(error._body)["upgrade_membership"][0]);
                    }
    },error=>{
      alert(JSON.stringify(error));
    })
    return;
        
    
    }
    this.toastr.warning(error);
  })
 
} 
createdeals(createdeal){
this.ram = true
  let headers = new Headers();
  var authToken = localStorage.getItem('userToken');
 
  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json');
  headers.append("Authorization",'Bearer '+authToken);
  const a = {
    dealId: 0,
    title: createdeal.value.title,
    conditions: createdeal.value.Condition ,
    startDate: createdeal.value.startdate ,
    endDate: createdeal.value.EndDate ,
    neverExpire: createdeal.value.neverExpire

  }

  console.log(a);
  this.http.post(this.url+'api/Supplier/createupdatedeals',a,{headers:headers}).subscribe(
    data =>{  
      
      if(data.status == 200)      {        
        this.createdeal_dailog = false;       
        console.log("saved");  
        this.ram =false    
    }


      console.log(data.json());   
createdeal.reset();
      this.http.get(this.url+'api/Supplier/mydeals',{headers:headers}).subscribe(data =>{  
     
        this.recentmydeal = data.json();
        console.log( this.recentmydeal);
       })

      this.toastr.success(" New Deal is created");
      console.log( this.recentmydeal); 
    },error => {console.log(error); 
      this.toastr.warning(error._body.split('[')[1].split(']')[0])
                    
      
      })
 
}
openupdatedeal(data){
  
  console.log(data);

  this.updatemydeal = data ;
  if(data.endDate != null){
    this.update_end_date = data.endDate.split('T')[0];
  }
  if(data.startDate != null){
    this.update_start_date =data.startDate.split('T')[0];
  }
 
  
}
updatedeal(info){
                   
                    console.log(info);
                    let headers = new Headers();
                    var authToken = localStorage.getItem('userToken');

                    headers.append('Accept', 'application/json')
                    headers.append('Content-Type', 'application/json');
                    headers.append("Authorization",'Bearer '+authToken);
                    
                    const upc = {
                      dealId: info.value.dealId,
                      title: info.value.update_title ,
                      conditions: info.value.Condition,
                      startDate: info.value.Start_date,
                      endDate: info.value.End_date,
                      neverExpire: info.value.optradio
                    }
                    console.log(upc);
                    this.http.post(this.url+'api/Supplier/createupdatedeals',upc,{headers:headers}).subscribe(
                      data =>{  
                      console.log(data.json());
                      this.toastr.success(" Your deal is  updated successfully.");

                      this.http.get(this.url+'api/Supplier/mydeals',{headers:headers}).subscribe(data =>{  
     
                        this.recentmydeal = data.json();
                        console.log( this.recentmydeal);
                       })
                       this.editdeal_dailog = false;  
                    },error => {console.log(error);
                      this.toastr.warning(error._body.split('[')[1].split(']')[0])
                    
                    })

}
deletedeals(a ,index){

              swal({
                      title: "Are you sure?",
                      text: "You will not be able to recover this imaginary file!",
                      type: "warning",
                      showCancelButton: true,
                      confirmButtonClass: "btn-default",
                      confirmButtonText: "Yes, delete it!",
                      cancelButtonText: "No, cancel plx!",
              }).then((res)=>{
                                console.log(res);
                                if(res.value===true){
                                                       
                                                        console.log(a);
                                                      let headers = new Headers();
                                                      var authToken = localStorage.getItem('userToken');
                                                      headers.append('Accept', 'application/json')
                                                      headers.append('Content-Type', 'application/json');
                                                      headers.append("Authorization",'Bearer '+authToken);
                                                      const aaa = {
                                                                    dealId: a.dealId,
                                                                    title: a.title,
                                                                    conditions: a.conditions,
                                                                    startDate: a.startDate,
                                                                    endDate: a.endDate,
                                                                    neverExpire: a.neverExpire
                                                         }
                                                    console.log(aaa);
                                                    this.recentmydeal.splice(index,1);
                                                    this.http.post(this.url+'api/Supplier/deletedeal',aaa,{headers:headers}).subscribe(
                                                      data =>{  
                                                      console.log(data.json());
                                                      this.toastr.success(" Your deal is  delete successfully.");
                                                    }, error => { console.log(error) });
                                                    alert(JSON.stringify(res));
                                }else{
                               
                                }
                                },error=>{
                                  alert(JSON.stringify(error));
              })
              return;
}
closeModel(){  
  this.ram  = false       
    this.editdeal_dailog = false;  
    this.createdeal_dailog = false;
    this.dealservice = false;
}

  
changePlan(){
  if(this.noDiscount){
    swal({
      // title: "Are you sure to change membership plan?",
      title: "Free Plan",
      text: this.upgradeMsg,
      type: "warning",
      showCancelButton: true,
      confirmButtonClass: "btn-default",
      confirmButtonText: "Yes, Upgrade Now!",
      cancelButtonText: "Remind Me Later!",
  }).then((res)=>{
   
                  if(res.value===true){
                    this.router.navigate(['../vendor/membership'])
                 }else{
                   
                        this.toastr.warning(this.upgradeMsg);
                  }
  },error=>{
    alert(JSON.stringify(error));
  })
  return;
      
  
  } 
  }
  
  
noDealSwal(){
  swal({
    // title: "Are you sure to change membership plan?",
    title: "Free Plan",
    text:'Free Membership cannot create Deals and Discount',
    type: "warning",
    showCancelButton: true,
    confirmButtonClass: "btn-default",
    confirmButtonText: "Yes, Upgrade Now!",
    cancelButtonText: "Remind Me Later!",
}).then((res)=>{

                if(res.value===true){
                  this.router.navigate(['../vendor/membership'])
               }else{
                  
                      // this.toastr.warning('Free Membership cannot create Deals and Discount');
                }
},error=>{
  alert(JSON.stringify(error));
})
return; 
}  
}


 
// 1. /api/LookupMaster/discounts get done 
// 2. /api/Supplier/discount  grt  done
// 3. /api/Supplier/updatediscount   post  done
// 4. /api/Supplier/mydeals  get 
// 5. /api/Supplier/createupdatedeals post  done