import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LanguageService } from './service/language.service';




export function configServiceFactory(provider: LanguageService) {
  return () => provider.load() ;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: configServiceFactory, deps: [LanguageService], multi: true},
    LanguageService

  ]
})
export class CoreModule { }
