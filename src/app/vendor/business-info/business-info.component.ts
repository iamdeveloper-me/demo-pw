import { Component, OnInit  } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-business-info',
  templateUrl: './business-info.component.html',
  styleUrls: ['./business-info.component.scss']
  
})

export class BusinessInfoComponent implements OnInit {
  vendor: any = {};
  constructor(public http: Http) {
  }
  imag = 'https://s3.us-east-2.amazonaws.com/prefect-image/cake.jpg';
 
  Businesname = 'Rodriguez' ; 
  Description = ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer.' ;
  facebook = 'https://www.facebook.com';
  twitter = 'https://www.twitter.com';
  google = 'https://plus.google.com';
  instagram = 'https://instagram.com' ;
  instagram2 = ' www.perfectwedding.com' ;

  ngOnInit() {

    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);
  
    this.http.get('http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/businessinfo',{headers:headers}).subscribe(data =>{
    this.vendor = data.json();
    this.facebook = data.json().facebookURL ;
    this.vendor = data.json();
    this.twitter = data.json().twitterURL ;
    this.vendor = data.json();
    this.instagram = data.json().instalURL ;
    this.vendor = data.json();
    this.google = data.json().googleURL;
    this.vendor = data.json();
    this.Businesname = data.json().nameOfBusiness ;
    this.vendor = data.json();
    this.Description = data.json().businessDetails ;    



    let headers = new Headers();
    var authToken = localStorage.getItem('userToken');
    headers.append('Accept', 'application/json')
    headers.append('Content-Type', 'application/json');
    headers.append("Authorization",'Bearer '+authToken);

   // console.log(x)
            // var u = x.value.facebookURL;
            // var e = x.value.twitterURL;
            // var j = x.value.googleURL;
            // var k = x.value.businessDetails;
            // var m = x.value.nameOfBusiness;
            // var n = x.value.contactPerson;
            // var o = x.value.pictureUrl;
            // var p = x.value.instalURL;

    let obs = this.http.post("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/updatebusinessinfo",
    {nameOfBusiness: "food bunisess",businessDetails: "various type of food",contactPerson: "www.contactperson.com",pictureUrl: "www.picture.com",facebookURL:"https://www.facebook.com",twitterURL:"https://www.twitter.com",googleURL:"https://plus.google.com",instalURL:"https://instagram.com"},{headers:headers});            
    obs.subscribe((response) => console.log(response),(error)=>console.log(error));


    });;
 
  // this.http.get(this.baseUrl+"api/Reviews/myreviews",{headers:headers})
  // return this.http.get("http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/myprofile" + "/dashboard/home",{headers})
  //   .map(response => response.json())
  //   // .catch(this.handleError);

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

 
abc(event){
      console.log(event)
    }
     closeResult: string;

      

enable =  true;
enable1 =  true;
enable2 =  true;
enable3 =  true;
enable4 =  true;
  
}



