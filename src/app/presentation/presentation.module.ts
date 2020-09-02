import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './layout/home/home.component';
import { SelectLanguageComponent } from './layout/select-language/select-language.component';
import { HeaderComponent } from './layout/header/header.component';
import { SettingComponent } from './layout/setting/setting.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    SelectLanguageComponent,
    HeaderComponent,
    SettingComponent,
    SideBarComponent,
    

  ],
  imports: [
    SharedModule,
    RouterModule
    
  ],
  exports: [
    HomeComponent,
    SelectLanguageComponent,
    HeaderComponent,
    SettingComponent,
    SideBarComponent,
  ]
})
export class PresentationModule { }
