
import { NgForm } from '@angular/forms';
import { CropperSettings, ImageCropperComponent } from 'ng2-img-cropper';
import { Component, OnInit ,Input , ViewChild, NgZone,} from '@angular/core';
import { Http,Headers } from '@angular/http';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';

declare var google: any;
 
interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
 
interface Location {
  lat: number;
  lng: number;
  viewport?: Object;
  zoom: number;
  address_level_1?:string;
  address_level_2?: string;
  address_country?: string;
  address_zip?: string;
  address_state?: string;
  marker?: Marker;
}

@Component({
  selector: 'app-business-info',
  templateUrl: './business-info.component.html',
  styleUrls: ['./business-info.component.scss'],
})

export class BusinessInfoComponent implements OnInit {

  facebook;
  Description;
  twitter;
  instagram;
  google;
  Businesname;
  perfectWedding;
  private uploadimage: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/FilesUploader/FileUploader';

  private urllocationpost: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/savelocation'
  private url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/businessinfo'

  private urlpost: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/savelocation'

  private urlget: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/mylocations'

 
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

  Facebook =  true;
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
circleRadius:number = 5000;
milesToRadius(value) {
  this.circleRadius = value / 0.00062137;
}

circleRadiusInMiles() {
 return this.circleRadius * 0.00062137;
}

markerDragEnd(m: any,event) {
  this.location.marker.lat = m.coords.lat;
  this.location.marker.lng = m.coords.lng;
  this.findAddressByCoordinates();
 }
 findAddressByCoordinates() {
  this.geocoder.geocode({
    'location': {
      lat: this.location.marker.lat,
      lng: this.location.marker.lng
    }
  }, (results, status) => {
    this.decomposeAddressComponents(results);
  })
}

decomposeAddressComponents(addressArray) {
  if (addressArray.length == 0) return false;
  let address = addressArray[0].address_components;

  for(let element of address) {
    if (element.length == 0 && !element['types']) continue

    if (element['types'].indexOf('street_number') > -1) {
      this.location.address_level_1 = element['long_name'];
      continue;
    }
    if (element['types'].indexOf('route') > -1) {
      this.location.address_level_1 += ', ' + element['long_name'];
      continue;
    }
    if (element['types'].indexOf('locality') > -1) {
      this.location.address_level_2 = element['long_name'];
      continue;
    }
    if (element['types'].indexOf('administrative_area_level_1') > -1) {
      this.location.address_state = element['long_name'];
      continue;
    }
    if (element['types'].indexOf('country') > -1) {
      this.location.address_country = element['long_name'];
      continue;
    }
    if (element['types'].indexOf('postal_code') > -1) {
      this.location.address_zip = element['long_name'];
      continue;
    }
  }
}

geocoder:any;
public location:Location = {
  lat: 51.678418,
  lng: 7.809007,
  marker: {
    lat: 51.678418,
    lng: 7.809007,
    draggable: true
  },
  zoom: 5
};
updateOnMap() {
  let full_address:string = this.location.address_level_1 || ""
  if (this.location.address_level_2) full_address = full_address + " " + this.location.address_level_2
  if (this.location.address_state) full_address = full_address + " " + this.location.address_state
  if (this.location.address_country) full_address = full_address + " " + this.location.address_country

  this.findLocation(full_address) ;
}
findLocation(address) {
  console.log(address);
  if (!this.geocoder) this.geocoder = new google.maps.Geocoder()
  this.geocoder.geocode({
    'address': address
  }, (results, status) => {
    console.log(results);
    if (status == google.maps.GeocoderStatus.OK) {
      for (var i = 0; i < results[0].address_components.length; i++) {
        let types = results[0].address_components[i].types

        if (types.indexOf('locality') != -1) {
          this.location.address_level_2 = results[0].address_components[i].long_name
        }
        if (types.indexOf('country') != -1) {
          this.location.address_country = results[0].address_components[i].long_name
        }
        if (types.indexOf('postal_code') != -1) {
          this.location.address_zip = results[0].address_components[i].long_name
        }
        if (types.indexOf('administrative_area_level_1') != -1) {
          this.location.address_state = results[0].address_components[i].long_name
        }
      }
      if (results[0].geometry.location) {
        this.location.lat = results[0].geometry.location.lat();
        this.location.lng = results[0].geometry.location.lng();
        this.location.marker.lat = results[0].geometry.location.lat();
        this.location.marker.lng = results[0].geometry.location.lng();
        this.location.marker.draggable = true;
        this.location.viewport = results[0].geometry.viewport;
      }
      
      this.map.triggerResize()
    } else {
      alert("Sorry, this search produced no results.");
    }
  })
}

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
  @ViewChild(AgmMap) map: AgmMap;
  constructor(public mapsApiLoader: MapsAPILoader,public http: Http,private zone: NgZone,private wrapper: GoogleMapsAPIWrapper)
     {
          this.mapsApiLoader = mapsApiLoader;
          this.zone = zone;
          this.wrapper = wrapper;
          this.mapsApiLoader.load().then(() => {
          this.geocoder = new google.maps.Geocoder();
         
          });
  
          this.cropperSettings = new CropperSettings();
          this.cropperSettings.croppedWidth =50;
          this.cropperSettings.croppedHeight = 50;
          this.cropperSettings.canvasWidth = 400;
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



    this.http.get(this.urlget,{headers:headers}).subscribe((data) => { 
      this.countryArray = data.json() as string[];
     // this.primarylocation = this.countryArray[0];
      console.log(  data.json());
      // this.vendorlocatonid = data.json()[0].vendorLocationId;
    })
  
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
    // console.log(this.facebook);
    // console.log(this.instagram);
    // console.log(this.google);
    // console.log(this.twitter);

    //         if (this.facebook=="" || this.twitter=="" || this.instagram=="" || this.google=="" ) {
    //           console.log('false');
    //         } 
    //         else {
    //           console.log('true');
    //         }
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

  this.location.marker.draggable = true;
 
                      
    this.http.get(this.urlget,{headers:headers}).subscribe((data) => { 
    this.countryArray = data.json() as string[]
    //  console.log( data.json() as string[] );
    // console.log( data.countryId );
    })


$(document).on('click', ".saveall", function() {
      //alert("hi")
      // $(this).parents('.modal').modal('toggle');
      // $(this).parents('.modal').removeClass('show');
      // $(this).parents('.modal').modal('hide');
      $(this).parents('.modal').css("display", "none");
      $(this).parents('.modal').removeClass("show");
      $('.modal-backdrop').hide();
      $('.modal-backdrop').removeClass("fade");
      $('.modal-backdrop').removeClass("show");
      $('body').removeClass("modal-open");
   });

 //    $(".namesave").click(function() {
 //      alert("hi")
 //      $('#Business').hide();
 //      $('#Business').removeClass("show");
 //   });
 // $(".save").click(function() {
 //      alert("hi")
 //      $('#Description').hide();
 //      $('#Description').removeClass("show");
 //   });

    
  }
save(){
 
}
  phone(){
    $(".mobileid").show(); 
       $(".Trading").hide(); 
       $(".title").hide();
   }
   title(){
    $(".mobileid").hide(); 
    $(".Trading").hide(); 
    $(".title").show();
   }
   trading(){
    $(".Trading").show(); 
    $(".mobileid").hide(); 
    $(".title").hide();
   }
  update(c){
    this.updatefield = c; 
    console.log(this.updatefield);
    }
  updatefrom(info){
        console.log(info);
        let headers = new Headers();
        var authToken = localStorage.getItem('userToken');
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization",'Bearer '+authToken);


        this.http.post(this.urlpost,{
          vendorLocationId: info.vendorLocationId,
          title:          info.title,
          countryId:      info.countryId,
          vendorId:       info.vendorId,
          country:        {countryId: info.countryId,countryName: info.countryName},
          city:           info.city,
          postalCode:     info.postalCode,
          address:        info.address,
          phone:          info.phone,
          mobile:         info.mobile ,
          sundayOpen:     info.sundayOpen,
          sundayClose:    info.sundayClose,
          mondayOpen:     info.mondayOpen,
          mondayClose:    info.mondayClose,
          tuesdayOpen:    info.tuesdayOpen,
          tuesdayClose:   info.tuesdayClose,
          wednesdayOpen:  info.wednesdayOpen,
          wednesdayClose: info.wednesdayClose,
          thursdayOpen:   info.thursdayOpen,
          thursdayClose:  info.thursdayClose,
          fridayOpen:     info.fridayOpen,
          fridayClose:    info.fridayClose,
          saturdayOpen:   info.saturdayOpen,
          saturdayClose:  info.saturdayClose,
          isFridayOpen:   info.isFridayOpen,
          isMondayOpen:   info.isMondayOpen,
          isPrimary:      info.isPrimary,
          isSaturdayOpen: info.isSaturdayOpen,
          isSundayOpen:   info.isSundayOpen,
          isThursdayOpen: info.isThursdayOpen,
          isTuesdayOpen:  info.isTuesdayOpen,
          isWednesdayOpen:info.isWednesdayOpen,
         
    
        },{headers:headers}).subscribe(  (responce)=>{ console.log(responce.status);
          if(responce.status == 200)
          {
           
            alert("saved");
            $('.modal').hide();
          }
    },data => { console.log(data.json());}
);
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
              // if(responce.status == 200)
              // { alert("photo uploded");}
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
                              nameOfBusiness: infobusiness,
                              businessDetails: infodetails,
                              contactPerson: 'scsc',
                             // pictureUrl: infopicture,
                             fileId:fileId,
                              facebookURL: infofacebook,
                              twitterURL: infotwitter,
                              googleURL:  infogoogle,
                              instalURL: infoinsta ,
                              perfectWeddingURL: perfectWeddingsite,

                          
                          },{headers:headers});  
 
            updatebusinessinfo.subscribe((responce)=>{ console.log(responce.status);
              if(responce.status == 200)
              {
               
                console.log("saved");
                

              }
        });
            
     }
  
  abc(event){

      console.log(event)
    }
         closeResult: string;
     primelocation(location){  
          console.log(this.updatefield);
          console.log(location);

          this.primarylocation = this.updatefield;
          let headers = new Headers();
          var authToken = localStorage.getItem('userToken');
          headers.append('Accept', 'application/json')
          headers.append('Content-Type', 'application/json');
          headers.append("Authorization",'Bearer '+authToken);


          this.http.post(this.urlpost,{
            vendorLocationId: this.primarylocation.vendorLocationId ,
            title: this.primarylocation.title,
            countryId: this.primarylocation.countryId,
            vendorId: this.primarylocation.vendorId,
            lat: location.lat,
            long: location.lng,
            country: {countryId: this.primarylocation.countryId,countryName: location.address_country},
            city:  location.address_level_1 ,
            postalCode: location.address_zip,
            address: location.address_state ,
            phone: this.primarylocation.phone,
            mobile:   this.primarylocation.mobile ,
            sundayOpen:    this.primarylocation.sundayOpen,
            sundayClose:    this.primarylocation.sundayClose,
            mondayOpen:     this.primarylocation.mondayOpen,
            mondayClose:    this.primarylocation.mondayClose,
            tuesdayOpen:    this.primarylocation.tuesdayOpen,
            tuesdayClose:   this.primarylocation.tuesdayClose,
            wednesdayOpen:  this.primarylocation.wednesdayOpen,
            wednesdayClose: this.primarylocation.wednesdayClose,
            thursdayOpen:   this.primarylocation.thursdayOpen,
            thursdayClose:  this.primarylocation.thursdayClose,
            fridayOpen:    this.primarylocation.fridayOpen,
            fridayClose:    this.primarylocation.fridayClose,
            saturdayOpen:   this.primarylocation.saturdayOpen,
            saturdayClose:  this.primarylocation.saturdayClose,
            isFridayOpen:   this.primarylocation.isFridayOpen,
            isMondayOpen:  this.primarylocation.isMondayOpen,
            isPrimary:     this.primarylocation.isPrimary,
            isSaturdayOpen: this.primarylocation.isSaturdayOpen,
            isSundayOpen:  this.primarylocation.isSundayOpen,
            isThursdayOpen: this.primarylocation.isThursdayOpen,
            isTuesdayOpen:  this.primarylocation.isTuesdayOpen,
            isWednesdayOpen:this.primarylocation.isWednesdayOpen,
          },{headers:headers}).subscribe( (data)=> { console.log(data)}
      ,      (responce)=>{ console.log(responce); });
    
      }
      
  
enable1 =  true;
enable2 =  true;
enable3 =  true;
enable4 =  true;

  
}