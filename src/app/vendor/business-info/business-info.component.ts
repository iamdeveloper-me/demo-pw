


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

  private url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/businessinfo'
  private urlpost: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/savelocation'
  private urlget: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/mylocations'
 
  vendor: any = {};
  modelfield: any = {};
  countryArray:string[];
  data: any;
  vendorlocatonid;
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


    this.http.get(this.urlget,{headers:headers}).subscribe((data) => { 
      this.countryArray = data.json() as string[]
      // console.log(data.json() as string[]);
      // console.log(data.json()[0].vendorLocationId);
       this.vendorlocatonid = data.json()[0].vendorLocationId;
  })
  
    this.http.get(this.url,{headers:headers}).subscribe(data =>{
 //   console.log(data.json());
    this.vendor = data.json();
    this.facebook = data.json().facebookURL ;
    this.twitter = data.json().twitterURL ;
    this.instagram = data.json().instalURL ;
    this.google = data.json().googleURL;
    this.Businesname = data.json().nameOfBusiness ;
    this.Description = data.json().businessDetails ;  
    this.perfectWedding = data.json().perfectWeddingURL  ;
    });

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


  }

  openModel(b){
    //alert("hh");
    this.modelfield = b;
    //console.log(this.modelfield);
  }
  upForm(info){

         //   console.log(info);
        //   console.log(info.value.businessDetails );
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


    //  =====================================================================
    upForminfo(infoo)
    {
  
    //  console.log( this.modelfield );
      console.log(infoo);
  
      var infovendorLocationId = infoo.value.vendorLocationId;
      var infoaddress =this.modelfield.address;
      var infocity = this.modelfield.city;
      var infomobile = infoo.value.mobile;
  
      var infocountryName =this.modelfield.country;
   
      var infopostalCode = this.modelfield.postalCode;
      var infophone = infoo.value.phone;
      var infotitle = infoo.value.title1;
      var infosundayOpen =  infoo.value.sundayOpen;
      var infosundayClose =  infoo.value.sundayClose;
      
      var infomondayOpen =  infoo.value.mondayOpen;
      var infomondayClose =  infoo.value.mondayClose;
      
      var infotuesdayOpen =  infoo.value.tuesdayOpen;
      var infotuesdayClose =  infoo.value.tuesdayClose;
      
      var infowednesdayOpen =  infoo.value.wednesdayOpen;
      var infowednesdayClose =  infoo.value.wednesdayClose;
      
      var infothursdayOpen =  infoo.value.thursdayOpen;
      var infothursdayClose =  infoo.value.thursdayClose;
      
      var infofridayOpen =  infoo.value.fridayOpen;
      var infofridayClose =  infoo.value.fridayClose;
      
      var infosaturdayOpen =  infoo.value.saturdayOpen;
      var infosaturdayClose =  infoo.value.saturdayClose;
      
       var infoisFridayOpen  = infoo.value.isFridayOpen;
      
       var infoisMondayOpen =  infoo.value.isMondayOpen;
      
       var infoisPrimary =  infoo.value.isPrimary;
      
       var infoisSaturdayOpen = infoo.value.isSaturdayOpen;
      
       var infoisSundayOpen = infoo.value.isSundayOpen ;
      
       var infoisThursdayOpen = infoo.value.isThursdayOpen;
      
       var infoisTuesdayOpen = infoo.value.isTuesdayOpen;
      
       var infoisWednesdayOpen =  infoo.value.isWednesdayOpen;
      
      
        //   console.log(  infoisMondayOpen  );
        
      
          let headers = new Headers();
          var authToken = localStorage.getItem('userToken');
          var countryId = localStorage.getItem('countryid');
          var vendorId = localStorage.getItem('vendorid');
       //   console.log( countryId);
        //  console.log( vendorId);
          headers.append('Accept', 'application/json')
          headers.append('Content-Type', 'application/json');
          headers.append("Authorization",'Bearer '+authToken);
          
  
  
          this.http.post(this.urlpost,{
            vendorLocationId: this.vendorlocatonid,
            title: "dvdv",
            countryId: countryId,
            vendorId: vendorId,
            country: {countryId: countryId,countryName: infocountryName},
            city:  "indore",
            postalCode: "125468",
            address:  infoaddress,
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
            isFridayOpen:   true,
            isMondayOpen:   true,
            isPrimary:      true,
            isSaturdayOpen: true,
            isSundayOpen:   true,
            isThursdayOpen: true,
            isTuesdayOpen:  true,
            isWednesdayOpen:true,
           
      
          },{headers:headers}).subscribe( (data)=> { console.log(data)}
      ,      (responce)=>{ console.log(responce); });
         }

         locationForm(info)
         {
       
           console.log(this.modelfield );
           console.log(info);
       
          
       
       var addraddresslineone = info.address_level_1;
       var city = info.address_state;
       var Country = info.address_country;
       var Postalcode = info.address_zip ;
       var lat = info.lat;
       var lng = info.lng;
       var infovendorLocationId = this.modelfield.vendorLocationId;
       var infomobile = this.modelfield.mobile;
       var infovendorId = this.modelfield.vendorId;
       var infocountryId = this.modelfield.countryId;
       var infophone = this.modelfield.phone;
       var infotitle = this.modelfield.title;
       console.log(infotitle);
       var infosundayOpen = this.modelfield.sundayOpen;
       var infosundayClose =  this.modelfield.sundayClose;
       var infomondayOpen =  this.modelfield.mondayOpen;
       var infomondayClose =  this.modelfield.mondayClose;
       var infotuesdayOpen =  this.modelfield.tuesdayOpen;
       var infotuesdayClose =  this.modelfield.tuesdayClose;
       var infowednesdayOpen = this.modelfield.wednesdayOpen;
       var infowednesdayClose = this.modelfield.wednesdayClose;
       var infothursdayOpen =  this.modelfield.thursdayOpen;
       var infothursdayClose = this.modelfield.thursdayClose;
       var infofridayOpen = this.modelfield.fridayOpen;
       var infofridayClose = this.modelfield.fridayClose;
       var infosaturdayOpen = this.modelfield.saturdayOpen;
       var infosaturdayClose = this.modelfield.saturdayClose;
       var infoisFridayOpen  =this.modelfield.isFridayOpen;
       var infoisMondayOpen =  this.modelfield.isMondayOpen;
       var infoisPrimary = this.modelfield.isPrimary;
       var infoisSaturdayOpen = this.modelfield.isSaturdayOpen;
       var infoisSundayOpen = this.modelfield.isSundayOpen ;
       var infoisThursdayOpen = this.modelfield.isThursdayOpen;
       var infoisTuesdayOpen = this.modelfield.isTuesdayOpen;
       var infoisWednesdayOpen = this.modelfield.isWednesdayOpen;
       
       
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

enable =  true;
enable1 =  true;
enable2 =  true;
enable3 =  true;
enable4 =  true;
  
}



