import { Component, OnInit, Renderer2 } from '@angular/core';
import { LanguageService } from '../../../core/service/language.service';

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss']
})
export class SelectLanguageComponent implements OnInit {
  
  defaultLanguage: string;
  languages;

  constructor(
    private languageService: LanguageService,
    private renderer: Renderer2


  ) { }

  ngOnInit(): void {
    this.defaultLanguage = localStorage.getItem('language');
    this.languages = this.languageService.getLanguages();
    console.log(this.languages)
  }
  selectionChange(language) {
    console.log(language)
    localStorage.setItem('language', language.title);
    this.defaultLanguage = language.key;
    this.renderer.removeAttribute(document.body, 'class');
    localStorage.setItem('direction', language.isRtl ? 'rtl': 'ltr');

    this.renderer.addClass(document.body, localStorage.getItem('direction'));
   location.reload(); 
  
  }

}
