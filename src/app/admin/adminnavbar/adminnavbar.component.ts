import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.scss']
})
export class AdminnavbarComponent implements OnInit {
  public data = '' ;
  currentLang = 'en';
    toggleClass = 'ft-maximize';
  constructor(public translate: TranslateService) { const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : 'en'); }
  

  ngOnInit() { 

    if(window.location.href.indexOf("/Admin/dashboard")>-1){
        this.data = 'Dashboard';
      }
      else if(window.location.href.indexOf('/Admin/taskboard')>-1) {
        this.data = 'Taskboard'; 
      }
      else if(window.location.href.indexOf('/Admin/Useraccountlist')>-1) {
        this.data = 'User Accounts'; 
      }
      else if(window.location.href.indexOf('/Admin/userdetails')>-1) {
        this.data = 'User Details'; 
      }
      else if(window.location.href.indexOf('/Admin/userdetails')>-1) {
        this.data = 'User Details'; 
      }
      else if(window.location.href.indexOf('/Admin/Email')>-1) {
        this.data = 'Messages'; 
      }
      else if(window.location.href.indexOf('/Admin/Tickets')>-1) {
        this.data = 'Tickets'; 
      }
      else if(window.location.href.indexOf('/Admin/advertising')>-1) {
        this.data = 'Advertising'; 
      }
      else if(window.location.href.indexOf('/Admin/Events')>-1) {
        this.data = 'Events Management'; 
      }
      else if(window.location.href.indexOf('/Admin/tipsandartical')>-1) {
        this.data = 'Tips & Articles'; 
      }
      else if(window.location.href.indexOf('/Admin/advertising')>-1) {
        this.data = 'Advertising'; 
      }
      else if(window.location.href.indexOf('/Admin/Reviewandfeedback')>-1) {
        this.data = 'Vendor Review'; 
      }
      else if(window.location.href.indexOf('/Admin/site-feedback')>-1) {
        this.data = 'Site Feedback'; 
      }
      else if(window.location.href.indexOf('/Admin/Adminusers')>-1) {
        this.data = 'Admin Users'; 
      }
      else if(window.location.href.indexOf('/Admin/Sitestats')>-1) {
        this.data = 'Stats & Report'; 
      }
      else if(window.location.href.indexOf('/Admin/userdetails')>-1) {
        this.data = 'User Details'; 
      }
      else if(window.location.href.indexOf('/Admin/Customerbillings')>-1) {
        this.data = 'Invoices'; 
      }
      else if(window.location.href.indexOf('/Admin/adminexpenses')>-1) {
        this.data = 'Admin Expenses'; 
      }



      else{}









    $(document).ready(function(){
      $('.togglebtnmenu').on('click', function(){
       //alert("h1");
        $(this).toggleClass('cross');
       $('.blackoverlaymobile').toggleClass('blockmobile');
      $('#page-content-wrapper').toggleClass('overhidden');
       $('#wrapper').toggleClass('toggled');
      });
  
    $(".navuserlink").click(function(){
     // alert("hi")
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
         $('#wrapper').toggleClass('toggled');
      });
  });
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
