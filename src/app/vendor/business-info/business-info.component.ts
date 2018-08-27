import { Component, OnInit  } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-business-info',
  templateUrl: './business-info.component.html',
  styleUrls: ['./business-info.component.scss']
  
})

export class BusinessInfoComponent implements OnInit {

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

      console.log(data);
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



