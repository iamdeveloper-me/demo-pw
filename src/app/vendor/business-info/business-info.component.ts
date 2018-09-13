
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

  circleRadius:number = 5000;
  milesToRadius(value) {
    this.circleRadius = value / 0.00062137;
 }

 circleRadiusInMiles() {
   return this.circleRadius * 0.00062137;
 }
  
  markerDragEnd(m: any, $event: any) {
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

  facebook;
  Description;
  twitter;
  instagram;
  google;
  Businesname;
  perfectWedding;
  private urlpost: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/savelocation'

  private urlget: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/mylocations'
  private url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/businessinfo'
  vendor: any = {};
  modelfield: any = {};

  countryArray:any= {};
  data: any;

  cropperSettings: CropperSettings;

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
  constructor(public mapsApiLoader: MapsAPILoader,public http: Http,private zone: NgZone,
    private wrapper: GoogleMapsAPIWrapper)
     {
    this.mapsApiLoader = mapsApiLoader;
    this.zone = zone;
    this.wrapper = wrapper;
    this.mapsApiLoader.load().then(() => {
    this.geocoder = new google.maps.Geocoder();
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.croppedWidth =100;
    this.cropperSettings.croppedHeight = 100;
    this.cropperSettings.canvasWidth = 600;
    this.cropperSettings.canvasHeight = 400;
    this.cropperSettings.noFileInput = true;
    this.data = {};
    });
  }  
  
  
  ngOnInit() {
    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
  
    this.http.get(this.url,{headers:headers}).subscribe(data =>{
  //  console.log(data.json());
    this.vendor = data.json();
    this.facebook = data.json().facebookURL ;

    this.twitter = data.json().twitterURL ;
    this.instagram = data.json().instalURL ;
    this.google = data.json().googleURL;
    this.Businesname = data.json().nameOfBusiness ;
    this.Description = data.json().businessDetails ;  
    this.perfectWedding = data.json().perfectWeddingURL  ;
   
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
  }

  openModel(b){
    this.modelfield = b;
  }

    upForm(info){

        //    console.log(info);
            // console.log(info.value.businessDetails );
        //    console.log (this.filedata);
            var infofacebook = info.value.facebook;
            var infotwitter = info.value.twitter;
            var infogoogle = info.value.google;
            var infodetails = info.value.businessDetails ;
            var infobusiness =   info.value.Businesname;
          // var infoperson = info.value.contactPerson;
            //var infopicture = this.filedata.webkitRelativePath ;
            var infoinsta = info.value.instagram;
             var  perfectWeddingsite =   info.value.perfectWedding;

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
                              facebookURL: infofacebook,
                              twitterURL: infotwitter,
                              googleURL:  infogoogle,
                              instalURL: infoinsta ,
                              perfectWeddingURL: perfectWeddingsite,

                          
                          },{headers:headers});  
 
            updatebusinessinfo.subscribe((data) => console.log(data),(error)=>console.log(error));
     }
    abc(event){
      console.log(event)
    }
     closeResult: string;


     locationForm(info){

       alert("fvfr");

     
     console.log(this.countryArray);
   
     console.log(info);
     console.log(this.countryArray[0].vendorLocationId);
 
 var addraddresslineone = info.address_level_1;
 var city = info.address_state;
 var Country = info.address_country;
 var Postalcode = info.address_zip ;
 var lat = info.lat;
 var lng = info.lng;
 var infovendorLocationId =this.countryArray[0].vendorLocationId;
 var infomobile =  this.countryArray[0].mobile;
 var infovendorId =  this.countryArray[0].vendorId;
 var infocountryId = this.countryArray[0].countryId;
 var infophone =  this.countryArray[0].phone;
 var infotitle = this.countryArray[0].title;
// console.log(infotitle);
 var infosundayOpen =  this.countryArray[0].sundayOpen;
 var infosundayClose =  this.countryArray[0].sundayClose;
 var infomondayOpen =   this.countryArray[0].mondayOpen;
 var infomondayClose =   this.countryArray[0].mondayClose;
 var infotuesdayOpen =   this.countryArray[0].tuesdayOpen;
 var infotuesdayClose =  this.countryArray[0].tuesdayClose;
 var infowednesdayOpen =  this.countryArray[0].wednesdayOpen;
 var infowednesdayClose =  this.countryArray[0].wednesdayClose;
 var infothursdayOpen =   this.countryArray[0].thursdayOpen;
 var infothursdayClose = this.countryArray[0].thursdayClose;
 var infofridayOpen =  this.countryArray[0].fridayOpen;
 var infofridayClose =  this.countryArray[0].fridayClose;
 var infosaturdayOpen =  this.countryArray[0].saturdayOpen;
 var infosaturdayClose =  this.countryArray[0].saturdayClose;
 var infoisFridayOpen  = this.countryArray[0].isFridayOpen;
 var infoisMondayOpen =   this.countryArray[0].isMondayOpen;
 var infoisPrimary =  this.countryArray[0].isPrimary;
 var infoisSaturdayOpen =  this.countryArray[0].isSaturdayOpen;
 var infoisSundayOpen =  this.countryArray[0].isSundayOpen ;
 var infoisThursdayOpen =  this.countryArray[0].isThursdayOpen;
 var infoisTuesdayOpen =  this.countryArray[0].isTuesdayOpen;
 var infoisWednesdayOpen =  this.countryArray[0].isWednesdayOpen;
 
 
     let headers = new Headers();
     var authToken = localStorage.getItem('userToken');
     
     headers.append('Accept', 'application/json')
     headers.append('Content-Type', 'application/json');
     headers.append("Authorization",'Bearer '+authToken);
 
 
      this.http.post(this.urlpost,{
       vendorLocationId: infovendorLocationId,
       title: infotitle,
       countryId: infocountryId,
       vendorId: infovendorId,
       lat: lat,
       long: lng,
       country: {countryId: infocountryId,countryName: Country},
       city:  city,
       postalCode:  Postalcode,
       address:  addraddresslineone,
       phone: infophone,
       mobile:   infomobile ,
       sundayOpen:     infosundayOpen,
       sundayClose:    infosundayClose,
       mondayOpen:     infomondayOpen,
       mondayClose:    infomondayClose,
       tuesdayOpen:    infotuesdayOpen,
       tuesdayClose:   infotuesdayClose,
       wednesdayOpen:  infowednesdayOpen,
       wednesdayClose: infowednesdayClose,
       thursdayOpen:   infothursdayOpen,
       thursdayClose:  infothursdayClose,
       fridayOpen:     infofridayOpen,
       fridayClose:    infofridayClose,
       saturdayOpen:   infosaturdayOpen,
       saturdayClose:  infosaturdayClose,
       isFridayOpen:   infoisFridayOpen,
       isMondayOpen:   infoisMondayOpen,
       isPrimary:      infoisPrimary,
       isSaturdayOpen: infoisSaturdayOpen,
       isSundayOpen:   infoisSundayOpen,
       isThursdayOpen: infoisThursdayOpen,
       isTuesdayOpen:  infoisTuesdayOpen,
       isWednesdayOpen:infoisWednesdayOpen,
     },{headers:headers}).subscribe( (data)=> { console.log(data)}
 ,      (responce)=>{ console.log(responce); });
     }
// enable =  true;
// enable1 =  true;
// enable2 =  true;
// enable3 =  true;
// enable4 =  true;
  
}