import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { TranslateModule } from '@ngx-translate/core';
import { RTL, LocalizationService, L10N_PREFIX, } from '@progress/kendo-angular-l10n';
import { GaugesModule } from '@progress/kendo-angular-gauges';
import { ChartsModule } from '@progress/kendo-angular-charts';

export function directionFactory() {
  if(localStorage.getItem('direction') === "rtl") {
    return true;
  }
  return false;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    DropDownsModule,
    TranslateModule.forChild(),
    GaugesModule,
    ChartsModule,


  ],
  exports: [
    CommonModule,
    LayoutModule,
    DropDownsModule,
    TranslateModule,
    GaugesModule,
    ChartsModule,

  ],
  providers: [
    { provide: RTL, useFactory: directionFactory },
    LocalizationService,
    {
      provide: L10N_PREFIX,
      useValue: 'kendo.dialog'
    },
  ]
})
export class SharedModule { }
