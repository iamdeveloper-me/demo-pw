
import { NgForm } from '@angular/forms';
import { CropperSettings, ImageCropperComponent } from 'ng2-img-cropper';
import { Component, OnInit ,Input , ViewChild, NgZone,} from '@angular/core';
import { Http,Headers } from '@angular/http';


 


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
  facebook;
  enable = false;
  Description;
  twitter;
  instagram;
  google;
  Businesname;
  perfectWedding;
  private uploadimage: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/FilesUploader/FileUploader';
  private url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/businessinfo'


 
  vendor: any = { nameOfBusiness: '',
    businessDetails: '',
    contactPerson: '',
   // pictureUrl: infopicture,
    facebookURL: '',
    twitterURL: '',
    googleURL:  '',
    instalURL:'',
    perfectWeddingURL: '',
    files:{path:''}
  };

  FacebookSwitch =  false;
  examp = true;
  modelfield: any = {};
  primarylocation:any = {};
  countryArray:string[];
  imagee:any;
  data: any;
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
m;


geocoder:any;


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
         console.log(image.src);    
    };

    myReader.readAsDataURL(file);
  }

  constructor(public http: Http)
     {
          
  
          this.cropperSettings = new CropperSettings();
          this.cropperSettings.croppedWidth =50;
          this.cropperSettings.croppedHeight = 50;
          this.cropperSettings.canvasWidth = 300;
          this.cropperSettings.canvasHeight = 200;
          this.cropperSettings.noFileInput = true;
          this.data = {};
  
  
  
  
  
  }  
  
  
  ngOnInit() {



    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);



  
    this.http.get(this.url,{headers:headers}).subscribe(data =>{
    console.log(data.json());
    this.vendor = data.json();
  
          
    if(!this.vendor.fileId)
                   {
                     alert("ghfgh");
                     console.log(this.vendor.files );
                     this.imagee = "https://api.asm.skype.com/v1/objects/0-sa-d7-42ce40a5cedd583b57e96843e17d67e2/views/imgpsh_fullsize";
                     console.log( this.imagee);
                    }else{  this.imagee = this.vendor.files.path ;}
    this.facebook = data.json().facebookURL ;

    this.twitter = data.json().twitterURL ;
    this.instagram = data.json().instalURL ;
    this.google = data.json().googleURL;
    this.Businesname = data.json().nameOfBusiness ;
    this.Description = data.json().businessDetails ;  
    this.perfectWedding = data.json().perfectWeddingURL  ;
    console.log(data.json());

    })

    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');


    $("#Instagram-function").click(function() {
    });
    

    $(".bussinesstab").click(function(){
      $(".bussinesstabbox").show();
      $(".locationtabbox").hide();  
      $(".bussinesstab").addClass("selected"); 
      $(".locationtab").removeClass("selected"); 
    });
    
    $(".locationtab").click(function(){
      $(".bussinesstabbox").hide();
      $(".locationtabbox").show();  
      $(".bussinesstab").removeClass("selected"); 
      $(".locationtab").addClass("selected"); 
    });

  
    $('.photogallry').hide();
    $("div").removeClass( "modal-backdrop"); 
    $("#instagram2").removeClass( "modal-backdrop"); 
    function testAnim(x) {
      $('.modal .modal-dialog').addClass('animated');
      $('.modal .modal-dialog').addClass('bounceIn');


      
   };
 
   $('#facebook').on('show.bs.modal', function (e) {
    var anim = $('#entrance').val();
        testAnim(anim);
   })
   $('#facebook').on('hide.bs.modal', function (e) {
    var anim = $('#exit').val();
        testAnim(anim);
   })
  
   $('#twitter').on('show.bs', function (e) {
    var anim = $('#entrance').val();
        testAnim(anim);
   })
   $('#twitter').on('hide.bs', function (e) {
    var anim = $('#exit').val();
        testAnim(anim);
   })
  
   $('#google').on('show.bs', function (e) {
    var anim = $('#entrance').val();
        testAnim(anim);
   })
   $('#google').on('hide.bs', function (e) {
    var anim = $('#exit').val();
        testAnim(anim);
   })
  
   $('#instagram').on('show.bs', function (e) {
    var anim = $('#entrance').val();
        testAnim(anim);
   })
   $('#instagram').on('hide.bs', function (e) {
    var anim = $('#exit').val();
        testAnim(anim);
   })
  
   $('#instagram2').on('show.bs', function (e) {
    var anim = $('#entrance').val();
        testAnim(anim);
   })
   $('#instagram2').on('hide.bs', function (e) {
    var anim = $('#exit').val();
        testAnim(anim);
   })
  
   $('#Businesname').on('show.bs', function (e) {
    var anim = $('#entrance').val();
        testAnim(anim);
   })
   $('#Businesname').on('hide.bs', function (e) {
    var anim = $('#exit').val();
        testAnim(anim);
   })
  
   $('#Description').on('show.bs', function (e) {
    var anim = $('#entrance').val();
        testAnim(anim);
   })
   $('#Description').on('hide.bs', function (e) {
    var anim = $('#exit').val();
        testAnim(anim);
   })

 


$(document).on('click', ".saveall", function() {
     
      $(this).parents('.modal').css("display", "none");
      $(this).parents('.modal').removeClass("show");
      $('.modal-backdrop').hide();
      $('.modal-backdrop').removeClass("fade");
      $('.modal-backdrop').removeClass("show");
      $('body').removeClass("modal-open");
   });


    
  }
save(){
 
}
 


  //businessinformation 

  gallery = { files: ''}
  @ViewChild("fileInput") fileInput;

  addFile(infoo): void {
   
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
          
           console.log(data.json().filesId);
           this.fileid = data.json().filesId;
       
          this.http.get(this.url,{headers:headers}).subscribe(data =>{
            console.log(data.json());
           
            if(!data.json().files)
            { alert("df");
              this.imagee = 'https://api.asm.skype.com/v1/objects/0-sa-d7-42ce40a5cedd583b57e96843e17d67e2/views/imgpsh_fullsize'}
            else{ this.imagee = data.json().files.path ;}
        
            let updatebusinessinfo = this.http.post("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/updatebusinessinfo",
           {   
              nameOfBusiness: data.json().nameOfBusiness,
              businessDetails: data.json().businessDetails,
              contactPerson: 'scsc',
              // pictureUrl: infopicture,
              fileId:    this.fileid,
              facebookURL: data.json().facebookURL,
              twitterURL: data.json().twitterURL,
              googleURL:  data.json().googleURL,
              instalURL: data.json().instalURL ,
              perfectWeddingURL: data.json().perfectWeddingURL,
            },{headers:headers})
              
              updatebusinessinfo.subscribe((data)=>{ console.log(data.json());
                this.imagecropDailog = false;
               });
          });
        });
      }
    }
    openModel(b){
      this.modelfield = b; 
      console.log(this.modelfield);
    }


  upForm(info){

          var data = this.addFile(info);
           console.log(info);
          //this.addFile(info);
        
         
            var infofacebook = info.value.facebook;
            var infotwitter = info.value.twitter;
            var infogoogle = info.value.google;
            var fileId = this.addFile(info);
            var infodetails = info.value.businessDetails ;
            var infobusiness =   info.value.nameOfBusiness;
            var infoinsta = info.value.instagram;
            var  perfectWeddingsite =   info.value.perfectWedding;
            
            this.vendor.nameOfBusiness = info.value.nameOfBusiness; 
            this.vendor.businessDetails  = info.value.businessDetails ;
            this.vendor.facebookURL = info.value.facebook;
            this.vendor.twitterURL = info.value.twitter;
            this.vendor.googleURL = info.value.google;
            this.vendor.instalURL  = info.value.instagram;
            this.vendor.perfectWeddingURL =  info.value.perfectWedding;
              let headers = new Headers();
              var authToken = localStorage.getItem('userToken');
              headers.append('Accept', 'application/json')
              headers.append('Content-Type', 'application/json');
              headers.append("Authorization",'Bearer '+authToken);

              let updatebusinessinfo = this.http.post("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/updatebusinessinfo",
                           {   
                              nameOfBusiness:  infobusiness,
                              businessDetails: infodetails,

                              fbAvailable:     info.value.FacebookSwitch,
                              twitterAvailable: info.value.twitterSwitch,
                              googleAvailable: info.value.googleSwitch ,
                              instaAvailable: info.value.instagramSwitch,
                              perfectWeddingAvailable: info.value.instagram2Switch,
                              fileId:fileId,
                              contactPerson: 'scsc',
                              facebookURL: infofacebook,
                              twitterURL: infotwitter,
                              googleURL:  infogoogle,
                              instalURL: infoinsta ,
                              perfectWeddingURL: perfectWeddingsite,

                          
                          },{headers:headers});  
 
            updatebusinessinfo.subscribe((responce)=>{ console.log(responce.status);
              if(responce.status == 200)
              {
                this.facebookDailog = false;
                this.twitterDailog = false;
                this.instagramDailog = false;
                this.googleDailog = false;
                this.instagram2Dailog  = false;
                this.DescriptionDailog = false;
                this.BusinessDailog = false;
                this.imagecropDailog = false;
                console.log("saved");
                

              }
        });
            
     }
  
  abc(event){

      console.log(event)
    }
         closeResult: string;
    

      closeModel(){
       
        this.facebookDailog = false;
        this.twitterDailog = false;
        this.instagramDailog =false;
        this.googleDailog = false;
        this.instagram2Dailog  = false;
        this.DescriptionDailog = false;
        this.BusinessDailog = false;

      
      } 
  
enable1 =  true;
enable2 =  true;
enable3 =  true;
enable4 =  true;

}