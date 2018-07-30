import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.scss']
})
export class AdminnavbarComponent implements OnInit {

  currentLang = 'en';
    toggleClass = 'ft-maximize';
  constructor(public translate: TranslateService) { const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : 'en'); }
  

  ngOnInit() {
    $(document).ready(function(){
      $('.togglebtnmenu').on('click', function(){
       //alert("h1");
        $(this).toggleClass('cross');
       $('.blackoverlaymobile').toggleClass('blockmobile');
      $('#page-content-wrapper').toggleClass('overhidden');
       $('#wrapper').toggleClass('toggled');
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
