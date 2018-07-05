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
