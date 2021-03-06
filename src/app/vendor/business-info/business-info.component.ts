import { ProgressHttp } from 'angular-progress-http';
import { CropperSettings, ImageCropperComponent } from 'ng2-img-cropper';
import { Component, OnInit ,Input , ViewChild, NgZone, ElementRef, EventEmitter, Output,} from '@angular/core';
import { Http,Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import 'rxjs/add/operator/delay';
import { FormGroup} from '@angular/forms';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import swal from 'sweetalert2';
import { apiService } from '../../shared/service/api.service';
@Component({
  selector: 'app-business-info',
  templateUrl: './business-info.component.html',
  styleUrls: ['./business-info.component.scss'],
})

export class BusinessInfoComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  @ViewChild('businessDetails') businessDetails: ElementRef;
  @ViewChild('nameOfBusiness') nameOfBusiness: ElementRef;
  @ViewChild('fburl') fburl: ElementRef;
  @ViewChild('twurl') twurl:ElementRef;
  @ViewChild('gUrl') gUrl:ElementRef;
  @ViewChild('insUrl') insUrl:ElementRef;
  @ViewChild('pwUrl') pwUrl:ElementRef;
  @ViewChild('x') public tooltip: NgbTooltip;
  dialogname;
  progressPercentage:number = 0;
  total;
  facebookDailog = false;
  twitterDailog = false;
  instagramDailog  = false;
  googleDailog  = false;
  instagram2Dailog  = false;
  DescriptionDailog = false;
  imagecropDailog = false;
  BusinessDailog = false;
  progress = false;
  cropperupload =true;
  progress_bar:boolean = false;
  isValidFbUrl = false;
  disabletxtFburl=true;
  isVaidTwUrl = false;
  disabletxtTwurl=true;
  isValidGoogeUrl=false
  disabletxtGoogeurl=true;
  isValidInstaUrl=false;
  disabletxtInstaUrl=true;
  isValidOtherUrl=false;
  disabletxtOtherUrl=true;
  private uploadimage: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/FilesUploader/FileUploader';
  vendor: any = { nameOfBusiness: '',
    businessDetails: '',
    contactPerson: '',
    facebookURL: '',
    twitterURL: '',
    googleURL:  '',
    instalURL:'',
    perfectWeddingURL: '',
    files:{path:''}
  };
  modelfield: any = {};
  imagee:any;
  fileid;
  cropperSettings: CropperSettings;
  updatefield =    { 
                      title: "",
                      countryId: "",
                      vendorId: "",
                      country: {countryId:"",countryName: ""},
                      city: "",
                      postalCode: "",
                      address: "",
                      phone:  "",
                      mobile:   "" ,
                      sundayOpen:    "",
                      sundayClose:   "",
                      mondayOpen:     "",
                      mondayClose:    "",
                      tuesdayOpen:   "",
                      tuesdayClose:  "",
                      wednesdayOpen: "",
                      wednesdayClose:"",
                      thursdayOpen:   "",
                      thursdayClose: "",
                      fridayOpen:    "",
                      fridayClose:   "",
                      saturdayOpen:   "",
                      saturdayClose: "",
                      isFridayOpen:   "",
                      isMondayOpen: "",
                      isPrimary:      "",
                      isSaturdayOpen: "",
                      isSundayOpen:   "",
                      isThursdayOpen:"",
                      isTuesdayOpen:  "",
                      isWednesdayOpen:"",
                    }
  @ViewChild('e') validationForm: FormGroup;
  data: any;
  @ViewChild('cropper', undefined)
  cropper: ImageCropperComponent;
  fileChangeListener($event) {
    var image: any = new Image();
    var file: File = $event.target.files[0];
    var myReader: FileReader = new FileReader();
    var that = this;
    myReader.onloadend = function (loadEvent: any) {
      image.src = loadEvent.target.result;
      that.cropper.setImage(image);
    };
    myReader.readAsDataURL(file);
  }
  showSweetAlert(){
    swal({
          title: "Are you sure?",
          text: "You will not be able to recover this imaginary file!",
          type: "warning",
          showCancelButton: true,
          confirmButtonClass: "btn-danger",
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel plx!",
    }).then((res)=>{
     alert(JSON.stringify(res));
    },error=>{
    alert(JSON.stringify(error));
    })
  }

  constructor(
    private _http: ProgressHttp,
    private apiService:apiService,
    public http: Http,public toastr: ToastrService,
    public translate: TranslateService ,
    ){    
          this.cropperSettings = new CropperSettings();
          this.cropperSettings.croppedWidth =100;
          this.cropperSettings.croppedHeight = 100;
          this.cropperSettings.canvasWidth = 400;
          this.cropperSettings.canvasHeight = 200;
          this.cropperSettings.noFileInput = true;
          this.data = {};
          this.pageInitialize();
          this.apiService.getData(this.apiService.serverPath+'Supplier/myprofile').subscribe(
          data =>{ this.vendor = data;
          });
      }  
  
      /* To copy Text from Textbox */
      copyInputMessage(inputElement){
        inputElement.select();
        document.execCommand('copy');
        inputElement.setSelectionRange(0, 0);
      }

      ngOnInit() {
          //Progress Bar Icon
          $(function() {
            var current_progress = 0;
            var interval = setInterval(function() {
                current_progress += 10;
                $("#dynamic")
                .css("width", current_progress + "%")
                .attr("aria-valuenow", current_progress)
                .text(current_progress + "% Complete");
                if (current_progress >= 100)
                    clearInterval(interval);
            }, 900);
          });
      }
  
      //businessinformation 
      gallery = { files: ''}
      @ViewChild("fileInput") fileInput;

      addFile(infoo,v): void {
        this.progress = true ;
        this.cropperupload = false;
        let fi = this.fileInput.nativeElement;
          if (fi.files && fi.files[0]) {
                  
                  let fileToUpload = fi.files;
              
                  let headers = new  Headers();
                  var authToken = localStorage.getItem('userToken');
                
                  headers.append("Authorization",'Bearer '+authToken);
                  const formData = new FormData();
                  formData.append('AlbumId','2')
                  for (let image of fileToUpload){
                    formData.append(image.name,image)
                  }
                
           // Hemant  
          this._http.withUploadProgressListener(progress => {this.progress_bar = true; 
        
            this.closeModel('DescriptionDailog');this.progressPercentage = progress.percentage})
          .withDownloadProgressListener(progress => { 
    
          })
          .post(this.uploadimage, formData,{headers: headers})
          
          .subscribe( (data)=>{
            this.progress_bar = false
            this.fileid = data.json().filesId;
            this.total = 10*10;
          
            let data3=    {   
              nameOfBusiness: v.nameOfBusiness,
              businessDetails: v.businessDetails,
              fileId:    this.fileid,
              facebookURL: v.facebookURL,
              twitterURL: v.twitterURL,
              googleURL:v.googleURL,
              instalURL:v.instalURL ,
              perfectWeddingURL: v.perfectWeddingURL,
              "fbAvailable":v.fbAvailable,
              "twitterAvailable":v.twitterAvailable,
              "googleAvailable":v.googleAvailable,
              "instaAvailable":v.instaAvailable,
              "perfectWeddingAvailable":v.perfectWeddingAvailable,
            }
            
            this.apiService.postData(this.apiService.serverPath+'Supplier/updatebusinessinfo',data3).subscribe((data)=>{
                this.toastr.success(data.message);
                this.apiService.getData(this.apiService.serverPath+'Supplier/businessinfo').subscribe(data =>{            
                  
                  
                  this.imagee = data.files.path ;
                  
                  setTimeout(() => {
                    this.imagecropDailog = false;
                    }, 2000);
                  if(!data.files)
                  { 
                    this.imagee = 'https://openclipart.org/download/247324/abstract-user-flat-1.svg'}
                  else{ 
                    this.imagee = data.files.path ;
                      this.updateHeaderImg();
                    }

                });
            
                });

              
  


          });
          }
      }

      openModel(b){
                    this.modelfield = b; 
      }

      openBusinessDialog(dialogname){
        this.modelfield.nameOfBusiness=this.vendor.nameOfBusiness;
        this.modelfield.businessDetails= this.vendor.businessDetails;
        switch(dialogname){
          case 'DescriptionDailog':
          this.businessDetails.nativeElement.value = this.modelfield.businessDetails;
          this.DescriptionDailog=true;
          break;
          case 'BusinessDailog':
          this.nameOfBusiness.nativeElement.value=this.modelfield.nameOfBusiness;
          this.BusinessDailog=true;
          break;
          case 'facebookDailog':
          if(this.fburl!=undefined){
          this.fburl.nativeElement.value=this.vendor.facebookURL;}
          this.facebookDailog=true;
          break;
          case 'twitterDailog':
          if(this.twurl!=undefined){
          this.twurl.nativeElement.value=this.vendor.twitterURL;}
          this.twitterDailog=true;
          break;
          case 'googleDailog':
          if(this.gUrl!=undefined){
          this.gUrl.nativeElement.value=this.vendor.googleURL;}
          this.googleDailog=true;
          break;
          case 'instagramDailog':
          if(this.insUrl!=undefined){
          this.insUrl.nativeElement.value=this.vendor.instalURL;}
          this.instagramDailog=true;
          break;
          case 'instagram2Dailog':
          if(this.pwUrl!=undefined){
          this.pwUrl.nativeElement.value=this.vendor.perfectWeddingURL;}
          this.instagram2Dailog=true;
          break;
        }
      }

      upForm(e,data){
          
          this.vendor.businessDetails = this.businessDetails.nativeElement.value;
          this.vendor.nameOfBusiness = this.nameOfBusiness.nativeElement.value;
          
          if(this.modelfield.fbAvailable){
            this.vendor.facebookURL = this.fburl.nativeElement.value;
          }else{
            e.value.facebookURL='http://facebook.com';
          }

          if(this.modelfield.twitterAvailable){
            this.vendor.twitterURL = this.twurl.nativeElement.value;
          }else{
            e.value.twitterURL='';
          }

          if(this.modelfield.googleAvailable){
            this.vendor.googleURL = this.gUrl.nativeElement.value;          
          }else{
            e.value.googleURL='';
          }

          if(this.modelfield.instaAvailable){
          this.vendor.instalURL = this.insUrl.nativeElement.value;
          }else{
            e.value.instalURL='';
          }

          if(this.modelfield.perfectWeddingAvailable){
          this.vendor.perfectWeddingURL = this.pwUrl.nativeElement.value;
          }else{
            e.value.perfectWeddingURL='';
          }
          
            this.facebookDailog = false;
            this.twitterDailog = false;
            this.instagramDailog = false;
            this.googleDailog = false;
            this.instagram2Dailog  = false;
            this.DescriptionDailog = false;
            this.BusinessDailog = false;
            this.imagecropDailog = false;
            
                if(e.value.fbAvailable == false && !e.value.facebookURL|| 
                e.value.googleAvailable == false && !e.value.googleURL ||
                e.value.instaAvailable == false && !e.value.instalURL ||
                e.value.perfectWeddingAvailable == false && !e.value.perfectWeddingURL ||
                e.value.twitterAvailable == false && !e.value.twitterURL){
                
                  this.toastr.error("Can not save empty field fill, all social url ")
                  this.apiService.getData(this.apiService.serverPath+'Supplier/businessinfo').subscribe(data =>{
                  console.log(data)
                    this.modelfield.nameOfBusiness =data.nameOfBusiness;
                    this.modelfield.businessDetails = data.businessDetails;
                    if(data.fbAvailable ==  false)
                    {
                      this.modelfield.facebookURL = '';
                    
                    }else{ this.modelfield.facebookURL= data.facebookURL;}
                    
                    if(data.twitterAvailable ==  false)
                    {
                      this.modelfield.twitterURL = '';
                    }else{  this.modelfield.twitterURL =data.twitterURL;}

                    
                    if(data.googleAvailable ==  false)
                    {
                      this.modelfield.googleURL = '';
                    }else{    this.modelfield.googleURL = data.googleURL;}

                                  
                    if(data.instaAvailable ==  false)
                    {
                      this.modelfield.instalURL = '';
                    }else{this.modelfield.instalURL = data.instalURL;}                
                
                    if(data.perfectWeddingAvailable ==  false)
                    {
                      this.modelfield.perfectWeddingURL = '';
                    }else{     this.modelfield.perfectWeddingURL = data.perfectWeddingURL;}
                  
                  },error=>{console.log(error)})
                } else{                      
                         this.apiService.postData(this.apiService.serverPath+'Supplier/updatebusinessinfo', this.vendor).subscribe((responce)=>{ 
                          
                            this.toastr.success(responce.message);
                          if(responce.status == 200)
                          {
                            //this.http.get(this.url,{headers:headers})
                            this.apiService.getData(this.apiService.serverPath+'Supplier/businessinfo').subscribe(data =>{
                              this.modelfield.nameOfBusiness =data.nameOfBusiness;
                              this.modelfield.businessDetails = data.businessDetails;
                              if(data.fbAvailable ==  false)
                              {
                                this.modelfield.facebookURL = '';
                              }else{ this.modelfield.facebookURL= data.facebookURL;}
                              
                              if(data.twitterAvailable ==  false)
                              {
                                this.modelfield.twitterURL = '';
                              }else{  this.modelfield.twitterURL =data.twitterURL;}

                              
                              if(data.googleAvailable ==  false)
                              {
                                this.modelfield.googleURL = '';
                              }else{    this.modelfield.googleURL = data.googleURL;}

                                            
                              if(data.instaAvailable ==  false)
                              {
                                this.modelfield.instalURL = '';
                              }else{       this.modelfield.instalURL = data.instalURL;}
                              if(data.perfectWeddingAvailable ==  false)
                              {
                                this.modelfield.perfectWeddingURL = '';
                              }else{     this.modelfield.perfectWeddingURL = data.perfectWeddingURL;}

                            },error=>{console.log(error)})
                          } 

                          },(error)=>{console.log(error)
                        this.toastr.error(error._body,error.statusText);});
                }
      }

      closeModel(dialogname){
        this.total = 0;
                  
                    switch(dialogname){
                      case 'DescriptionDailog':
                      if(this.businessDetails!=undefined){
                      this.businessDetails.nativeElement.value=this.vendor.businessDetails;}
                      this.DescriptionDailog=false;
                      break;
                      case 'BusinessDailog':
                      if(this.nameOfBusiness!=undefined){
                      this.nameOfBusiness.nativeElement.value=this.vendor.nameOfBusiness;  }
                      this.BusinessDailog=false;
                      break;
                      case 'facebookDailog':
                      if(this.fburl!=undefined){
                      this.fburl.nativeElement.value=this.vendor.facebookURL;}
                      this.facebookDailog=false;
                      break;
                      case 'twitterDailog':
                      if(this.twurl!=undefined){
                      this.twurl.nativeElement.value=this.vendor.twitterURL;}
                      this.twitterDailog=false;
                      break;
                      case 'googleDailog':
                      if(this.gUrl!=undefined){
                      this.gUrl.nativeElement.value=this.vendor.googleURL;}
                      this.googleDailog=false;
                      break;
                      case 'instagramDailog':
                      if(this.insUrl!=undefined){
                      this.insUrl.nativeElement.value=this.vendor.instalURL;}
                      this.instagramDailog=false;
                      break;
                      case 'instagram2Dailog':
                      if(this.pwUrl!=undefined){
                      this.pwUrl.nativeElement.value=this.vendor.perfectWeddingURL;}
                      this.instagram2Dailog=false;
                      break;
                    }
                      this.imagecropDailog = false;
                      this.pageInitialize();
      } 
    
      switch_fbAvailable(e){
      if(e==true){
  
        if(this.modelfield.facebookURL=this.modelfield.facebookURL){
          this.modelfield.facebookURL;
          this.disabletxtTwurl=false;
         }else{
          this.modelfield.facebookURL="";
         }
        this.disabletxtFburl=false;
      }else{
        this.disabletxtFburl=true;
      }
        this.isValidUrl(this.modelfield.facebookURL,'Fb');
      }
  
      switch_twitterAvailable(e){
      if(e==true){
  
        if(this.modelfield.twitterURL=this.modelfield.twitterURL){
          this.modelfield.twitterURL;
          this.disabletxtTwurl=false;
         }else{
          this.modelfield.twitterURL="";
         }
      
        this.disabletxtTwurl=false;
      }else{
     
        this.disabletxtTwurl=true;
      }
        this.isValidUrl(this.modelfield.twitterURL,'Tw');
      }
  
      switch_googleAvailable(e){
        if(e==true){
          if(this.modelfield.googleURL=this.modelfield.googleURL){
            this.modelfield.googleURL;
            this.disabletxtTwurl=false;
           }else{
            this.modelfield.googleURL="";
           }
      
        this.disabletxtGoogeurl=false;
        }else{
          this.disabletxtGoogeurl=true;
        }
        this.isValidUrl(this.modelfield.googleURL,'Google');
      }
  
      switch_instaAvailable(e){
        if(e==true){
          if(this.modelfield.instalURL=this.modelfield.instalURL){
            this.modelfield.instalURL;
            this.disabletxtTwurl=false;
            this.disabletxtFburl=false;
           }else{
            this.modelfield.instalURL="";
           }
        this.disabletxtInstaUrl=false;
        }else{
          this.disabletxtInstaUrl=true;
        }
        this.isValidUrl(this.modelfield.instalURL,'Insta');
      }
  
      switch_perfectWeddingAvailable(e){
        if(e==true){
          if(this.modelfield.perfectWeddingURL=this.modelfield.perfectWeddingURL){
            this.modelfield.perfectWeddingURL;
            this.disabletxtTwurl=false;
           }else{
            this.modelfield.perfectWeddingURL="";
           }
        this.disabletxtOtherUrl=false;
        }else{
          this.disabletxtOtherUrl=true;
        }
        this.isValidUrl(this.modelfield.perfectWeddingURL,'Other');
      }

      isValidUrl(url, urlType): boolean{
        let matcher = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
        let isValidUrl=false;
        switch(urlType){
          case 'Fb':
          isValidUrl=this.isValidFbUrl= matcher.test(url);
          break;
          case 'Tw':
          isValidUrl=this.isVaidTwUrl = matcher.test(url);
          break;
          case 'Google':
          isValidUrl=this.isValidGoogeUrl = matcher.test(url);
          break;
          case 'Insta':
          isValidUrl=this.isValidInstaUrl = matcher.test(url);
          break;
          case 'Other':
          isValidUrl=this.isValidOtherUrl = matcher.test(url);
          break;
        }
        return isValidUrl;
      }

      pageInitialize(){
        $.getScript('./assets/js/vendorsidebar.js');
       // this.http.get(this.url,{headers:headers})
        this.apiService.getData(this.apiService.serverPath+'Supplier/businessinfo').subscribe(data =>{
        this.vendor = data;

        if(!this.vendor.fileId)
                      {
                        
                      
                        this.imagee = "https://openclipart.org/download/247324/abstract-user-flat-1.svg";
                        
                        }else{  
                          this.imagee = this.vendor.files.path ;
                      }
        })
      }

      updateHeaderImg(){
        this.valueChange.emit(this.imagee);
      }

      closeOpenDialog(){
        this.facebookDailog = false;
        this.twitterDailog = false;
        this.instagramDailog = false;
        this.googleDailog = false;
        this.instagram2Dailog  = false;
        this.DescriptionDailog = false;
        this.BusinessDailog = false;
        this.imagecropDailog = false;
      }

      UpdateSocialUrl(urlType){

        let openDialog:boolean;
        let chekIsValidUrl=true;
        switch(urlType){
          case 'Fb':
          if(this.fburl!=undefined){
          chekIsValidUrl=this.isValidUrl(this.fburl.nativeElement.value,'Fb');
          if(chekIsValidUrl){
          this.vendor.facebookURL = this.fburl.nativeElement.value;
          }else{
            this.fburl.nativeElement.value=this.vendor.facebookURL;
            if(this.modelfield.fbAvailable==true){
            chekIsValidUrl = false;}}}
          break;
          case 'Tw':
          
          if(this.twurl!=undefined){
          chekIsValidUrl=this.isValidUrl(this.twurl.nativeElement.value,'Tw');
          if(chekIsValidUrl){
          this.vendor.twitterURL = this.twurl.nativeElement.value;
          }else{
            if(this.modelfield.twitterAvailable==true){
            chekIsValidUrl = false;}}}
          break;
          case 'Google':
          if(this.gUrl!=undefined){
          chekIsValidUrl=this.isValidUrl(this.gUrl.nativeElement.value,'Tw');
          if(chekIsValidUrl){
          this.vendor.googleURL = this.gUrl.nativeElement.value;
          }else{
            if(this.modelfield.googleAvailable==true){
            chekIsValidUrl=false;}}}
          break;
          case 'Insta':
          if(this.insUrl!=undefined){
          chekIsValidUrl=this.isValidUrl(this.insUrl.nativeElement.value,'Tw');
          if(chekIsValidUrl){
          this.vendor.instalURL = this.insUrl.nativeElement.value;
          }else{
            if(this.modelfield.twitterAvailable==true){
            chekIsValidUrl=false;}
          }}
          break;
          case 'Other':
          if(this.pwUrl!=undefined){
          chekIsValidUrl=this.isValidUrl(this.pwUrl.nativeElement.value,'Tw');
          if(chekIsValidUrl){
          this.vendor.perfectWeddingURL = this.pwUrl.nativeElement.value;
          }else{
            if(this.modelfield.perfectWeddingAvailable==true){
            chekIsValidUrl=false;}
          }}
          break;
        }
        if(chekIsValidUrl==true){
        this.apiService.postData(this.apiService.serverPath+'Supplier/updatebusinessinfo', this.vendor).subscribe(data=>{
            this.toastr.success(data.message);
            this.closeOpenDialog();
        })
      }else{
        this.toastr.error('Link entered is not valid');
      }
      }
}


