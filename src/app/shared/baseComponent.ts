import { Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


export class BaseComponent {

    protected translateService: TranslateService;
    defaultLanguage;

    constructor(protected injector: Injector) {
        this.translateService = this.injector.get(TranslateService);
        this.defaultLanguage = localStorage.getItem('language');
        console.log(this.defaultLanguage)
        this.translateService.setDefaultLang(this.defaultLanguage);
    }
}