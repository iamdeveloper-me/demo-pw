import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navemenu',
  templateUrl: './navemenu.component.html',
  styleUrls: ['./navemenu.component.scss']
})
export class NavemenuComponent implements OnInit {
    currentLang = 'en';
    toggleClass = 'ft-maximize';

  constructor(public translate: TranslateService) { const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : 'en'); }


  ngOnInit() {
  
    $.getScript('./assets/js/navtitle.js');
    $(document).ready(function(){
    $('.togglebtnmenu').on('click', function(){
     //alert("h1");
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
    //alert("bye")
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
   
    if(window.location.pathname == '/vendor/dashboard' ) {
       //name = "cdscvd";
      } 
      else {
        if(window.location.pathname == '/vendor/business' ) {
        //   name = 'dcdc';
        }  }
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
