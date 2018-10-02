import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Http,Headers } from '@angular/http';
import { LoginServiceService } from '../../shared/service/login-service.service';
@Component({
  selector: 'app-navemenu',
  templateUrl: './navemenu.component.html',
  styleUrls: ['./navemenu.component.scss']
})
export class NavemenuComponent implements OnInit {
    currentLang = 'en';
    toggleClass = 'ft-maximize';
    private url: string  = 'http://testapp-env.tyad3n63sa.ap-south-1.elasticbeanstalk.com/api/Supplier/myprofile'
    vendor: any = {};
  
    public data = '' ;
    constructor(public translate: TranslateService ,public http: Http,private cservice: LoginServiceService, private router: Router ) { const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : 'en'); }

 
  ngOnInit() {

      var firstName = localStorage.getItem('firstName');
      let headers = new Headers();
      var authToken = localStorage.getItem('userToken');
      headers.append('Accept', 'application/json')
      headers.append('Content-Type', 'application/json');
      headers.append("Authorization",'Bearer '+authToken);
  


      this.http.get(this.url,{headers:headers}).subscribe(
        data =>{ this.vendor = data.json();
                 console.log(this.vendor);
                 if(!this.vendor.profileImage)
                 {
                 this.vendor.profileImage = "https://cdn4.iconfinder.com/data/icons/gray-user-management/512/rounded-512.png"
              }
                               });
      // alert(firstName);

      
      
      // if(window.location.pathname == '/vendor/dashboard' ) { 
      //     this.data = 'Dashboard';
      // } 
      if(window.location.href.indexOf("/vendor/dashboard")>-1){
        this.data = 'Dashboard';
      }
      else if(window.location.href.indexOf('/vendor/business')>-1 ){
          this.data = 'Business information ';
      } else if(window.location.href.indexOf('/vendor/location')>-1) {
        this.data = ' Location Trading ';
      } else if(window.location.href.indexOf('/vendor/business-services')>-1) {
       this.data = 'Business Services ';
      } else if(window.location.href.indexOf('/vendor/Message')>-1) {
        this.data = 'Messages ';
      } else if(window.location.href.indexOf('/vendor/gallery')>-1) {
       this.data = 'Overview';  
      } else if(window.location.href.indexOf('/vendor/Videos')>-1) {
       this.data = 'Videos';
      } else if(window.location.href.indexOf('/vendor/mylisting')>-1) {
       this.data = 'Reviews ';
      } else if(window.location.href.indexOf('/vendor/membership')>-1) {
       this.data = 'Membership ';
      } else if(window.location.href.indexOf('/vendor/PromoteBusiness')>-1) {
        this.data = 'Promote Business ';
      } else if(window.location.href.indexOf('/vendor/discountdeals')>-1) {
        this.data = 'Discount & Deals ';
      } else if(window.location.href.indexOf('/vendor/statistics')>-1) {
        this.data = 'Statistics';
      } else if(window.location.href.indexOf('/vendor/actionfront')>-1) {
       this.data = 'Statistics ';
      } else if(window.location.href.indexOf('/vendor/enquiry')>-1) {
        this.data = 'Statistics ';
      } else if(window.location.href.indexOf('/vendor/gallerybar')>-1) {
        this.data = 'Statistics ';
      } else if(window.location.href.indexOf('/vendor/reachbar')>-1) {
       this.data = 'Statistics ';
      } else if(window.location.href.indexOf('/vendor/storefront')>-1) {
       this.data = 'Statistics ';
      } else if(window.location.href.indexOf('/vendor/editprofile')>-1) {
        this.data = 'Edit profile ';
      } else if(window.location.href.indexOf('/vendor/calender')>-1) { 
        this.data = 'Calender';
      } else if(window.location.href.indexOf('/vendor/gallery')>-1) {
       this.data = 'Overview';
      } else if(window.location.href.indexOf('/vendor/portfolioview')>-1) {
        this.data = 'Portfolio';
      } else if(window.location.href.indexOf('/vendor/settingalbum')>-1) {
        this.data = 'PORTFOLIO PHOTO SETTINGS';
      } else if(window.location.href.indexOf('/vendor/albumview')>-1) {
       this.data = 'My Albums ';
      } else if(window.location.href.indexOf('/vendor/albumviewphoto')>-1) {
       this.data = 'My Albums ';
      } else if(window.location.href.indexOf('/vendor/albumdetailsetting')>-1) {
        this.data = ' Album Setting';
      } else if(window.location.href.indexOf('/vendor/vediosetting')>-1) {  
        this.data = 'Vedio Setting';
      } else if(window.location.href.indexOf('/vendor/eventlist')>-1) {
        this.data = 'Events';
      } else if(window.location.href.indexOf('/vendor/creatpromo')>-1) {
        this.data = 'Create Promotion';
      } else if(window.location.href.indexOf('/vendor/Message')>-1) {
        this.data = 'MESSAGES'; 
      }
      else if(window.location.href.indexOf('/Admin/dashboard')>-1) {
        this.data = 'Dashboard'; 
      }
      else if(window.location.href.indexOf('/Admin/Customerbillings')>-1) {
        this.data = 'Invoicesfdfsdfsdfd'; 
      }
      else if(window.location.href.indexOf('/Admin/Taskboard')>-1) {
        this.data = 'Taskboard'; 
      }
      else{}
      
      
    
        $(document).ready(function(){
      $('.togglebtnmenu').on('click', function(){
          $(this).toggleClass('cross');
          $('.blackoverlaymobile').toggleClass('blockmobile');
          $('#page-content-wrapper').toggleClass('overhidden');
          $('#wrapper').toggleClass('toggled');
          });
      $(".navuserlink").click(function(){
            $(".blackoverlaymainuser").addClass( "blockmobile");
            $(".blackoverlaymainuser").css( 'right' , '0px');
            $(".blackoverlaymainuser").css( 'z-index' , '9999');
          });
      $(".blackoverlaymainuser").click(function(){
            $(".blackoverlaymainuser").removeClass( "blockmobile");
            $(".blackoverlaymainuser").css( 'right' , '-100%');
          });
      $('.blackoverlaymobile').on('click', function(){
      //alert("h1");
        $('#wrapper').toggleClass('toggled');
        $('.togglebtnmenu').toggleClass('cross');
        $('.blackoverlaymobile').toggleClass('blockmobile');
        $('#page-content-wrapper').toggleClass('overhidden');
      });
           });
  }
    
  
  
  
  
  
  typeLogout() {
    this.cservice.typeLogout();
}
  
  
  
  logout(){
         localStorage.clear();
         this.router.navigate(['../home']);
         this.typeLogout();
        }
  
  
  
  
  ChangeLanguage(language: string) {
        this.translate.use(language);
      }

      ToggleClass() {
          if (this.toggleClass === 'ft-maximize') {
              this.toggleClass = 'ft-minimize';
          }
          else
              this.toggleClass = 'ft-maximize'
      }
}
