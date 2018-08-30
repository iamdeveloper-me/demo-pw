import { Component, OnInit ,Input} from '@angular/core';
import { Http,Headers } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  modelfield : any = {};
  currentPage: string = "About"
  obj = [];
  name= 'fgdfgdfgdfgdf'
  Country = 'India'; 
  District = 'Delhi';
  StreetAddress = '12, Park Street road';
  phone1 = '0731-666666';
  phone2 = '0731-555555';
  phone3 = '1234567890';
  Sunday = 'Closed';
  Mondayopen = '9:00' ;Mondayclose = '5:00';
  Tuesdayopen= '9:00' ;Tuesdayclose= ' 5:00';
  Wednesdayopen ='9:00';Wednesdayclose ='5:00';
  Thursdayopen = '9:00';Thursdayclose = '5:00';
  Fridayopen =  '9:00';Fridayclose=  '5:00';
  Saturday = 'Closed';
  constructor(public http: Http) {}
  private urlget: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/mylocations'
  private urlpost: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/savelocation'

  location: any = {};

  countryArray:string[];
  ngOnInit(): void {

    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
                      
    this.http.get(this.urlget,{headers:headers}).subscribe((data) => { 
    this.countryArray = data.json() as string[]
    console.log( data.json() as string[] );

  



    this.http.get(this.urlget,{headers:headers}).subscribe(
      data =>{ 
               console.log( data.json());
             });});

  //  this.http.post(this.urlpost,{
  //   vendorLocationId: 0,
  //   title: "string",
  //   countryId: 1,
  //   vendorId: 12,
  //   country: {
  //     countryId: 1,
  //     countryName: "india"
  //   },
  //   city: "string",
  //   postalCode: "string",
  //   address: "string",
  //   phone: "string",
  //   mobile: "string"

  // },{headers:headers}).subscribe(
  //             data =>{ 
  //                      console.log(data.json());
  //                    });


    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/jquery/jquery.min.js');
    $.getScript('https://blackrockdigital.github.io/startbootstrap-simple-sidebar/vendor/bootstrap/js/bootstrap.bundle.min.js');
    $.getScript('./assets/js/vendorsidebar.js');
    //edit js
    $.getScript('./assets/js/vertical-timeline.js');
    function testAnim(x) {
      $('.modal .modal-dialog').addClass('animated');
      $('.modal .modal-dialog').addClass('bounceIn');
  };
 
  $('#location').on('show.bs.modal', function (e) {
    var anim = $('#entrance').val();
        testAnim(anim);
  })
  $('#location').on('hide.bs.modal', function (e) {
    var anim = $('#exit').val();
        testAnim(anim);
  })
  $('#phone').on('show.bs.modal', function (e) {
    var anim = $('#entrance').val();
        testAnim(anim);
  })
  $('#phone').on('hide.bs.modal', function (e) {
    var anim = $('#exit').val();
        testAnim(anim);
  })
  }
  openModel(b){
    console.log(b);
    this.modelfield  = b;
    
  }
  upForm(info){

console.log('------------------------------------------------'+info);

// var phone = info.value.phone;
//     let headers = new Headers();
//     var authToken = localStorage.getItem('userToken');
//     headers.append('Accept', 'application/json')
//     headers.append('Content-Type', 'application/json');
//     headers.append("Authorization",'Bearer '+authToken);
//     console.log(info);
  
//     this.http.post(this.urlpost,{
//       vendorLocationId: 0,
//       title: "mahi",
//       countryId: 1,
//       vendorId: 12,
//       country: {
//         countryId: 1,
//         countryName: "india"
//       },
//       city: "indore",
//       postalCode: "5456",
//       address: "string",
//       phone: phone,
//       mobile: "4826812459"
//     },{headers:headers}).subscribe( data =>{ console.log(data.json()); });
  
  
  }

  enable =  true;
  enable1 =  false;
  enable2 =  true;
  enable3 =  true;
  enable4 =  true;
  enable5 =  true;
  enable6 =  true;
  enable7 =  true;
  count = 0;
  onSubmit() { }

  onChange() {
    this.count++;
  }

  showPage(page: string) {
    this.currentPage = page;
}
//model
closeResult: string;
}