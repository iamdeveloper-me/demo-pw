import { CropperSettings, ImageCropperComponent } from 'ng2-img-cropper';
import { Component, OnInit ,Input , ViewChild, NgZone,} from '@angular/core';
import { Http,Headers } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms'
import 'rxjs/add/operator/delay';
import { FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-business-info',
  templateUrl: './business-info.component.html',
  styleUrls: ['./business-info.component.scss'],
})

export class BusinessInfoComponent implements OnInit {
  facebookDailog = false;
  twitterDailog = false;
  instagramDailog  = false;
  googleDailog  = false;
  instagram2Dailog  = false;
  DescriptionDailog = false;
  imagecropDailog = false;
  BusinessDailog = false;
  progress = false;
  disabletxtFburl=true;
  cropperupload =true;
  nodata = '';
  Description;
  twitter;
  instagram;
  google;
  total;
  Businesname;
  perfectWedding;
  facebook;
  private uploadimage: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/FilesUploader/FileUploader';
  private url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/businessinfo'
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
  primarylocation:any = {};
  countryArray:string[];
  imagee:any;
  Defaultimage1 = true;
 
  fileid;
  m;
  croper1 = false;
  defaimage = true;
  geocoder:any;
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

  constructor(public http: Http,public toastr: ToastrService)
        {
          this.cropperSettings = new CropperSettings();
          this.cropperSettings.croppedWidth =100;
          this.cropperSettings.croppedHeight = 100;
          this.cropperSettings.canvasWidth = 400;
          this.cropperSettings.canvasHeight = 200;
          this.cropperSettings.noFileInput = true;
          this.data = {};
         }  
  
  
  ngOnInit() {
                $.getScript('./assets/js/vendorsidebar.js');
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
    this.http.get(this.url,{headers:headers}).subscribe(data =>{
    this.vendor = data.json();
    console.log(this.vendor)
   
         
    if(!this.vendor.fileId)
                   {
                    
                     console.log(this.vendor.files );
                     this.imagee = "https://api.asm.skype.com/v1/objects/0-sa-d7-42ce40a5cedd583b57e96843e17d67e2/views/imgpsh_fullsize";
                     console.log( this.imagee);
                    }else{  
                      this.imagee = this.vendor.files.path ;
                    console.log(this.imagee)}

                   
    this.facebook = data.json().facebookURL ;

    this.twitter = data.json().twitterURL ;
    this.instagram = data.json().instalURL ;
    this.google = data.json().googleURL;
    this.Businesname = data.json().nameOfBusiness ;
    this.Description = data.json().businessDetails ;  
    this.perfectWedding = data.json().perfectWeddingURL  ;
    console.log(data.json());

    })
  }

  //businessinformation 
  gallery = { files: ''}
  @ViewChild("fileInput") fileInput;

    addFile(infoo,v): void {
       this.progress = true ;
       this.cropperupload = false;
        console.log(v)
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
              

        this.http.post(this.uploadimage,formData,{headers:headers}).subscribe( (data)=>{
          
          this.fileid = data.json().filesId;
          this.total = 80;

          console.log(this.fileid)
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
          
          console.log(data3);
          
          let updatebusinessinfo = this.http.post("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/updatebusinessinfo",
         data3,{headers:headers})
             
             updatebusinessinfo.subscribe((data)=>{
               console.log(data.json().message);
         
               this.toastr.success(data.json().message);
             
               let headers = new  Headers();
               var authToken = localStorage.getItem('userToken');
               headers.append('Accept', 'application/json')
               headers.append('Content-Type', 'application/json');
               headers.append("Authorization",'Bearer '+authToken);
               this.http.get(this.url,{headers:headers}).subscribe(data =>{            
                
                
                 this.imagee = data.json().files.path ;


                 setTimeout(() => {
                  console.log('aaaaaaaaaaa',data.json()); 
                  this.imagecropDailog = false;
                  }, 2000);
                
               
                 console.log(this.imagee);
                 //if(this.total == 80 && !data.json().files.path)
                 
                //  console.log(this.total);
                //  {   this.imagecropDailog = false;}
           
                 if(!data.json().files)
                 { 
                   this.imagee = 'https://api.asm.skype.com/v1/objects/0-sa-d7-42ce40a5cedd583b57e96843e17d67e2/views/imgpsh_fullsize'}
                 else{ this.imagee = data.json().files.path ;
                  }

               });
        
              
              });



        });
      }


    }

    openModel(b){
      this.modelfield = b; 
      console.log(this.modelfield);
    }


    upForm(e,data){
           console.log(e.value);
           console.log(data);

          
          this.facebookDailog = false;
          this.twitterDailog = false;
          this.instagramDailog = false;
          this.googleDailog = false;
          this.instagram2Dailog  = false;
          this.DescriptionDailog = false;
          this.BusinessDailog = false;
          this.imagecropDailog = false;
      
              let headers = new Headers();
              var authToken = localStorage.getItem('userToken');
              headers.append('Accept', 'application/json')
              headers.append('Content-Type', 'application/json');
              headers.append("Authorization",'Bearer '+authToken);
              if(e.value.fbAvailable == false && !e.value.facebookURL|| 
              e.value.googleAvailable == false && !e.value.googleURL ||
              e.value.instaAvailable == false && !e.value.instalURL ||
              e.value.perfectWeddingAvailable == false && !e.value.perfectWeddingURL ||
              e.value.twitterAvailable == false && !e.value.twitterURL){
                this.toastr.error("Can not save empty field")
                this.http.get(this.url,{headers:headers}).subscribe(data =>{
                          
                  console.log(this.vendor );
                  this.modelfield.nameOfBusiness =data.json().nameOfBusiness;
                  this.modelfield.businessDetails = data.json().businessDetails;
                  if(data.json().fbAvailable ==  false)
                  {
                    this.modelfield.facebookURL = 'Dont have any URL';
                  }else{ this.modelfield.facebookURL= data.json().facebookURL;}
                  
                  if(data.json().twitterAvailable ==  false)
                  {
                    this.modelfield.twitterURL = 'Dont have any URL';
                  }else{  this.modelfield.twitterURL =data.json().twitterURL;}

                  
                  if(data.json().googleAvailable ==  false)
                  {
                    this.modelfield.googleURL = 'Dont have any URL';
                  }else{    this.modelfield.googleURL = data.json().googleURL;}

                                
                  if(data.json().instaAvailable ==  false)
                  {
                    this.modelfield.instalURL = 'Dont have any URL';
                  }else{       this.modelfield.instalURL = data.json().instalURL;}
                
              
                  if(data.json().perfectWeddingAvailable ==  false)
                  {
                    this.modelfield.perfectWeddingURL = 'Dont have any URL';
                  }else{     this.modelfield.perfectWeddingURL = data.json().perfectWeddingURL;}

              
          
                
                
                },error=>{console.log(error)})
              } else{
                      let updatebusinessinfo = this.http.post("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/updatebusinessinfo",
                      e.value,{headers:headers});  

                        updatebusinessinfo.subscribe((responce)=>{ 
                          console.log(responce.status);
                          this.toastr.success(responce.json().message);
                        if(responce.status == 200)
                        {
                          this.http.get(this.url,{headers:headers}).subscribe(data =>{
                          
                            console.log(this.vendor );
                            console.log(data.json().perfectWeddingURL );
                            this.modelfield.nameOfBusiness =data.json().nameOfBusiness;
                            this.modelfield.businessDetails = data.json().businessDetails;
                            if(data.json().fbAvailable ==  false)
                            {
                              this.modelfield.facebookURL = 'Dont have any URL';
                            }else{ this.modelfield.facebookURL= data.json().facebookURL;}
                            
                            if(data.json().twitterAvailable ==  false)
                            {
                              this.modelfield.twitterURL = 'Dont have any URL';
                            }else{  this.modelfield.twitterURL =data.json().twitterURL;}

                            
                            if(data.json().googleAvailable ==  false)
                            {
                              this.modelfield.googleURL = 'Dont have any URL';
                            }else{    this.modelfield.googleURL = data.json().googleURL;}

                                          
                            if(data.json().instaAvailable ==  false)
                            {
                              this.modelfield.instalURL = 'Dont have any URL';
                            }else{       this.modelfield.instalURL = data.json().instalURL;}
                          
                        
                            if(data.json().perfectWeddingAvailable ==  false)
                            {
                              this.modelfield.perfectWeddingURL = 'Dont have any URL';
                            }else{     this.modelfield.perfectWeddingURL = data.json().perfectWeddingURL;}

                        
                    
                          
                          
                          },error=>{console.log(error)})
                                                      
                        
                        } 

                        },(error)=>{console.log(error)
                      this.toastr.error(error._body,error.statusText);});
              }
            
        
    }


    closeModel(){

                  // this.myForm.reset('nameOfBusiness');
                    this.facebookDailog = false;
                    this.twitterDailog = false;
                    this.instagramDailog =false;
                    this.googleDailog = false;
                    this.instagram2Dailog  = false;
                    this.DescriptionDailog = false;
                    this.BusinessDailog = false;
                    this.imagecropDailog = false;
    } 
    
    switch_fbAvailable(e){
      if(e==true){
      this.disabletxtFburl=true;
      }else{
      this.disabletxtFburl=false;
      }
      if(e  ==  false || e ==true)
      {
        this.modelfield.facebookURL = '';
      }
    }
    switch_twitterAvailable(e){
      if(e ==  false || e ==true)
      {
        this.modelfield.twitterURL = '';

      }
    }

    switch_googleAvailable(e){


      if(e  ==  false || e ==true)
      {
        this.modelfield.googleURL = '';
        
      }
    }
    switch_instaAvailable(e){

      if(e ==  false || e ==true)
      {
        this.modelfield.instalURL = '';
       
      }

    }
    switch_perfectWeddingAvailable(e){
      if(e ==  false || e ==true)
      {
        this.modelfield.perfectWeddingURL = '';
       
      }

    }

}