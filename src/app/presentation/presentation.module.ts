import { NgModule } from '@angular/core';
import { HomeComponent } from './layout/home/home.component';
import { SelectLanguageComponent } from './layout/select-language/select-language.component';
import { HeaderComponent } from './layout/header/header.component';
import { SettingComponent } from './layout/setting/setting.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { InstantaneousTemperatureComponent } from './dashboard/instantaneous-temperature/instantaneous-temperature.component';
import { AverageTemperatureComponent } from './dashboard/average-temperature/average-temperature.component';



@NgModule({
  declarations: [
    HomeComponent,
    SelectLanguageComponent,
    HeaderComponent,
    SettingComponent,
    SideBarComponent,
    InstantaneousTemperatureComponent,
    AverageTemperatureComponent,
    

  ],
  imports: [
    SharedModule,
    RouterModule
    
  ],
  exports: [
  ]
})
export class PresentationModule { }
