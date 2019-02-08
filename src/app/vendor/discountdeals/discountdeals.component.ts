import { apiPath } from './../../shareApi/apiPath';
import { Component, OnInit,ViewChild } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { ImageuploadService } from 'app/shared/service/vendor/imageupload.service';

import { FileUploader ,FileItem} from 'ng2-file-upload/ng2-file-upload';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({
  selector: 'app-discountdeals',
  templateUrl: './discountdeals.component.html',
  styleUrls: ['./discountdeals.component.scss']
})
export class DiscountdealsComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: URL,
    isHTML5: true
  });
  url = apiPath.url;
  create_start_date;
  customDay;
  isDisabled;
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
  imageToUpload: any;
  title;
  disTitle;
  createdial = false;
  selectedFile: ImageSnippet;
  image_data = {}; 
  createdeal:{dealId: 0,  title: "",  conditions: "",  startDate: "", endDate: "", neverExpire: true};
  updatemydeal:any = {
    title: "",
    conditions: "",
    startDate: "",
    endDate: "",
    neverExpire: true,
    discountType:"",
    discount: ''
  };
  discountTypeList = [ 
  {
    name: "Percentage",
    value: 0,
    isSelected: true
  },
  {
    name: "Ammount",
    value: 1,
    isSelected: false
  }]
  selectedDiscountType : string = ''
  recentmydeal:any = [];
  readioSelected_serv:boolean;
  ram:boolean =false
  basicplan:number
  constructor(public imageService : ImageuploadService,public http: Http,public toastr: ToastrService, private router: Router  ) {
    this.basicplan = JSON.parse(localStorage.getItem('basic-plan'));

   }

  ngOnInit() {
  $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');

     $('.selectwet').on("focus", function(){
        $(".selectlabel").addClass("bottomtik");
      });

      $('.selectwet').on("focusout", function(){
        if($(this).val() === null){
          $(".selectlabel").removeClass("bottomtik");
        }
      });
      

      $('.selectwet1').on("focus", function(){
        $(".selectlabel1").addClass("bottomtik");
      });

      $('.selectwet1').on("focusout", function(){
        if($(this).val() === null){
          $(".selectlabel1").removeClass("bottomtik");
        }
      });


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
    
       this.discount = data.json();
     })
     this.http.get(this.url+'api/Supplier/discount',{headers:headers}).subscribe(data =>{  
    
     this.Supplierdiscount = data.json();
     this.disTitle =   this.Supplierdiscount.title ;
     if(this.Supplierdiscount.length == 0 ){
     
      this.Supplierdiscount.title = "No Discounts Applied" ;
      
     }
    },
    e=>{
      
     if(e.status == 400){
     
      this.noDiscount = true;
     }
    })
    this.http.get(this.url+'api/Supplier/mydeals',{headers:headers}).subscribe(data =>{  
     
     this.recentmydeal = data.json();
   
    })
       
  }
  @ViewChild('createdeal') validationForm: FormGroup;

  onItemChange(item){
this.discountTypeList.forEach(element => {if(element == item){element["isSelected"] = true}else{element["isSelected"] = false}});}
updatedis(service){
  this.dealservice = false;
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
   if(createdeal.value.neverExpire == true){
   

    createdeal.value.Start_date =  createdeal.value.Start_date["year"]+'-'+createdeal.value.Start_date["month"]+'-'+createdeal.value.Start_date["day"]

    const a = {
      dealId: 0,
      title: createdeal.value.title,
      conditions: createdeal.value.Condition ,
      startDate: createdeal.value.Start_date ,
      endDate:   "2018-12-13T13:14:59.522Z" ,
      neverExpire: createdeal.value.neverExpire
  
    }

    this.create_deal_api(a)
    createdeal.reset();
   }else{
    createdeal.value.Start_date =  createdeal.value.Start_date["year"]+'-'+createdeal.value.Start_date["month"]+'-'+createdeal.value.Start_date["day"]
    createdeal.value.End_date =  createdeal.value.End_date["year"]+'-'+createdeal.value.End_date["month"]+'-'+createdeal.value.End_date["day"]
    
    const a = {
      dealId: 0,
      title: createdeal.value.title,
      conditions: createdeal.value.Condition ,
      startDate: createdeal.value.Start_date ,
      endDate: createdeal.value.End_date ,
      neverExpire: createdeal.value.neverExpire
  
    }

    this.create_deal_api(a);
    createdeal.reset();
   }


  

  
 
}


create_deal_api(a){
  let headers = new Headers();
  var authToken = localStorage.getItem('userToken');
  headers.append('Accept', 'application/json')
  headers.append('Content-Type', 'application/json');
  headers.append("Authorization",'Bearer '+authToken);
  this.http.post(this.url+'api/Supplier/createupdatedeals',a,{headers:headers}).subscribe(
    data =>{  
      
      if(data.status == 200)      {        
        this.createdeal_dailog = false;       
      
        this.ram =false    
    }

      this.http.get(this.url+'api/Supplier/mydeals',{headers:headers}).subscribe(data =>{  
     
        this.recentmydeal = data.json();
    
       })

      this.toastr.success(" New Deal is created");
    },error => {console.log(error); 
      this.toastr.warning(error._body.split('[')[1].split(']')[0])
                    
      
      })
}
openupdatedeal(data){

  this.updatemydeal = data ;
  if(data.endDate != null){
    this.update_end_date = data.endDate.split('T')[0];

    this.update_end_date =  { "year": parseInt(data.endDate.split('T')[0].split('-')[0])   , 
                                    "month": parseInt(data.endDate.split('T')[0].split('-')[1])  ,
                                    "day": parseInt(data.endDate.split('T')[0].split('-')[2])}

  }
  if(data.startDate != null){
    this.update_start_date =data.startDate.split('T')[0];

    this.update_start_date =  { "year": parseInt(data.startDate.split('T')[0].split('-')[0])   , 
                                    "month": parseInt(data.startDate.split('T')[0].split('-')[1])  ,
                                    "day": parseInt(data.startDate.split('T')[0].split('-')[2])}

  }
 
  
}
fileChangeListener($event) {
  var image: any = new Image();
  var file: File = $event.target.files[0];
  var myReader: FileReader = new FileReader();
  var that = this;
  myReader.onloadend = function (loadEvent: any) {
    image.src = loadEvent.target.result;
   // that.cropper.setImage(image);
   console.log(image);
  };
  myReader.readAsDataURL(file);
  console.log(myReader);
}
updatedeal(info){
           
                    let headers = new Headers();
                    var authToken = localStorage.getItem('userToken');

                    headers.append('Accept', 'application/json')
                    headers.append('Content-Type', 'application/json');
                    headers.append("Authorization",'Bearer '+authToken);
                    info.value.Start_date =  info.value.Start_date["year"]+'-'+info.value.Start_date["month"]+'-'+info.value.Start_date["day"]
                    if(info.value.End_date != undefined){
                      info.value.End_date =  info.value.End_date["year"]+'-'+info.value.End_date["month"]+'-'+info.value.End_date["day"]
                    }
                    this.discountTypeList.forEach(item=>{
                      if(item['isSelected'] == true){
                        debugger
                        this.selectedDiscountType  = item['name']
                      }
                    })
                 

                    const upc = {
                      dealId: info.value.dealId,
                      title: info.value.update_title ,
                      conditions: info.value.Condition,
                      startDate: info.value.Start_date+"T07:15:14.972Z",
                      endDate: info.value.End_date != undefined ? info.value.End_date+'T07:15:14.972Z': null,
                      neverExpire: info.value.optradio,
                      discountType:  this.selectedDiscountType,
                      discount : info.value.update_discount
                    }
                   
                    this.http.post(this.url+'api/Supplier/createupdatedeals',upc,{headers:headers}).subscribe(
                      data =>{  
                     
                      this.toastr.success(" Your deal is  updated successfully.");

                      this.http.get(this.url+'api/Supplier/mydeals',{headers:headers}).subscribe(data =>{  
     
                        this.recentmydeal = data.json();
                       
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
                             
                                if(res.value===true){
                                                       
                                                      
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
                                                   
                                                    this.recentmydeal.splice(index,1);
                                                    this.http.post(this.url+'api/Supplier/deletedeal',aaa,{headers:headers}).subscribe(
                                                      data =>{  
                                                    
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

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}
 
// 1. /api/LookupMaster/discounts get done 
// 2. /api/Supplier/discount  grt  done
// 3. /api/Supplier/updatediscount   post  done
// 4. /api/Supplier/mydeals  get 
// 5. /api/Supplier/createupdatedeals post  done