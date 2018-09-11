import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navemenu',
  templateUrl: './navemenu.component.html',
  styleUrls: ['./navemenu.component.scss']
})
export class NavemenuComponent implements OnInit {
    currentLang = 'en';
    toggleClass = 'ft-maximize';
    public data = '' ;
  constructor(public translate: TranslateService , private router: Router ) { const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : 'en'); }
 
  ngOnInit() {
      if(window.location.pathname == '/vendor/dashboard' ) { 
          this.data = 'Dashboard';
      } else if(window.location.pathname == '/vendor/business' ) {
          this.data = 'Business information ';
      } else if(window.location.pathname == '/vendor/location') {
        this.data = ' Location Trading ';
      } else if(window.location.pathname == '/vendor/business-services') {
       this.data = 'Business Services ';
      } else if(window.location.pathname == '/vendor/Message') {
        this.data = 'Messages ';
      } else if(window.location.pathname == '/vendor/gallery') {
       this.data = 'Overview';  
      } else if(window.location.pathname == '/vendor/Videos') {
       this.data = 'Videos';
      } else if(window.location.pathname == '/vendor/mylisting') {
       this.data = 'Reviews ';
      } else if(window.location.pathname == '/vendor/membership') {
       this.data = 'Membership ';
      } else if(window.location.pathname == '/vendor/PromoteBusiness') {
        this.data = 'Promotions ';
      } else if(window.location.pathname == '/vendor/statistics') {
        this.data = 'Statistics';
      } else if(window.location.pathname == '/vendor/actionfront') {
       this.data = 'Statistics ';
      } else if(window.location.pathname == '/vendor/enquiry') {
        this.data = 'Statistics ';
      } else if(window.location.pathname == '/vendor/gallerybar') {
        this.data = 'Statistics ';
      } else if(window.location.pathname == '/vendor/reachbar') {
       this.data = 'Statistics ';
      } else if(window.location.pathname == '/vendor/storefront') {
       this.data = 'Statistics ';
      } else if(window.location.pathname == '/vendor/editprofile') {
        this.data = 'Edit profile ';
      } else if(window.location.pathname == '/vendor/calender') { 
        this.data = 'Calender';
      } else if(window.location.pathname == '/vendor/gallery') {
       this.data = 'Overview';
      } else if(window.location.pathname == '/vendor/portfolioview') {
        this.data = 'Portfolio';
      } else if(window.location.pathname == '/vendor/settingalbum') {
        this.data = 'PORTFOLIO PHOTO SETTINGS';
      } else if(window.location.pathname == '/vendor/albumview') {
       this.data = 'My Albums ';
      } else if(window.location.pathname == '/vendor/albumviewphoto') {
       this.data = 'My Albums ';
      } else if(window.location.pathname == '/vendor/albumdetailsetting') {
        this.data = ' Album Setting';
      } else if(window.location.pathname == '/vendor/vediosetting') {  
        this.data = 'Vedio Setting';
      } else if(window.location.pathname == '/vendor/eventlist') {
        this.data = 'Events';
      } else if(window.location.pathname == '/vendor/creatpromo') {
        this.data = 'Create Promotion';
      } else if(window.location.pathname == '/vendor/Message') {
        this.data = 'MESSAGES'; 
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
    
  
  
  
  
  
  
  
  
  
  logout(){
         localStorage.clear();
         this.router.navigate(['../home']);
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
