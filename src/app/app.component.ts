import { Component, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './core/service/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  defaultLanguage;

  constructor(
    private translateService: TranslateService,
    private languageService: LanguageService,
    private rederer: Renderer2,
  ) {

  }
  ngOnInit(): void {
    this.setDefaultLanguage();
  }

  setDefaultLanguage() {
    const languages = this.languageService.getLanguages();
    const defualtLanguage = languages.filter(item => item.isDefault)[0];
    console.log(defualtLanguage);
    if(!localStorage.getItem('language') ||  localStorage.getItem('language')  == 'undefined' ||
     !localStorage.getItem('direction') ) {
      localStorage.setItem('language', defualtLanguage.title);
      localStorage.setItem('direction', defualtLanguage.isRtl ? 'rtl': 'ltr');
     }
     this.rederer.addClass(document.body, localStorage.getItem('direction'));
     this.defaultLanguage = localStorage.getItem('language');
     this.translateService.setDefaultLang(this.defaultLanguage);
  }
}
